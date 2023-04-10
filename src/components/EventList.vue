<template>
  <div>
    <div>
      Search:
      <input type="text" name="searchInput" v-model.lazy="searchInput" />
      <div>Loading: {{ loading }}</div>
      <div>results: {{ results }}</div>
      <div>error: {{ error }}</div>
    </div>
  </div>
</template>
<script>
import mixin from "../mixins/index";
export default {
  name: "EventList",
  data() {
    return {
      searchInput: "",
      results: [],
    };
  },
  mixins: [mixin],
  watch: {
    async searchInput(newValue) {
      this.results = await this.getEvents(newValue);
    },
  },
};
</script>
