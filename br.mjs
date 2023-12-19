import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
// import { Uint8ArrayBlobAdapter } from "@smithy/util-stream"
// const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
// const client = new BedrockRuntimeClient(config);
// const converter = new Uint8ArrayBlobAdapter;

const client = new BedrockRuntimeClient();
const input = { // InvokeModelRequest
    body: '{"prompt": "Bot: You are a helpful writer and assistant that generates funny Dad Jokes based on user input. Only respond with the joke. Do not say or or ask me if I want another joke. User: Write a dad joke about cats at a wedding.", "temperature": 0.9, "top_p": 0.9, "max_gen_len": 1000}', // required
    contentType: "application/json",
    accept: "application/json",
    modelId: "meta.llama2-70b-chat-v1", // required
};
const command = new InvokeModelCommand(input);
const response = await client.send(command);
console.log(response.body.transformToString())

