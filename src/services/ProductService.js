import Api from '@/services/Api'

export default {
  getProducts() {
    return Api().get('/products')
  },
  getProduct(id) {
    return Api().get(`/products/${id}`)
  },
  postProduct(product) {
    return Api().post('/products', product)
  }
}
