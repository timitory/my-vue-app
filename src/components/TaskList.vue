<!-- TaskList.vue -->
<template>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.name }}
        <button @click="editTask(task)">Edit</button>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    editTask(task) {
      this.$emit('edit-task', task);
    },
    deleteTask(index) {
      this.$emit('delete-task', index);
    }
  }
};
</script>













<!-- <template>
    <li>
      <button @click.self="$emit('complete')" :class="className">
        <i class="far fa-circle"></i> {{ task.title }}
      </button> 
      <button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
    </li>
  </template>
  
  <script>
  export default {
    name: "TaskItem",
    props: ["task"],
    computed: {
      className() {
        let classes = ['toggle'];
        if(this.task.completed) {
          classes.push('toggle-completed');
        }
        return classes.join(' ');
      }
    }
  };
  </script> -->