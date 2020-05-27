<template>
  <div>
    <h1>List of Products</h1>
    <!-- we can now use our component in the template -->
    <ProductCart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
// first import the component
import ProductCart from '@/components/ProductCard'
import ProductService from '@/services/ProductService'

export default {
  name: 'ProductList',
  // declare component used as a dependency
  components: {
    ProductCart
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

<style lang="scss" scoped></style>
