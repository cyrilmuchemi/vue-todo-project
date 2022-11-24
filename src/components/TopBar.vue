<template>
  <div class="topbar | row">
    <h1>TODO</h1>
    <img
      @click="toggleTheme"
      :src="
        isDark
          ? '../src/assets/images/ICON-SUN.SVG'
          : '../src/assets/images/ICON-MOON.SVG'
      "
      alt="Toggle Theme"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
let body = document.querySelector("body");
let isDark = ref(body.classList.contains("dark"));
function toggleTheme() {
  isDark.value
    ? body.classList.replace("dark", "light")
    : body.classList.replace("light", "dark");
  isDark.value = body.classList.contains("dark");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>
<style lang=""></style>
