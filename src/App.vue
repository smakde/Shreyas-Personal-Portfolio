<template>
  <v-app>
    <!-- Navigation bar -->
    <v-app-bar app color="primary" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none" /> -->
      <v-toolbar-title class="text-h5 font-weight-bold">
        Just Cache Tasks by Shreyas Makde
      </v-toolbar-title>
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
          <div v-if="!item.external">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </div>
          <a v-else :href="item.url" target="_blank" rel="noopener">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </a>
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
        { title: "Dashboard", route: "/", icon: "" },
        {
          title: "All Tasks",
          route: "/tasks",
          icon: "",
        },
        { title: "Stats", route: "/stats", icon: "" },
        {
          title: "Resume",
          external: true,
          icon: "",
          url: "/Resume.pdf",
        },
        {
          title: "GitHub",
          external: true,
          icon: "",
          url: "https://github.com/smakde",
        },
      ],
    };
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
