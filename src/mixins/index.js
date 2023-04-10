import axios from "axios";
const mixin = {
  methods: {
    // getEvents(search) {
    //   this.loading = true;
    //   let endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${search}`;

    //   axios
    //     .get(endpoint)
    //     .then((res) => {
    //       this.results = res.data;
    //     })
    //     .catch((err) => {
    //       this.error = err.message;
    //     })
    //     .finally(() => (this.loading = false));
    // },
    getEvents(search) {
      let endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${search}`;

      return axios.get(endpoint); // 只須返回Promise
    },
  },
};

export default mixin;
