<template>
  <v-app>
    <!-- Navigation bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer" />
      <v-toolbar-title class="main-title text-h5 font-weight-bold">
        Hi, I’m Shreyas Makde. Let’s Create Something Awesome!
      </v-toolbar-title>
      <v-toolbar-title class="mobile-title text-h6 font-weight-bold">
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

    <!-- Side Drawer (slides out on mobile) -->
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
          <v-list-item-title v-if="!item.addTab">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-title v-else>
            <span style="position: relative; left: 20px">{{ item.title }}</span>
          </v-list-item-title>
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
        { title: "Use my free to-do template", route: "/dashboard" },
        { title: "Overview", route: "/tasks", addTab: true },
        { title: "Stats", route: "/stats", addTab: true },
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
    } else {
      this.$vuetify.theme.global.name = "dark";
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
.main-title {
  display: block;
}
.mobile-title {
  display: none;
}
@media (max-width: 600px) {
  .main-title {
    display: none;
  }
  .mobile-title {
    display: block;
  }
}
</style>
