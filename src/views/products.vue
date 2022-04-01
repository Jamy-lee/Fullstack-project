<template>
  <br />
  <br />
  <br />
  <br />
  <!-- sort by items -->
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

    <div id="button" @click="goToaddProduct()">
      <a href="#addProduct" class="btn btn-primary">Add Product</a>
    </div>
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
            <label for="addTitle" class="form-label">Name</label>
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
      <h5 class="card-title">Ladies tops</h5>
      <input
        class="form-control"
        type="number"
        name="addImg"
        id="addCart2"
        min="1"
        value="1"
      />
      <!-- <a href="#" class="btn btn-primary">Edit</a> -->
      <!-- <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart </a> -->
    </div>
  </div>
  <!-- card 2 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://www.poobienaidoos.co.za/wp-content/uploads/2016/09/pum-essential-racerback-tank-top-ladies-1453465864.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Ladies tops</h5>
      <input
        class="form-control"
        type="number"
        name="addImg"
        id="addCart2"
        min="1"
        value="1"
      />
      <!-- <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart </a> -->
    </div>
  </div>
  <!-- card 3 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://www.bigw.com.au/medias/sys_master/images/images/hed/hac/28096359759902.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Mens pants</h5>
      <input
        class="form-control"
        type="number"
        name="addImg"
        id="addCart2"
        min="1"
        value="1"
      />
      <!-- <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart</a> -->
    </div>
  </div>

  <!-- card 4 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://cdn.shopify.com/s/files/1/0941/4306/products/BlackFishtailBaseballTeeFront_1024x1024.png?v=1619799951"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Mens tops</h5>
      <input
        class="form-control"
        type="number"
        name="addImg"
        id="addCart2"
        min="1"
        value="1"
      />
      <!-- <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">Delete</a>
      <a href="#" class="btn btn-primary">Cart</a> -->
    </div>
  </div>
  <div
    class="modal fade"
    id="editProduct${position}"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Edit ${product.title}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="editTitle${position}" class="form-label">Title</label>
            <input
              class="form-control"
              type="text"
              name="editTitle${position}"
              id="editTitle${position}"
              value="${product.title}"
            />
          </div>
          <div class="mb-3">
            <label for="editCategory${position}" class="form-label"
              >Category</label
            >
            <select
              class="form-select"
              name="editCategory${position}"
              id="editCategory${position}"
            >
              <option value="Ladies">Ladies</option>
              <option value="Mens">Mens</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="editPrice${position}" class="form-label">Price</label>
            <input
              class="form-control"
              type="text"
              name="editPrice${position}"
              id="editPrice${position}"
              value="${product.price}"
            />
          </div>
          <div class="mb-3">
            <label for="editImg${position}" class="form-label">Image URL</label>
            <input
              class="form-control"
              type="text"
              name="editImg${position}"
              id="editImg${position}"
              value="${product.img}"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            onclick="updateProduct(${position})"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToaddProduct() {
      this.$router.push("/addProduct");
    },
  },
};

let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "female pants",
        category: "ladies",
        price: 99.99,
        img: "https://pyxis.nymag.com/v1/imgs/533/ffd/338e7f9337adf583c2df9f0f815d6ba414-Just-My-Size-Women-s-Plus-Size-Active-Pi.2x.rsquare.w600.png",
      },
      {
        title: "female tops",
        category: "ladies",
        price: 99.99,
        img: "https://www.poobienaidoos.co.za/wp-content/uploads/2016/09/pum-essential-racerback-tank-top-ladies-1453465864.png",
      },
      {
        title: "Male pants",
        category: "ladies",
        price: 99.99,
        img: "https://www.bigw.com.au/medias/sys_master/images/images/hed/hac/28096359759902.jpg",
      },
      {
        title: "Male tops",
        category: "ladies",
        price: 99.99,
        img: "https://cdn.shopify.com/s/files/1/0941/4306/products/BlackFishtailBaseballTeeFront_1024x1024.png?v=1619799951",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// ADD TO CART

// // UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !category || !price || !img)
      throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE

function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}
// // SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}

// // SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}

// // CHECKOUT
function checkout() {
  let total = cart
    .reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0)
    .toFixed(2);
  try {
    if (parseInt(total) == 0) throw new Error("Nothing in cart");
    let confirmation = confirm(`Total payment needed: R${total}`);

    if (confirmation) {
      cart.length = 0;
      localStorage.removeItem("cart");
      readCart(cart);
    }
  } catch (err) {
    alert(err);
  }
}
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
  width: 190px;
}

body {
  height: 150vh;
}
.btn {
  padding: 20px;
  border: none;
  background-color: #a6776e;
  border: none;
  width: 150px;
  height: 60px;
  position: relative;
  left: 10px;
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
