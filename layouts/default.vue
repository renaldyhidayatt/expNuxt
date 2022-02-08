<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./navbar.vue";
import Footer from "./footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  layout: "default",
};
</script>

<style></style>
