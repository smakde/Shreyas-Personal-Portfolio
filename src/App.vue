<template>
  <v-app>
    <!-- Navigation bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="text-h5 font-weight-bold">
        Shreyas Makde
      </v-toolbar-title>
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
