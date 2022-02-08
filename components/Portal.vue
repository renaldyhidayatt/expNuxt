<template>
  <div class="portal">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "desc"],
};
</script>

<style scoped>
.portal {
  height: 500px;
  width: 50%;
  margin: 10px;
  padding: 10px;
  background-color: chartreuse;
}
</style>
