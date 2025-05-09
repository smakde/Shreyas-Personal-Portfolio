<template>
  <v-container class="mt-6">
    <v-row justify="space-between" align="center">
      <v-col>
        <h1 class="text-h3 font-weight-bold text-primary mb-4">
          <!-- <v-icon start class="mr-2">mdi-calendar-check</v-icon> -->
          Try adding some tasks!
        </h1>
      </v-col>
    </v-row>

    <!-- Dark mode toggle -->
    <v-btn @click="toggleTheme" class="mb-6" color="secondary">
      Toggle Dark Mode
    </v-btn>

    <!-- Add Tasks Form -->
    <v-form @submit.prevent="addTask">
      <v-text-field
        v-model="newTask"
        label="New Tasks"
        outlined
        dense
        class="mb-4"
      />
      <v-btn type="submit" color="primary">Add</v-btn>
    </v-form>

    <!-- Tasks List -->
    <v-row class="mt-6" dense>
      <v-col
        v-for="(task, index) in tasks"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>
            <v-checkbox
              v-model="task.completed"
              :label="task.name"
              @change="updateStorage"
            />
          </v-card-title>
          <v-card-actions>
            <v-btn icon @click="deleteTask(index)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DashboardView",

  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },

  computed: {
    isDark() {
      return this.theme.global.name.value === "dark";
    },
  },

  created() {
    const saved = localStorage.getItem("tasks");
    this.tasks = saved ? JSON.parse(saved) : [];

    // Restore theme preference
    const savedTheme = localStorage.getItem("just-cache-task-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      this.$vuetify.theme.global.name = savedTheme;
    } else {
      this.$vuetify.theme.global.name = "dark"; // Default theme
    }
  },

  methods: {
    addTask() {
      if (!this.newTask.trim()) return;
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = "";
      this.updateStorage();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.updateStorage();
    },
    updateStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    toggleTheme() {
      const current = this.$vuetify.theme.global.name;
      const newTheme = current === "dark" ? "light" : "dark";
      this.$vuetify.theme.global.name = newTheme;
      localStorage.setItem("just-cache-task-theme", newTheme);
    },
  },
};
</script>
