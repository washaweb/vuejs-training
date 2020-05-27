<template>
  <div>
    <h1>Show Product #{{ id }}</h1>
    <ProductCard :product="product" />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import ProductService from '@/services/ProductService'

export default {
  name: 'ProductCreate',
  components: {
    ProductCard
  },
  props: ['id'],
  data() {
    return {
      product: {}
    }
  },
  created() {
    ProductService.getProduct(this.id)
      .then(response => {
        this.product = response.data
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
