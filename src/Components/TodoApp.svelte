<script>
    import TodoCount from './TodoCount.svelte';
    import TodoList from './TodoList.svelte';
    import AddButton from './Atoms/AddButton.svelte';

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

<div id="todo-app">
    <h2>TODO APP</h2>

    <div id="todo-input">
        <input type="text" placeholder="Todo..." bind:value={aTask} />
        <AddButton on:click={addTodo} />
    </div>

    <TodoCount list={todoList} endText="à faire !" />
    <TodoList list={todoList} emptyListText="Allez prendre un café :)" handleClick={finish} />

    <TodoCount list={endList} endText="terminé !" />
    <TodoList list={endList} emptyListText="... \(°~°)/ ..." handleClick={notFinish} />
</div>

<style>
    #todo-app {
        border: 1px solid black;
        margin-bottom: 1em;
    }
</style>
