<template>
  <div>
    <h2>Todo app</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodoItem 
      @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList 
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodoItem from "@/components/AddTodoItem";
import Loader from "@/components/Loader";

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddTodoItem,
    Loader
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json,
          this.loading = false        
        }, 3000)        
      })
  },
  // watch: {
  //   filter(value) {
  //     console.log(value)
  //   }
  // },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'all': return this.todos
        case 'completed': return this.todos.filter(t => t.completed)
        case 'not-completed': return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>