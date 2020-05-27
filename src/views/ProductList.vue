<template>
  <div>
    <h1>List of Products</h1>
    <div class="product-list">
      <!-- we can now use our component in the template -->
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'product-show', params: { id: product.id } }"
        class="product-link"
      >
        <ProductCard :product="product" :showdetails="false" />
      </router-link>
    </div>
  </div>
</template>

<script>
// first import the component
import ProductCard from '@/components/ProductCard'
import ProductService from '@/services/ProductService'

export default {
  name: 'ProductList',
  // declare component used as a dependency
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    ProductService.getProducts()
      .then(response => {
        //console.log(response)
        this.products = response.data
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  max-width: 1280px;
  margin: 10px auto;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product-link {
  text-decoration: none;
  color: #444;
}
</style>
