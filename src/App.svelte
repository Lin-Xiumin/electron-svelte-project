<script>
	import TodoApp from './Components/TodoApp.svelte';
	import LaunchMySurvey from './Components/LaunchMySurvey.svelte';
	export let name;
</script>

<main>
	<h1>Hello {name} !</h1>
	<TodoApp />
	<LaunchMySurvey />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 20;
	}

	h1 {
		color: #ff3e00;
		text-transform: capitalize;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
