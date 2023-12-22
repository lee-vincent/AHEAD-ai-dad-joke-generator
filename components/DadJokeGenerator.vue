<script setup lang="ts">
	import type { Message } from "~~/types";
	const messages = ref<Message[]>([]);
	const messagesForApi = computed(() => messages.value);

	const form = ref({
		messages: [],
		topic: "",
		temperature: 1,
	});

	const jokeCard = ref();

	async function handleImport(e: typeof form.value) {
		console.log({ ...e });
		form.value = { ...e };
		if (!form.value.topic) return;
		const msg = {
			text: `input: ${form.value.topic}`,
		};
		messages.value.push(msg);
		jokeCard.value.generate();
	}
</script>
<template>
	<h1 class="text-4xl my-10">Dad Joke Generator</h1>
	<TopicForm v-bind="form" @submit="handleImport"></TopicForm>
	<div>
		<CardJoke ref="jokeCard" v-bind="form" />
	</div>
</template>
