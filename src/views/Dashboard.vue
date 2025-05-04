<template>
  <v-container class="mt-6">
    <v-row justify="space-between" align="center">
      <v-col>
        <h1 class="text-h4 font-weight-bold">Habitron Dashboard</h1>
      </v-col>
    </v-row>

    <!-- Add Habit Form -->
    <v-form @submit.prevent="addHabit">
      <v-text-field
        v-model="newHabit"
        label="New Habit"
        outlined
        dense
        class="mb-4"
      />
      <v-btn type="submit" color="primary">Add Habit</v-btn>
    </v-form>

    <!-- Habit List -->
    <v-row class="mt-6" dense>
      <v-col
        v-for="(habit, index) in habits"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>
            <v-checkbox
              v-model="habit.completed"
              :label="habit.name"
              @change="updateStorage"
            />
          </v-card-title>
          <v-card-actions>
            <v-btn icon @click="deleteHabit(index)">
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
      newHabit: "",
      habits: [],
    };
  },
  created() {
    const saved = localStorage.getItem("habits");
    this.habits = saved ? JSON.parse(saved) : [];
  },
  methods: {
    addHabit() {
      if (!this.newHabit.trim()) return;
      this.habits.push({ name: this.newHabit.trim(), completed: false });
      this.newHabit = "";
      this.updateStorage();
    },
    deleteHabit(index) {
      this.habits.splice(index, 1);
      this.updateStorage();
    },
    updateStorage() {
      localStorage.setItem("habits", JSON.stringify(this.habits));
    },
  },
};
</script>
