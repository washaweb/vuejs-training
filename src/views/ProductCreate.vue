<template>
  <div>
    <h1>Create a new Product</h1>
    <div class="product-create-form">
      <Loader v-if="loading" />
      <form action="#" @submit.prevent="createProduct" v-if="!loading">
        <p>
          <label for="title">Title:</label>
          <input type="text" name="title" v-model="productForm.title" />
        </p>
        <p>
          <label for="type">Type:</label>
          <select name="type" id="type" v-model="productForm.type">
            <option value="">Choose</option>
            <option
              v-for="(type, index) in productTypes"
              :key="index"
              :value="type"
            >
              {{ type }}
            </option>
          </select>
        </p>
        <p>
          <label for="description">Description:</label>
          <input
            type="text"
            name="description"
            v-model="productForm.description"
          />
        </p>
        <p>
          <label for="height">Height:</label>
          <input type="number" name="height" v-model="productForm.height" />
        </p>
        <p>
          <label for="width">Width:</label>
          <input type="number" name="width" v-model="productForm.width" />
        </p>
        <p>
          <label for="price">Price:</label>
          <input type="number" name="price" v-model="productForm.price" /><span
            class="suffix"
            >€</span
          >
        </p>
        <p class="error" v-if="formError">
          Formulaire incomplet
        </p>
        <p>
          <button class="btn" type="reset">Empty</button
          ><button class="btn btn-primary" :disabled="formError" type="submit">
            Create product
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import { uuid } from '@/utils/utils'
import ProductService from '@/services/ProductService'

export default {
  name: 'ProductCreate',
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
      productTypes: ['dairy', 'fruit', 'vegetable'],
      productForm: {
        id: uuid(),
        title: '',
        type: '',
        description: '',
        filename: '0.jpg',
        height: '',
        width: '',
        price: '',
        rating: ''
      }
    }
  },
  computed: {
    formError() {
      return (
        this.productForm.title === '' ||
        this.productForm.type === '' ||
        this.productForm.description === '' ||
        this.productForm.height === '' ||
        this.productForm.width === '' ||
        this.productForm.price === ''
      )
    }
  },
  methods: {
    createProduct() {
      this.loading = true
      ProductService.postProduct(this.productForm)
        .then(response => {
          //console.log(response)
          //reset product for next creation
          this.loading = false
          this.productForm = {
            id: uuid(),
            title: '',
            type: '',
            description: '',
            filename: '0.jpg',
            height: '',
            width: '',
            price: '',
            rating: ''
          }
          console.log('product created')
        })
        .catch(error => {
          console.log('There was an error: ' + error.response)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-create-form {
  max-width: 600px;
  margin: 10px auto;

  form {
    text-align: left;
    p {
      display: flex;
      &.error {
        color: tomato;
        font-weight: bold;
        text-align: center;
        display: block;
      }
    }

    label {
      width: 120px;
      display: block;
      padding: 9px 10px;
    }
    input,
    select,
    textarea {
      flex: 1;
      padding: 8px 20px;
      border: 1px solid lightgray;
      border-radius: 4px;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
      background-repeat: no-repeat;
      background-position-x: calc(100% - 5px);
      background-position-y: 5px;
    }
    .suffix {
      padding: 9px 10px;
      display: inline-block;
    }

    .btn {
      display: block;
      flex: 1;
      padding: 20px 20px;
      margin-top: 20px;
      border: none;
      background: #999;
      color: #fff;
      & + .btn {
        margin-left: 10px;
      }
      &.btn-primary {
        background: #42b983;
        cursor: pointer;
        &:disabled {
          cursor: default;
          background: lighten(#42b983, 20%);
        }
      }
    }
  }
}
</style>
