<template>
  <div class="register">
    <h1>Register here</h1>
    <div id="form">
      <form @submit.prevent="register">
        <label>Name:</label>
        <input type="Name" required v-model="name" />
        <br />
        <label>Email:</label>
        <input type="Email" required v-model="email" />
        <br />
        <label>Contact:</label>
        <input type="number" required v-model="contact" />
        <br />
        <label>Password:</label>
        <input type="Password" required v-model="password" />

        <button type="submit" class="btn">Submit</button>
        <button type="reset" class="btn">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://projectbackendnande.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          contact: this.contact,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.register {
  height: 100vh !important;
}
.btn {
  margin-top: 30px;
  color: white;
  background-color: #a6776e;
}
h1 {
  margin-top: 60px;
  margin-bottom: 30px;
  text-align: center;
  color: #a6776e;
}
#form {
  position: relative;
  top:10px;
  height: 750px;
  margin-top: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  /* -webkit-backdrop-filter: blur(4px); */
  /* border-radius: 10px; */
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-weight: bold;
  padding: 10px;
}
input,
select {
  background-color: transparent;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid grey;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
