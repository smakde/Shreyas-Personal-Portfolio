<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="nav-link">Dashboard</router-link>
        <router-link to="/habits" class="nav-link">All Habits</router-link>
        <router-link to="/stats" class="nav-link">Stats</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "AppRoot",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
}

nav {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  font-weight: bold;
}

.nav-link {
  text-decoration: none;
  color: #42b983;
}

.nav-link.router-link-active {
  text-decoration: underline;
}
</style>
