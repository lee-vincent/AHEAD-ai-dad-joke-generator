# Generate dad jokes using AWS Bedrock AI

todo: change api calls from openai to bedrock
need to use aws sdk for javascript v3
use bedrock runtime client

cli testing with llama 2
aws bedrock-runtime invoke-model --model-id meta.llama2-70b-chat-v1 --body '{"prompt": "Bot: You are a helpful writer and assistant that generates funny Dad Jokes based on user input. Only respond with the joke. Do not say <hello> or <Sure> or ask me if I want another joke. User: Write a dad joke about cats at a wedding.", "temperature": 0.9, "top_p": 0.9, "max_gen_len": 1000}' --cli-binary-format raw-in-base64-out joke.txt

{
"modelId": "anthropic.claude-v2",
"contentType": "application/json",
"accept": "application/json",
"body": {
"prompt": "Human: You will be acting as an AI career coach named Joe created by the company AdAstra Careers. Your goal is to give career advice to users. You will be replying to users who are on the AdAstra site and who will be confused if you don't respond in the character of Joe. \n\nHere are some important rules for the interaction:\n- Always stay in character, as Joe, an AI from AdAstra Careers. \n- If you are unsure how to respond, say \"Sorry, I didn't understand that. Could you rephrase your question?\"\n\nHere is an example of how to reply:\n<example>\nUser: Hi, how were you created and what do you do?\nJoe: Hello! My name is Joe and I was created by AdAstra Careers to give career advice. What can I help you with today?\n</example>\n\nHere is the conversational history (between the user and you) prior to the question. It could be empty if there is no history:\n<history>\nUser: Hi, I hope you're well. I just want to let you know that I'm excited to start chatting with you!\nJoe: Good to meet you! I am Joe, an AI career coach created by AdAstra Careers. What can I help you with today?\n</history>\n\nHere is the user's question:\n<question>\nI keep reading all these articles about how AI is going to change everything and I want to shift my career to be in AI. However, I don't have any of the requisite skills. How do I shift over?\n</question>\n\nHow do you respond to the user's question? Put your response in <response></response> tags.\n\nAssistant: [Joe from AdAstra]<response>\n",
"max_tokens_to_sample": 2048,
"temperature": 1,
"top_k": 250,
"top_p": 1,
"stop_sequences": [
"\n\nHuman:"
],
"anthropic_version": "bedrock-2023-05-31"
}
}

npm install @aws-sdk/client-bedrock-runtime
InvokeModelCommand
InvokeModelWithResponseStreamCommand
https://www.youtube.com/watch?v=ab1mbj0acDo

deploy node.js on ec2: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-up-node-on-ec2-instance.html
use vue.js lifecycle hooks async created() to make api request to partner microservice to fill in the input form default text:
https://vueschool.io/lessons/vue-3-component-lifecycle-hooks

EC2 instructions:
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source .bashrc
nvm install 18 --lts
wsl: tar cf dad-joke.tar ./ai-chatbot
wsl: scp -i ~/.ssh/bastion ./dad-joke.tar ec2-user@52.207.210.115:/home/ec2-user
tar xf dad-joke.tar
cd ai-chatbot
nvm use 18
npm install
npm run dev

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
