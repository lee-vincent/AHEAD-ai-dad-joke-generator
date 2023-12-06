# Generate dad jokes using AWS Bedrock AI

todo: change api calls from openai to bedrock
need to use aws sdk for javascript v3
use bedrock runtime client

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
