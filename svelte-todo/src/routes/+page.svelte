<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	let todos = new Map<number, { text: string }>([
		[1, { text: 'Sample Todo' }] // id is the key
	]);

	let newTodo = '';

	function handleAdd(e: Event) {
		if (!newTodo) {
			alert('Please enter a todo');
			return;
		}

		todos.set(todos.size + 1, { text: newTodo });

		todos = new Map(todos);

		newTodo = '';
	}

	function handleDelete(e: Event) {
		const { id } = e.target as HTMLButtonElement;
		todos.delete(parseInt(id));

		todos = new Map(todos);
	}
</script>

<h1>Svelte Todos</h1>
<section id="add-todo" role="form" class="flex items-center">
	<Input bind:value={newTodo} on:keydown={(e) => e.key === 'Enter' && handleAdd(e)} />
	<Button size="lg" on:click={handleAdd}>Add</Button>
</section>

<section id="todos" class="mt-4 flex flex-col gap-4">
	{#each todos as [id, { text }]}
		<div class="flex items-center justify-between">
			<p>{text}</p>
			<Button size="sm" on:click={handleDelete} {id}>Delete</Button>
		</div>
	{/each}
</section>
