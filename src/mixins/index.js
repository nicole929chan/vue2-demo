import axios from "axios";
const mixin = {
  data() {
    return {
      // 變數挪來這
      loading: false,
      error: "",
    };
  },
  methods: {
    async getEvents(search) {
      try {
        let res;
        let endpoint = `https://jsonplaceholder.typicode.com/posts?userId=${search}`;
        this.loading = true;
        res = await axios.get(endpoint);

        return res.data;
      } catch (err) {
        this.error = err.message;
      }

      this.loading = false;
    },
  },
};

export default mixin;
