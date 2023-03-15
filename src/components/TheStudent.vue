<template>
  <div>
    <h1>student</h1>
    <button @click="transfer">傳遞數據給同層級</button>
  </div>
</template>

<script>
export default {
  name: "TheStudent",
  data() {
    return {
      i: 0,
    };
  },
  methods: {
    transfer() {
      this.i++;
      this.x.$emit("foo", this.i);
    },
  },
};
</script>
