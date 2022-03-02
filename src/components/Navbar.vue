<template>
  <div id="nav">
    <nav>
      <router-link to="/">HOME</router-link> |
      <router-link to="/register">REGISTER</router-link> |
      <router-link to="/login">LOGIN</router-link> |
      <router-link to="/products">PRODUCTS</router-link> |
    </nav>
  </div>
  <br />
  <br />
  <!-- <div v-if="!loggedIn">
    <a> login</a>
    <a>register</a>
  </div> -->

  <div class="burger"></div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (max-width: 678px) {
  .burger {
    display: block;
  }
}
#app {
  color: grey;
}

#nav {
  position: fixed;
  top: 0;
  z-index: 100;
  font-size: 20px;
  padding-left: 10px;
  font-weight: bold;
  width: 100%;
  background-color: white;
  padding: 20px;
  font-family: monospace;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#nav a {
  color: #a6776e;
}

#nav a.router-link-exact-active {
  color: #c3a6a1;
}
</style>
