<template>
    <div class="todo-item">
      <div class="checkbox" :class="{ checked: isComplete }">
        <img src="../assets/images/icon-check.svg" alt="Checked Icon" />
      </div>
      <p :class="{ crossed: isComplete }">{{ props.title }}</p>
      <img class="cross" src="/icon-cross.svg" alt="Delete Todo" />
    </div>
  </template>
  
  <script setup>
  const props = defineProps(["title", "completed"]);
  let isComplete = props.completed == true;
  </script>
  
  <style></style>