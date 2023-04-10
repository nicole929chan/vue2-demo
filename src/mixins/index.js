import axios from "axios";
const mixin = {
  methods: {
    getEvents(search) {
      this.loading = true;
      let endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${search}`;

      axios
        .get(endpoint)
        .then((res) => {
          this.results = res.data;
        })
        .catch((err) => {
          this.error = err.message;
        })
        .finally(() => (this.loading = false));
    },
  },
};

export default mixin;
