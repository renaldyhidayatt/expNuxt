<template>
  <div class="main_item">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["title", "description"],
};
</script>

<style>
.main_item {
  width: 300px;
  height: 300px;
  background-color: crimson;
  padding: 10px;
  color: aliceblue;
  border-radius: 20px;
  display: flex;
}
</style>
