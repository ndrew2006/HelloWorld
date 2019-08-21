<template>
    <div id="app">
        <TodoList v-bind:todos="todos" @delete-todo="deleteTodo"></TodoList>
    </div>
</template>

<script>
import TodoList from './TodoList(dka04).vue'
export default {
    name: 'app',
    data () {
        return {
            todos: ['Ремонт', 'Завтрак']
        }
    },
    components: {
        TodoList
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
}
</script>