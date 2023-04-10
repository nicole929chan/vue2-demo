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
      loading: false,
      results: [],
      error: "",
    };
  },
  mixins: [mixin],
  watch: {
    searchInput(newValue) {
      this.getEvents(newValue); // mixin裏頭的methods會併過來
    },
  },
};
</script>
