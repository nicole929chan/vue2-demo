<template>
  <div>
    <h1>school</h1>
    <div>{{ n }}</div>
    <button @click="die">銷毀</button>
  </div>
</template>

<script>
export default {
  name: "TheSchool",
  data() {
    return {
      n: 0,
    };
  },
  mounted() {
    this.x.$on("foo", (args) => {
      console.log("foo事件所對應的回調函數", args);
      this.n = args;
    });
  },
  methods: {
    die() {
      this.$destroy();
    },
  },
};
</script>
