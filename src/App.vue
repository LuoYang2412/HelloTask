<template>
  <div id="app">
    <nav-bar-component />
    <router-view />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

export default {
  components: { NavBarComponent },
};
</script>
