<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="container d-flex">
    <label for="" class="label">Sort by category</label>
    <select class="select" name="" id="sortCategory" onchange="sortCategory()">
      <option value="All">All</option>
      <option value="Ladies">Ladies</option>
      <option value="Mens">Mens</option>
    </select>

    <div class="d-flex w-25 ms-3">
      <label for="" class="label">Sort name</label>
      <select class="select" name="" id="sortName" onchange="sortName()">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>

    <div class="d-flex w-25 ms-3">
      <label for="" class="label">Sort price</label>
      <select class="form-select" name="" id="sortPrice" onchange="sortPrice()">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
    <br />

    <!-- Button trigger modal -->

    <button
      type="button"
      class="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add a product
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add product</h5>
          <button
            type="button"
            class="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="addTitle" class="form-label">Title</label>
            <input
              class="form-control"
              type="text"
              name="addTitle"
              id="addTitle"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Category</label>
          <select class="form-select" name="addCategory" id="addCategory">
            <option value="Ladies">Ladies</option>
            <option value="Mens">Mens</option>
          </select>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="addTitle" class="form-label">Price</label>
            <input
              class="form-control"
              type="text"
              name="addTitle"
              id="addTitle"
            />
          </div>
        </div>
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
        <div class="modal-footer">
          <button type="button" class="button" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            class="button"
            data-bs-dismiss="modal"
            onclick="createProduct()"
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- card 1 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://pyxis.nymag.com/v1/imgs/533/ffd/338e7f9337adf583c2df9f0f815d6ba414-Just-My-Size-Women-s-Plus-Size-Active-Pi.2x.rsquare.w600.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Ladies pants</h5>

      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart</a>
    </div>
  </div>

  <!-- card 2 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjINX88mL_yi1p4Htymqc6bnWHQlMAisHnA&usqp=CAUS"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Ladies tops</h5>

      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart </a>
    </div>
  </div>
  <!-- card 3 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjINX88mL_yi1p4Htymqc6bnWHQlMAisHnA&usqp=CAUS"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>

      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart</a>
    </div>
  </div>

  <!-- card 4 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjINX88mL_yi1p4Htymqc6bnWHQlMAisHnA&usqp=CAUS"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>

      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart</a>
    </div>
  </div>
</template>

<script>
let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "female pants",
        category: "ladies",
        price: 99.99,
        img: "https://img.joomcdn.net/a4d061cede3cc457594d6ee73ed52417c41a1198_original.jpeg",
      },
      {
        title: "female tops",
        category: "ladies",
        price: 99.99,
        img: "https://img.joomcdn.net/a4d061cede3cc457594d6ee73ed52417c41a1198_original.jpeg",
      },
      {
        title: "Male tops",
        category: "ladies",
        price: 99.99,
        img: "https://img.joomcdn.net/a4d061cede3cc457594d6ee73ed52417c41a1198_original.jpeg",
      },
      {
        title: "Male pants",
        category: "ladies",
        price: 99.99,
        img: "https://img.joomcdn.net/a4d061cede3cc457594d6ee73ed52417c41a1198_original.jpeg",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
</script>

<style scoped>
label {
  color: #a6776e;
}
select {
  width: 300px;
  background-color: white;
  border: 1px solid lightgrey;
  padding-right: 20px;
  padding-left: 20px;
}

button {
  margin-left: 50px;
  margin-top: 50px;
  color: white;
  background-color: #a6776e;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 150px;
}

body {
  height: 150vh;
}
.btn {
  background-color: #a6776e;
  border: none;
  width: 100px;
}
.card {
  display: inline-block;
  justify-content: between;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 3%;
  height: 5%;
  margin-bottom: -100px;
}
img {
  height: 300px;
  width: 290px;
}
</style>
