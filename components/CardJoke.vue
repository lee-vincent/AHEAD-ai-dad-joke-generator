<script setup lang="ts">
	import type { Message } from "~~/types";
	const props = defineProps<{
		messages: Message[];
		topic: string;
		temperature: number;
	}>();
	const { chat, state, generatedJoke } = useChatAi();
	const jokeText = computed(() => generatedJoke.value);
	const generate = () => nextTick(() => chat(props));
	defineExpose({
		generate,
	});
</script>
<template>
	<CardGeneric title="Dad Joke" :state="state" :body="jokeText" class="mb-10">
		<div class="flex w-full justify-between items-center">
			<div>
				<button class="btn btn-neutral" @click="generate()">Regenerate</button>
			</div>
		</div>
	</CardGeneric>
</template>
