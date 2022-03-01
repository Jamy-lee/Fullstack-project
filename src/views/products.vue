<template>
  <div class="container d-flex">
    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort name</label>
      <select class="form-select" name="" id="sortName" onchange="sortName()">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>

    <div class="d-flex w-25 ms-3">
      <label for="" class="form-label">Sort price</label>
      <select class="form-select" name="" id="sortPrice" onchange="sortPrice()">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  </div>
  <!-- card 1 -->
  <div class="card" style="width: 300px">
    <img
      class="card-img-top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaJ_VBUexnPa479YAYmzgDb-aQ6_VEOmA5w&usqp=CAU"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Female pants</h5>

      <a href="#" class="btn btn-primary">EDIT</a>
      <a href="#" class="btn btn-primary">DELETE</a>
      <a href="#" class="btn btn-primary">CART</a>
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
      <h5 class="card-title">Card title</h5>

      <a href="#" class="btn btn-primary">EDIT</a>
      <a href="#" class="btn btn-primary">DELETE</a>
      <a href="#" class="btn btn-primary">CART </a>
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

      <a href="#" class="btn btn-primary">EDIT</a>
      <a href="#" class="btn btn-primary">DELETE</a>
      <a href="#" class="btn btn-primary">CART</a>
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

      <a href="#" class="btn btn-primary">EDIT</a>
      <a href="#" class="btn btn-primary">DELETE</a>
      <a href="#" class="btn btn-primary">CART</a>
    </div>
  </div>
</template>

<script>
[
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
</script>

<style scoped>
body {
  height: 150vh;
}
.btn {
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
  height: 200px;
  width: 250px;
}
</style>
