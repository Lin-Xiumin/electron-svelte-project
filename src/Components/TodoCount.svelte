<script>
    export let list = [];
    export let endText = '';
</script>

<div class="todo-count">
    Vous avez {list.length}
    {list.length <= 1 ? 'tâche' : 'tâches'}
    {endText}
</div>
