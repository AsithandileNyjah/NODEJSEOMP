<template>
  <div class="menue-container vh-100">
    <navbar />
    <!-- {{products}} -->
    <div class="products">
      <Card
        v-for="product of products"
        :key="product.productID"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    navbar,
    Card,
  },
  data() {
    return {
      //   products: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("display");
  },
  //   components: { ProductCard },
};
</script>

<style scoped>
.products {
  margin-top: 7%; 
  display: flex;
  flex-wrap: wrap;
  max-width: 1220px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 60px;
}
</style>