<script>
    export let list = [];
    export let emptyListText = '';
    export let handleClick;
</script>

<div class="todo-list">
    {#if list.length === 0}
        <p style="text-align: center;">{emptyListText}</p>
    {:else}
        <div class="list">
            {#each list as aTask (aTask.key)}
                <div class="task">
                    <label>
                        <input type="radio" on:click={handleClick(aTask.key)} />
                        {aTask.text}
                    </label>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .todo-list {
        margin: 1em 5%;
        border: 1px dotted gray;
    }

    .list {
        padding: 0 0.5em;
        text-align: left;
        word-wrap: break-word;
    }

    .task:hover {
        background-color: lavenderblush;
    }
</style>
