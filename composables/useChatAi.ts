import type { AsyncState } from "@/types";

export const useChatAi = () => {
  const state = ref<AsyncState>(null);
  const error = ref();
  const res = ref<string>();

  const generatedJoke = computed(() => res.value);

  interface ChatOptions {
    topic: string,
    temperature: number

}

  async function chat(options: ChatOptions) {
    try {
      state.value = "loading";
      // console.log("options ", {...options})

      const result = await fetchWithTimeout<string>(
        `/api/ai`,
        {
          method: "POST",
          body: {
            ...options,
          },
        }
      );
      
      if (!result) {
        throw new Error("Invalid AI response");
      }

      res.value = result;
      state.value = "complete";
      return res.value;
    } catch (err) {
      state.value = "error";
      error.value = err;
    }
  }

  return {
    state,
    chat,
    generatedJoke,
    res,
  };
};
