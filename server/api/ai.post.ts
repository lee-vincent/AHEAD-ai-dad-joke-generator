import { Configuration, OpenAIApi } from "openai";
import * as agents from "@/agents";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";



export default defineEventHandler(async (event) => {
  const secret_name = "ai-dad-joke-app";

  const client = new SecretsManagerClient({
    region: "us-east-1",
  });

  let response;

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    );
  } catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error;
  }
  // @ts-expect-error
  const { OPENAI_API_KEY } = JSON.parse(response.SecretString);

  const body = await readBody(event);
  const agent = body.agent || "jokeAgent";

  if (!Object.keys(agents).includes(agent)) {
    throw new Error(`${agent} doesn't exist`);
  };

  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    // messages: [{ role: "user", content: "Send me any 5 digit prime number." }],
    messages: body.messages || [],
    temperature: body.temperature || 0.7,
    // @ts-expect-error checking above if agent exists
    ...agents[agent](body),
  });

  return completion.data;

});
