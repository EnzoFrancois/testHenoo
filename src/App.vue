<template>
  <div id="app">
    <router-link to="/">Home  |</router-link>
    <router-link to="/maquette">Maquette  |</router-link>
    <router-link to="/table">TablePage   |</router-link>
    <router-link to="/formulaire">Formulaire</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
