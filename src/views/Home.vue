<template>
  <div class="Home">
    <Navbar />

    <h1><b>Welcome</b></h1>
    <div id="paragraph">
      <p>
        ActiveWear has a unique, design and style that fits the needs of any
        person, be it thick, thin, tall or short, we got what you need! Using
        our online store, is so convenient in a way that, it save's you time and
        energy for the track or your daily exercise routines.
      </p>
    </div>
    <!-- register button -->
    <div id="button" @click="goToregister()">
      <a href="#register" class="btn btn-primary"><b>Register here</b></a>
    </div>
    <!-- login button -->
    <div id="button" @click="goTologin()">
      <a href="#register" class="btn btn-primary"><b>Login</b></a>
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
#paragraph {
  color: #a6776e;
  text-align: center;
  background-color: transparent;
  width: 450px;
  position: absolute;
  bottom: 450px;
  left: 80px;
  font-size: 25px;
}
#button {
  position: relative;
  top: 150px;
  display: inline-block;
  margin-left: 60px;
}
.btn {
  width: 200px;
  height: 50px;
  border: none;
  text-align: center;
  align-items: center;
  padding-top: 12px;
  background-color: #a6776e;
}

h1 {
  margin-top: 10px;
  color: #a6776e;
  text-align: center;
}
.Home {
  background-color: #f2e3d0;
  height: 95vh;
  object-fit: cover;
  overflow-x: hidden;
  overflow-y: hidden;
}
img {
  position: relative;
  left: 150px;
  top: 80px;
  width: 1100px;
  margin-top: 5px;
}
</style>
