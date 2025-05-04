<template>
  <v-app>
    <!-- Navigation bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none" />
      <v-toolbar-title>Habitron</v-toolbar-title>
    </v-app-bar>

    <!-- Side Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary class="d-sm-none">
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Permanent drawer for desktop -->
    <v-navigation-drawer app permanent class="d-none d-sm-flex" width="200">
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
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
        { title: "Dashboard", route: "/", icon: "mdi-view-dashboard" },
        {
          title: "All Habits",
          route: "/habits",
          icon: "mdi-format-list-bulleted",
        },
        { title: "Stats", route: "/stats", icon: "mdi-chart-bar" },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: style tweaks */
</style>
