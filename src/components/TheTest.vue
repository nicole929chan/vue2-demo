<template>
  <div>
    <button @click="!isShow">display / hide</button>
    <h1 v-show="isShow">Hello World</h1>
  </div>
</template>

<script>
export default {
  name: "TheTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: beige;
}

@keyframes foo {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
