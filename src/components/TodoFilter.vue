<template>
  <p
    @click="select"
    :class="{ 'menu-active': props.modelValue == props.title }"
  >
    {{ props.title }}
  </p>
</template>

<script setup>
let props = defineProps(["title", "modelValue"]);
let emit = defineEmits(["update:modelValue"]);
function select() {
  emit("update:modelValue", props.title);
}
</script>
