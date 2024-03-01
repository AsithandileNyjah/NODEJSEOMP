<template>
  <div class="row">
    <div class="col-4 card-container">
      <div class="card">
        <img :src="product.productUrl" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ product.productName }}</h5>
          <p class="card-text">{{ product.category }}</p>
          <p class="card-text">R{{ product.productPrice }}</p>
          <button class="view">
            <router-link class="type" :to="`/product/${product.productID}`"
              >View More</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
img {
  height: 230px;
}
.card-title {
  font-weight: 200;
  font-family: 'Alegreya", serif';
  color: #5e5343;
}
.card-text {
  font-family: "Fraunces", serif;
  font-size: 14px;
  padding-top: 7px;
  height: 20px;
}

.row {
  margin: 0 auto;
}
.card {
  width: 16rem;
  height: 29rem;
  box-shadow: 10px 10px 5px grey;
  border-radius: 10px;
  padding: 16px;
  transition: transform 0.3s ease-in-out;
}

.card-container:hover .card {
  transform: translateY(-10px);
}

.view {
  border-radius: 7px;
  background-color: black;
}
.type {
  text-decoration: none;
  font-family: "Fraunces", serif;
  color: white;
}
</style>
