<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
// isloggedin = false
</script>
<style>
/* #app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
} */
</style>
