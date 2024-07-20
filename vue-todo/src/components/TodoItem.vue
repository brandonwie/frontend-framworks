<script setup>
const props = defineProps(["id", "todo", "handleRemove"]);
</script>

<template>
  <div class="wrapper">
    <li :id="props.id">- {{ props.todo }}</li>
    <button @click="handleRemove(props.id)">x</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
</style>
