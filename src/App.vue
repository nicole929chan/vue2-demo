<template>
  <div id="app">
    <TheSchool />
    <TheStudent />
  </div>
</template>

<script>
import TheSchool from "./components/TheSchool.vue";
import TheStudent from "./components/TheStudent.vue";

export default {
  name: "App",
  components: {
    TheSchool,
    TheStudent,
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
