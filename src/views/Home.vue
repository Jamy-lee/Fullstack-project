<template>
  <div class="Home">
    <Navbar />

    <!-- <h1>Welcome</h1> -->
    <!-- register button -->
    <div id="button" @click="goToregister()">
      <a href="#register" class="btn btn-primary">Register here</a>
    </div>
    <!-- login button -->
    <div id="button" @click="goTologin()">
      <a href="#register" class="btn btn-primary">Login</a>
    </div>

    <img
      src="https://static.onecms.io/wp-content/uploads/sites/13/2021/01/13/activewear-stylish-steals.jpg"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  methods: {
    goToregister() {
      this.$router.push("/register");
    },
    goTologin() {
      this.$router.push("/login");
    },
  },
  components: { Navbar },
};
</script>

<style scoped>
h1 {
  margin-top: 150px;
}
.Home {
  background-color: #f2e3d0;
  min-height: 70vh;
  object-fit: cover;
  overflow-x: hidden;
}
img {
  width: 1200px;
  margin-top: 5px;
  margin-left: 600px;
}
</style>
