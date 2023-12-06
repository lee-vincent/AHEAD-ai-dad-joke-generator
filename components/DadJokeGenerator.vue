<script setup lang="ts">
	const form = ref({
		url: "",
		temperature: 1,
	});

	const jokeCard = ref();

	async function handleImport(e: typeof form.value) {
		form.value = { ...e };
		if (!form.value.url) return;
		jokeCard.value.generate();
	}
</script>
<template>
	<h1 class="text-4xl my-10">Dad Joke Generator</h1>
	<UrlForm v-bind="form" @submit="handleImport"></UrlForm>
	<div>
		<CardJoke ref="jokeCard" v-bind="form" />
	</div>
</template>
