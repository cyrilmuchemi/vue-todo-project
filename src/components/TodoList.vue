<template>
    <div class="todo-list | card">
      <TodoItem title="My Todo item" />
      <TodoItem
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo vel eligendi a aut eveniet."
      />
      <TodoItem title="My Todo item" :completed="true" />
      <TodoItem title="My Todo item" />
      <div class="menu | row">
        <h6>5 items left</h6>
        <div class="inner-row bold">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
  
        <p>Clear Completed</p>
      </div>
    </div>
    <div class="detached-menu | card row">
    <p>All</p>
    <p>Active</p>
    <p>Completed</p>
  </div>
  </template>
  <script>
  import TodoItem from "./TodoItem.vue";
  export default { components: { TodoItem } };
  </script>
  <style></style>