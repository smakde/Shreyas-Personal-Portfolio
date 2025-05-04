<template>
  <form @submit.prevent="submitForm" class="habit-form">
    <input v-model="habitName" type="text" placeholder="New habit" required />
    <button type="submit">Add Habit</button>
  </form>
</template>

<script>
export default {
  name: "HabitForm",
  data() {
    return {
      habitName: "",
    };
  },
  methods: {
    submitForm() {
      if (this.habitName.trim() !== "") {
        this.$emit("add", this.habitName.trim());
        this.habitName = "";
      }
    },
  },
};
</script>

<style scoped>
.habit-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
