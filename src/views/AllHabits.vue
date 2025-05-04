<template>
  <v-container class="mt-6">
    <h1 class="text-h4 font-weight-bold text-primary mb-6">
      <v-icon start class="mr-2">mdi-format-list-bulleted</v-icon>
      All Habits
    </h1>

    <v-alert
      v-if="habits.length === 0"
      type="info"
      border="start"
      color="primary"
    >
      No habits found. Add some from the Dashboard.
    </v-alert>

    <v-list v-else>
      <v-list-item
        v-for="(habit, index) in habits"
        :key="index"
        :title="habit.name"
      >
        <template #prepend>
          <v-icon :color="habit.completed ? 'green' : 'grey'">
            {{ habit.completed ? "mdi-check-circle" : "mdi-circle-outline" }}
          </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "AllHabitsView",
  data() {
    return {
      habits: [],
    };
  },
  created() {
    const saved = localStorage.getItem("habits");
    this.habits = saved ? JSON.parse(saved) : [];
  },
};
</script>
