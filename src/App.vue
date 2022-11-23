<template>
  <TopBar />
  <TodoInput :action="addTodo" />
  <TodoList :items="todos" />
  <p class="footer">KaziQuest Interview by Cyril Muchemi.</p>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { ref } from "vue";

let storageTodos = JSON.parse(localStorage.getItem("todos"));
// let todos = ref(storageTodos == null ? [] : [...storageTodos]);
let todos = ref([]);
if (storageTodos != null) {
  storageTodos.forEach((todo) => {
    todos.value.push(todo);
  });
}

function addTodo(title) {
  let todo = { title: title, completed: false };
  todos.value.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos.value));
}
</script>
