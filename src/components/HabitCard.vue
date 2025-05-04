<template>
  <div class="habit-card">
    <label>
      <input type="checkbox" :checked="habit.completed" @change="emitToggle" />
      {{ habit.name }}
    </label>
  </div>
</template>

<script>
export default {
  name: "HabitCard",
  props: {
    habit: Object,
    index: Number,
  },
  methods: {
    emitToggle(event) {
      this.$emit("toggle", this.index, event.target.checked);
    },
  },
};
</script>
