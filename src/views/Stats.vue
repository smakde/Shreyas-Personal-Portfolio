<template>
  <v-container class="mt-6">
    <h1 class="text-h4 font-weight-bold text-primary mb-6">
      <!-- <v-icon start class="mr-2">mdi-chart-bar</v-icon> -->
      Task Stats
    </h1>

    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="pa-4">
          <v-card-title>Total Tasks</v-card-title>
          <v-card-text class="text-h5">{{ total }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="pa-4">
          <v-card-title>Completed</v-card-title>
          <v-card-text class="text-h5 text-success">{{
            completed
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title>Completion Rate</v-card-title>
          <v-card-text class="text-h5">{{ completionRate }}%</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Chart Row -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title>Tasks Completion Chart</v-card-title>
          <v-card-text>
            <Pie :data="chartData" :options="chartOptions" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
  name: "StatsView",
  components: {
    Pie,
  },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    total() {
      return this.tasks.length;
    },
    completed() {
      return this.tasks.filter((h) => h.completed).length;
    },
    completionRate() {
      return this.total === 0
        ? 0
        : Math.round((this.completed / this.total) * 100);
    },
    chartData() {
      return {
        labels: ["Completed", "Incomplete"],
        datasets: [
          {
            backgroundColor: ["#4caf50", "#e0e0e0"],
            data: [this.completed, this.total - this.completed],
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      };
    },
  },
  created() {
    const saved = localStorage.getItem("tasks");
    this.tasks = saved ? JSON.parse(saved) : [];
  },
};
</script>

<style scoped>
/* Keep chart height visible */
.v-card-text canvas {
  max-height: 300px;
}
</style>
