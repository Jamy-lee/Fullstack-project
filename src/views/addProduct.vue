<template>
  <!-- ADD PRODUCT MODAL -->

  <div id="form">
    <form @submit.prevent="addProduct">
      <label>Name:</label>
      <input type="Name" required v-model="name" />
      <br />
      <div class="mb-3">
        <label for="" class="form-label">Category</label>
        <select class="form-select" name="addCategory" id="addCategory">
          <option value="Ladies">Ladies</option>
          <option value="Mens">Mens</option>
        </select>
      </div>
      <br />
      <div class="modal-body">
        <div class="mb-3">
          <label for="addTitle" class="form-label">Image URL</label>
          <input
            class="form-control"
            type="text"
            name="addTitle"
            id="addTitle"
          />
        </div>
      </div>
      <br />
      <label>Price:</label>
      <input type="number" required v-model="price" />

      <button type="submit" class="btn">Submit</button>
      <button type="reset" class="btn">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      image: "",
      price: "",
      category: "",
      author: "",
    };
  },
  methods: {
    addProduct() {
      fetch("https://projectbackendnande.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          image: this.image,
          price: this.price,
          category: this.category,
          author: this.author,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("Product created");
          console.log("done");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
#form {
  height: 800px;
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
.btn {
  margin-top: 30px;
  color: white;
  background-color: #a6776e;
}
</style>
