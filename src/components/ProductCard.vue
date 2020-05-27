<template>
  <div class="product-card">
    <img :src="product.filename" :alt="product.title" />
    <h4>{{ product.title }}</h4>
    <p>{{ product.description }}</p>

    <dl class="details">
      <dt>Details</dt>
      <dd>type: {{ product.type }}</dd>
      <dd>dimensions: {{ product.width }} / {{ product.height }}</dd>
      <dd>
        rating:
        <span v-for="i in product.rating" :key="i">*</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      product: {
        id: 1,
        title: 'Brown eggs',
        type: 'dairy',
        description: 'Raw organic brown eggs in a basket',
        filename: require('@/assets/products/0.jpg'),
        height: 600,
        width: 400,
        price: 28.1,
        rating: 4
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 8px;
  text-align: left;
  margin: 16px auto;
  max-width: 400px;
}
</style>
