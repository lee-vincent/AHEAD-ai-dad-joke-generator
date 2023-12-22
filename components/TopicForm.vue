<script setup lang="ts">
	const props = defineProps<{
		topic: string;
		temperature: number;
	}>();

	// Setup the event emitter
	defineEmits(["submit"]);

	// Reactive form data
	const form = reactive({
		topic: props.topic,
		temperature: props.temperature,
	});
</script>

<template>
	<form @submit.prevent="$emit('submit', form)" class="mb-10">
		<div class="flex">
			<input
				placeholder="What should we dad joke about?"
				v-model="form.topic"
				class="input input-bordered rounded-r-none w-full max-w-none"
				type="text" />
			<button class="btn rounded-l-none">Generate Dad Joke</button>
		</div>
		<TemperatureSelector v-model="form.temperature" />
	</form>
</template>
