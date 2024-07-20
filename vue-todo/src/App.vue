<script setup>
import { reactive, ref } from "vue";
import TodoItem from "./components/TodoItem.vue";
import { onMounted } from "vue";

const inputRef = ref(null);

const data = reactive({
  todos: ["first item"],
});

const handleAddTodo = () => {
  const value = inputRef.value.value.trim();
  if (value) {
    data.todos.push(value);
    inputRef.value.value = "";
    inputRef.value.focus();
  }
};

onMounted(() => {
  inputRef.value.focus();
});
</script>

<template>
  <section id="todo">
    <h1>Todos</h1>
    <input type="text" ref="inputRef" @keyup.enter="handleAddTodo" />
    <ul>
      <TodoItem v-for="(todo, index) in data.todos" :key="index" :todo="todo" />
    </ul>
    <button @click="handleAddTodo">Add Todo</button>
  </section>
</template>

<style>
p {
  color: red;
}
</style>
