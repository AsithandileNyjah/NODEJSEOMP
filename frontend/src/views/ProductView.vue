<template>
  <div>
    <navbar/>
    <div v-for="product in getProduct" :key="product.id">
      <div class="container">
        <img :src="product.productUrl" alt="" />
        <p class="text">{{ product.productName }}</p>
        <p class="text">R{{ product.productPrice }}</p>
        <button class="view">
            <router-link class="type" to="/menue"
              >Order Now</router-link
            >
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav.vue"
import { mapGetters } from "vuex";
export default {
  components:{
    navbar,
  },
  computed: {
    ...mapGetters(["getProduct"]),
  },
  methods: {
    async fetchProducts() {
      const productId = this.$route.params.productId;
      this.$store.dispatch("getProdById", productId);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.container {
  margin-top: 10%;
  width: 20%;
  border: 3px solid black;
  border-radius: 20px;
}

img {
  margin-top: 3%;
}

.view {
  margin-top: 4%;
  margin-bottom: 3%;
  border-radius: 7px;
  background-color: black;
}
.type {
  text-decoration: none;
  font-family: "Fraunces", serif;
  color: white;
}
</style>
