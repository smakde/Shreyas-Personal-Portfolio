<template>
  <v-app>
    <!-- Navigation bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="text-h5 font-weight-bold">
        Shreyas Makde
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="toggleTheme"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <v-icon>{{
          isDark ? "mdi-weather-sunny" : "mdi-weather-night"
        }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Side Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary class="d-sm-none">
      <v-list nav dense>
        <v-list-item
          v-for="item in internalNavItems"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in externalNavItems"
          :key="item.title + '-external'"
          :href="item.url"
          target="_blank"
          rel="noopener"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Permanent drawer for desktop -->
    <v-navigation-drawer app permanent class="d-none d-sm-flex" width="200">
      <v-list nav dense>
        <v-list-item
          v-for="item in internalNavItems"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in externalNavItems"
          :key="item.title + '-external'"
          :href="item.url"
          target="_blank"
          rel="noopener"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AppRoot",
  data() {
    return {
      drawer: false,
      navItems: [
        { title: "Home", route: "/" },
        { title: "Dashboard", route: "/dashboard" },
        { title: "All Tasks", route: "/tasks" },
        { title: "Stats", route: "/stats" },
        { title: "Resume", external: true, url: "/Resume.pdf" },
        { title: "GitHub", external: true, url: "https://github.com/smakde" },
      ],
    };
  },
  computed: {
    internalNavItems() {
      return this.navItems.filter((item) => !item.external);
    },
    externalNavItems() {
      return this.navItems.filter((item) => item.external);
    },
    isDark() {
      return this.$vuetify.theme.global.name === "dark";
    },
  },
  mounted() {
    // Restore theme preference
    const savedTheme = localStorage.getItem("just-cache-task-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      this.$vuetify.theme.global.name = savedTheme;
    }
  },
  methods: {
    toggleTheme() {
      const current = this.$vuetify.theme.global.name;
      const newTheme = current === "dark" ? "light" : "dark";
      this.$vuetify.theme.global.name = newTheme;
      localStorage.setItem("just-cache-task-theme", newTheme);
    },
  },
};
</script>

<style scoped>
@media (max-width: 599px) {
  .v-main {
    padding-left: 10px;
  }
}
</style>
