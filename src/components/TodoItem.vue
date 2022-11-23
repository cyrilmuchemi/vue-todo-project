<template>
  <div @click="props.onComplete(key)" class="todo-item">
    <div class="checkbox" :class="{ checked: isComplete() }">
        <img src="../assets/images/icon-check.svg" alt="Checked Icon" />
      </div>
    <p :class="{ crossed: isComplete() }">{{ props.title }}</p>
    <img
      @click.stop="props.onRemove(key)"
      class="cross"
      src="../assets/images/icon-cross.svg"
      alt="Delete Todo"
    />
    </div>
  </template>
  
  <script setup>
  import { getCurrentInstance } from "vue";
  const props = defineProps(["title", "completed", "onComplete", "onRemove"]);
  let isComplete = () => props.completed == true;
  let key = getCurrentInstance().vnode.key;
  </script>
  
  <style></style>