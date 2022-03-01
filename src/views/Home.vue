<template>
  <div class="Home">
    <Navbar />

    <!-- <h1>Welcome</h1> -->
    <!-- <div id="button">
      <button type="submit" class="btn">Register now</button>
    </div> -->
    <img
      src="https://static.onecms.io/wp-content/uploads/sites/13/2021/01/13/activewear-stylish-steals.jpg"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  components: { Navbar },
};
</script>

<style scoped>
/* #button {
  height: 70px;
  width: 200px;
  border-radius: 20px;
} */
.Home {
  background-color: #f2e3d0;
  min-height: 70vh;
  object-fit: cover;
  overflow-x: hidden;
}
img {
  width: 1200px;
  margin-top: 290px;
  margin-left: 600px;
}
</style>
