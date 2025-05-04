<template>
  <div class="dashboard">
    <h1>Today's Habits</h1>

    <HabitForm @add="addHabit" />

    <div v-if="habits.length === 0" class="empty-message">
      No habits yet. Start by adding one!
    </div>

    <ul v-else class="habit-list">
      <li v-for="(habit, index) in habits" :key="index" class="habit-item">
        <label>
          <input type="checkbox" v-model="habit.completed" />
          {{ habit.name }}
        </label>
        <button @click="deleteHabit(index)" class="delete-button">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<script>
import HabitForm from "@/components/HabitForm.vue";

export default {
  name: "DashboardView",
  components: { HabitForm },
  data() {
    return {
      habits: [],
    };
  },
  created() {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      this.habits = JSON.parse(savedHabits);
    }
  },
  watch: {
    habits: {
      deep: true,
      handler(newHabits) {
        localStorage.setItem("habits", JSON.stringify(newHabits));
      },
    },
  },
  methods: {
    addHabit(name) {
      this.habits.push({ name, completed: false });
    },
    deleteHabit(index) {
      this.habits.splice(index, 1);
    },
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
.delete-button {
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 16px;
}
</style>
