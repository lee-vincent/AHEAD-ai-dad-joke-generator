<script setup lang="ts">
	const messages = ref<string[]>([]);
	const messagesForApi = computed(() => messages.value);

	const form = ref({
		topic: "",
		temperature: 1,
	});

	const jokeCard = ref();

	const handleUpdateMessages = (newMessage: string) => {
		messages.value.push(newMessage);
		console.log("messages.value after receiving joke ", messages.value);
	};

	async function handleImport(e: typeof form.value) {
		console.log("{ ...e } ", { ...e });
		form.value = { ...e };
		if (!form.value.topic) return;
		messages.value.push(`input: ${form.value.topic}`);
		console.log("messages.value ", messages.value);
		jokeCard.value.generate();
	}
</script>
<template>
	<h1 class="text-4xl my-10">Dad Joke Generator</h1>
	<TopicForm v-bind="form" @submit="handleImport"></TopicForm>
	<div>
		<CardJoke
			ref="jokeCard"
			v-bind="form"
			:messages="messages"
			@update-messages="handleUpdateMessages" />
	</div>
</template>
