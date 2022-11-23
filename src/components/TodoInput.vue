<template>
    <div class="todo-input | todo-item card">
      <div class="checkbox"></div>
      <input
      ref="inputComponent"
      class="input"
      v-model="input"
      type="text"
      placeholder="Create a new todo.."
      @keyup.enter="addTodo"
    />
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  let props = defineProps(["action"]);
  let inputComponent = ref(null);
  let input = ref("");
  function addTodo() {
    props.action(input.value);
    inputComponent.value.value = "";
  }
  </script>
  <style></style>