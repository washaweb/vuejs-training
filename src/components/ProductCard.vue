<template>
  <div class="product-card">
    <img :src="'/products/' + product.filename" :alt="product.title" />
    <h4>{{ product.title }}</h4>
    <p>{{ product.description }}</p>

    <dl class="details" v-if="showdetails">
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
  props: {
    //product Object is now defined outside the component and passed throught the props
    product: {
      type: Object
    },
    showdetails: {
      type: Boolean,
      default: false
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
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    display: block;
  }
}
</style>
