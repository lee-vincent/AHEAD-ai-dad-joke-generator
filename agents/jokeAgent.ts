import createAgent from ".";

export const jokeAgent = createAgent((context) => {
  return {
    messages: [
      {
        role: "system",
        content:
          "You are a helpful writer and assistant that generates 'Dad Jokes' based on user input.",
      },
      {
        role: "user",
        content: `Create a dad joke about ${context.topic}.`,
      },
    ],
    max_tokens: 350,
  };
});
