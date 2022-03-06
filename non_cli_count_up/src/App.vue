<template>
  <div id="app">
    <div id="nav">
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.nuxt-link-exact-active {
  color: #42b983;
}
</style>
