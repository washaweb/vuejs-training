<template>
  <div>
    <h1>Show Product #{{ id }}</h1>
    <Loader v-if="loading" />
    <ProductCard v-if="!loading" :product="product" :showdetails="true" />
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import ProductService from '@/services/ProductService'

export default {
  name: 'ProductCreate',
  components: {
    ProductCard,
    Loader
  },
  props: ['id'],
  data() {
    return {
      product: {},
      error: null,
      loading: true
    }
  },
  // this method does not refresh the data when component has already been loaded
  created() {
    this.fetchProductData()
  },
  // that's why we need another way to load our data on router Change,
  //see https://router.vuejs.org/guide/advanced/data-fetching.html
  watch: {
    // call again the method if the route changes
    $route: 'fetchProductData'
  },
  methods: {
    fetchProductData() {
      this.error = null
      this.product = {}
      this.loading = true

      ProductService.getProduct(this.id)
        .then(response => {
          setTimeout(() => {
            this.loading = false
            this.product = response.data
          }, 100)
        })
        .catch(error => {
          this.loading = false
          this.error = 'There was an error:' + error.response
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
