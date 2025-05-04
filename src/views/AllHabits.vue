<template>
  <v-container class="mt-6">
    <h1 class="text-h4 font-weight-bold text-primary mb-6">
      <v-icon start class="mr-2">mdi-format-list-bulleted</v-icon>
      All Tasks
    </h1>

    <v-alert
      v-if="tasks.length === 0"
      type="info"
      border="start"
      color="primary"
    >
      No tasks found. Add some from the Dashboard.
    </v-alert>

    <v-list v-else>
      <v-list-item
        v-for="(task, index) in tasks"
        :key="index"
        :title="task.name"
      >
        <template #prepend>
          <v-icon :color="task.completed ? 'green' : 'grey'">
            {{ task.completed ? "mdi-check-circle" : "mdi-circle-outline" }}
          </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "AlltasksView",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    const saved = localStorage.getItem("tasks");
    this.tasks = saved ? JSON.parse(saved) : [];
  },
};
</script>
