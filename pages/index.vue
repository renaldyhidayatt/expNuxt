<template>
  <div class="container card postDesign">
    <h1>Create Post</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Title:</label>
      <input
        type="text"
        v-model="Blog.title"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Please write your title"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Description</label
      >
      <textarea
        class="form-control"
        v-model="Blog.des"
        id="exampleFormControlTextarea1"
        rows="5"
      ></textarea>
    </div>
    <button type="button" @click="addPost" class="btn btn-success">
      Create Post
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Blog: {
        title: "",
        des: "",
      },
    };
  },
  methods: {
    async addPost() {
      await axios
        .post("http://localhost:8000/post", this.Blog)
        .then((res) => {
          console.log(res);
          console.log(this.Blog);
          this.$router.push("/allposts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log("mounted");
    console.log(this.Blog.title);
  },
};
</script>

<style scoped>
.postDesign {
  padding: 20px;
}
.postDesign {
  margin-top: 20px;
}
</style>
