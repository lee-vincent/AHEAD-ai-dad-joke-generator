<script setup lang="ts">
	import { ref, reactive, onMounted } from 'vue';
	import axios from 'axios';
	import { computed } from 'vue';

	const placeholderText = computed(() => {
		return `What should we dad joke about? ${placeholder.value.noun}s? ${placeholder.value.verb}? ${placeholder.value.location}?`;
	});
	// Define props for url and temperature only, not for the placeholder values
	const props = defineProps<{
		url: string;
		temperature: number;
	}>();
	
	// Setup the event emitter
	defineEmits(['submit']);

	// Reactive form data
	const form = reactive({
		url: props.url,
		temperature: props.temperature,
	});

	// Define a ref for placeholder values, initialized with default values
	const placeholder = ref({
		location: 'a fun place',
		noun: 'baseball players',
		verb: 'jump'
	});

	// Fetch new placeholder values on component mount
	onMounted(async () => {
		try {
			const response = await axios.get('http://54.224.83.122:3000/api/rand');
			// const response = await axios.get('https://e34zimyozb.execute-api.us-east-1.amazonaws.com/Prod/ad')
			// console.log(response.data);
			if (response.data) {
				placeholder.value.location = response.data.location ?? placeholder.value.location;
				placeholder.value.noun = response.data.noun ?? placeholder.value.noun;
				placeholder.value.verb = response.data.verb ?? placeholder.value.verb;
			}
		} catch (error) {
			console.error('Failed to fetch API data:', error);
		}
	});
</script>

<template>
  <form @submit.prevent="$emit('submit', form)" class="mb-10">
    <div class="flex">
      <input
		:placeholder="placeholderText"
		v-model="form.url"
        class="input input-bordered rounded-r-none w-full max-w-none"
        type="text" />
      <button class="btn rounded-l-none">Generate Dad Joke</button>
    </div>
  </form>
</template>
