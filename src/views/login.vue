<template>
  <div id="login">
    <h1>Login here</h1>
    <div id="form">
      <form>
        <label>Name:</label>
        <input type="Name" required v-model="Name" />
        <br /><br />
        <label>Email:</label>
        <input type="Email" required v-model="Email" />
        <br /><br />
        <label>Password:</label>
        <input type="Password" required v-model="Password" />

        <button type="submit" class="btn">Submit</button>
        <button type="reset" class="btn">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      number: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.name, this.email, this.contact, this.message);
      fetch("https://vue-portfolio-3.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          number: this.number,
          message: this.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("Message sent successfully");
          (this.name = ""),
            (this.email = ""),
            (this.number = ""),
            (this.message = "");
        });
    },
  },
};
</script>

<style>
.login {
  background-color:#f2e3d0;;
  height: 100vh!important;
}
.btn {
  margin-top: 30px;
  color: white;
  background-color:  #a6776e;
}
h1 {
  margin-top: 120px;
  text-align: center;
  color:  #a6776e;;
}
form {
  height: 650px;
  margin-top: 65px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
