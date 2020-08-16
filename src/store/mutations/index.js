import { SetFileList, AddProduct } from '../action_types'
export default {
  [SetFileList](state, fileList) {
    state.product.imgs = fileList
  },
  setDesc(state, desc) {
    state.product.desc = desc
  },
  [AddProduct](state, product) {
    state.productList.unshift(product)
    state.product = {}
  },
}
