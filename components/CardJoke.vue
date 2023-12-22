<script setup lang="ts">
	const props = defineProps<{
		messages: string[];
		topic: string;
		temperature: number;
	}>();
	const emit = defineEmits(["update-messages"]);
	const { chat, state, generatedJoke } = useChatAi();
	const jokeText = computed(() => generatedJoke.value);
	// const generate = () => nextTick(() => chat(props));
	const generate = async () => {
		await nextTick(() => chat(props));
		emit("update-messages", `you responded: ${jokeText.value}`);
	};
	defineExpose({
		generate,
	});
</script>
<template>
	<CardGeneric title="Dad Joke" :state="state" :body="jokeText" class="mb-10">
	</CardGeneric>
</template>
