<template>
  <div>
    <h1>List of Products</h1>
    <!-- we can now use our component in the template -->
    <ProductCart />
    <ProductCart />
  </div>
</template>

<script>
// first import the component
import ProductCart from '@/components/ProductCard'

export default {
  name: 'ProductList',
  // declare component used as a dependency
  components: {
    ProductCart
  }
}
</script>

<style lang="scss" scoped></style>
