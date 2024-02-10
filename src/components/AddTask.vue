<!-- AddTask.vue -->
<template>
    <div>
      <input v-model="newTask" type="text" placeholder="Add new task">
      <button @click="addTask">Add Task</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: ''
      };
    },
    methods: {
      addTask() {
        this.$emit('add-task', this.newTask);
        this.newTask = '';
      }
    }
  };
  </script>
  