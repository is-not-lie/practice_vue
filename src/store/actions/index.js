import { message } from 'ant-design-vue'
import { AddProduct, SetFileList } from '../action_types'
import { reqRemoveImg } from '../../api'

export default {
  async removeImg({ commit, state }, name) {
    const { imgs } = state.product
    const data = await reqRemoveImg(name)
    if (data) {
      imgs.forEach((img, i) => {
        if (img.name === name) imgs.splice(i, 1)
      })
    }
    commit(SetFileList, imgs)
    message.success('图片已删除', 1)
  },
  async addProduct({ commit, state }, product) {
    const { imgs } = state.product
    state.product.imgs = imgs.map((img) => {
      const { uid, name, url } = img
      return { uid, name, url }
    })
    commit(AddProduct, product)
  },
}
