<template>
  <div class="dashboard">
    <h1>Today's Habits</h1>

    <div v-if="habits.length === 0" class="empty-message">
      No habits yet. Start by adding one!
    </div>

    <ul v-else class="habit-list">
      <li v-for="(habit, index) in habits" :key="index" class="habit-item">
        <label>
          <input type="checkbox" v-model="habit.completed" />
          {{ habit.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      habits: [
        { name: "Drink water", completed: false },
        { name: "Read 10 pages", completed: true },
        { name: "Walk 30 minutes", completed: false },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 0 auto;
}

.habit-list {
  list-style-type: none;
  padding: 0;
}

.habit-item {
  margin: 10px 0;
}

.empty-message {
  font-style: italic;
  color: #888;
}
</style>
