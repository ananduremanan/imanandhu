<script lang="ts">
	export let title: string = '';
	export let timeline: string = '';
	export let decription: string = '';
	export let organisation: string = '';
	export let clients: any[] = [];
	export let technologies: any[] = [];

	const colors = ['orange', 'pink', 'violet', 'yellow'];

	const getRandomColor = () => {
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	};
</script>

<div class={`bg-${getRandomColor()}-200 w-screen h-[35vh] p-4`}>
	<div class="text-xl font-bold">{title}</div>
	<div class="text-sm text-gray-500">{timeline}</div>
	<p class="mt-4">{decription}</p>
	<p class="mt-4">
		<span class="font-bold">Organisation:</span>{organisation}
	</p>
	<p class="flex">
		<span class="font-bold">Client:</span>
		{#each clients as client}
			<div>{client},</div>
		{/each}
	</p>
	<div class="flex mt-2 gap-1">
		{#each technologies as tech}
			<div class="px-2 bg-blue-400 text-white rounded-xl text-sm">{tech}</div>
		{/each}
	</div>
</div>
