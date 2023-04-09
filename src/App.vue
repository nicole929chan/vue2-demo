<template>
  <div id="app">
    <TheAnimation />
  </div>
</template>

<script>
import TheAnimation from "./components/TheAnimation.vue";

export default {
  name: "App",
  components: {
    TheAnimation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
