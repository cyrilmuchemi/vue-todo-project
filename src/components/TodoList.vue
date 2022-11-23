<template>
    <div class="todo-list | card">
      <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :completed="todo.completed"
      :onComplete="complete"
      :onRemove="remove"
      />
      <div class="menu | row">
        <h6>{{ remainder() }} items left</h6>
        <div class="inner-row bold">
        <TodoFilter
          v-for="(i, index) in filters"
          :key="index"
          :title="i"
          v-model="filter"
        />
        </div>
        <p @click="clearCompleted">Clear Completed</p>
      </div>
    </div>
    <div class="detached-menu | card row">
    <TodoFilter
      v-for="(i, index) in filters"
      :key="index"
      :title="i"
      v-model="filter"
    /> 
    </div>
  </template>
  <script setup>
  import { ref, watch } from "vue";
  import { computed } from "@vue/reactivity";
  import TodoItem from "./TodoItem.vue";
  import TodoFilter from "./TodoFilter.vue";


  let props = defineProps(["items"]);
  let baseTodos = ref(props.items);

  let remainder = () =>
  baseTodos.value.reduce(
    (total, todo) => (todo.completed ? total : total + 1),
    0
  );
    let filters = ["All", "Active", "Completed"];
    let filter = ref("All");
    let todos = computed(() => {
      if (filter.value == "All") return baseTodos.value;
        else if (filter.value == "Active")
          return baseTodos.value.filter((val) => !val.completed);
        else return baseTodos.value.filter((val) => val.completed);
});

// watch(filter, () => {
//   if (filter.value == "All") todos.value = baseTodos.value;
//   else if (filter.value == "Active")
//     todos.value = baseTodos.value.filter((val) => !val.completed);
//   else todos.value = baseTodos.value.filter((val) => val.completed);
// });

function complete(index) {
  baseTodos.value[index].completed = !baseTodos.value[index].completed;
  save();
}

function remove(index) {
  baseTodos.value.splice(index, 1);
  save();
}

function clearCompleted() {
  Array.prototype.removeWhere = function (callback) {
    var i = this.length;
    while (i--) {
      if (callback(this[i], i)) {
        this.splice(i, 1);
      }
    }
  };
  baseTodos.value.removeWhere((val) => val.completed);
  save();
}

function save() {
  localStorage.setItem("todos", JSON.stringify(baseTodos.value));
  console.log(JSON.parse(localStorage.getItem("todos")));
}
</script>
<style></style>