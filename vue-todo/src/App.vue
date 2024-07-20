<script setup>
import { reactive, ref } from "vue";
import TodoItem from "./components/TodoItem.vue";
import { onMounted } from "vue";

const inputRef = ref(null);

const data = reactive({
  todos: new Map([[1, "Learn Vue 3"]]),
});

const handleAddTodo = () => {
  const value = inputRef.value?.value.trim(); // Optional chaining to prevent null reference
  if (value) {
    const id = data.todos.size + 1; // Generate a new id
    data.todos.set(id, value);
    inputRef.value.value = ""; // Clear the input field
    inputRef.value.focus(); // Refocus the input field
  }
};

const handleRemove = (id) => {
  data.todos.delete(id);
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
      <TodoItem
        v-for="([id, todo], index) in data.todos"
        :key="index"
        :id="id"
        :todo="todo"
        :handleRemove="handleRemove"
      />
    </ul>
    <button @click="handleAddTodo">Add Todo</button>
  </section>
</template>

<style>
#todo {
  display: flex;
  flex-direction: column;
}

ul {
  padding: 0;
}
</style>
