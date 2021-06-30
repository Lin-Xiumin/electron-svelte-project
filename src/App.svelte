<script>
	import TodoCount from './Components/TodoCount.svelte';
	import TodoList from './Components/TodoList.svelte';
	export let name;
	let id = 0;
	let todoList = [];
	let endList = [];
	let aTask = undefined;

	function addTodo() {
		if (aTask) {
			todoList = [...todoList, { key: id, text: aTask }];
			id += 1;
			aTask = undefined;
		}
	}

	function swapItem(startList, destList, todoKey) {
		let todoID = startList.findIndex((item) => item.key == todoKey);
		if (todoID < 0) {
			alert('Erreur Indice de la todo non trouvé !' + todoID);
		} else {
			let done = startList.splice(todoID, 1);
			return { startList: startList, destList: [...destList, ...done] };
		}
		return {};
	}

	function finish(todoKey) {
		let newLists = swapItem(todoList, endList, todoKey);
		if (newLists) {
			todoList = newLists.startList;
			endList = newLists.destList;
		}
	}

	function notFinish(todoKey) {
		let newLists = swapItem(endList, todoList, todoKey);
		if (newLists) {
			todoList = newLists.destList;
			endList = newLists.startList;
		}
	}
</script>

<main>
	<h1>Hello {name} !</h1>
	<div id="todo-app">
		<h2>TODO APP</h2>

		<div id="todo-input">
			<input type="text" placeholder="Todo..." bind:value={aTask} />
			<button on:click={addTodo}>Ajouter</button>
		</div>

		<TodoCount list={todoList} endText="à faire !" />
		<TodoList
			list={todoList}
			emptyListText="Allez prendre un café :)"
			handleClick={finish}
		/>

		<TodoCount list={endList} endText="terminé !" />
		<TodoList
			list={endList}
			emptyListText="... \(°~°)/ ..."
			handleClick={notFinish}
		/>
	</div>
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
