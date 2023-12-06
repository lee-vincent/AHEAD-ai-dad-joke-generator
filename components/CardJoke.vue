<script setup lang="ts">
	const props = defineProps<{
		url: string;
		temperature: number;
	}>();
	const { chat, state, firstMessage } = useChatAi({ agent: "joke" });
	const announcement = computed(() => firstMessage.value?.content);
	const generate = () => nextTick(() => chat(props));
	defineExpose({
		generate,
	});
</script>
<template>
	<CardGeneric
		title="Dad Joke"
		:state="state"
		:body="announcement"
		class="mb-10">
		<div class="flex w-full justify-between items-center">
			<div>
				<button class="btn btn-neutral" @click="generate()">Regenerate</button>
			</div>
		</div>
	</CardGeneric>
</template>
