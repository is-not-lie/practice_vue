<template>
  <section>
    <header class="base-info-header"><span>基本信息</span></header>
    <div class="base-info-content">
      <a-form-item label="商品图片:" required>
        <ImgUpload />
      </a-form-item>
      <a-form-item label="商品标题:" required>
        <a-textarea id="pro-title" v-model="proTitle" placeholder="请输入内容" :rows="4" />
      </a-form-item>
      <a-form-item label="商品分类:" required>
        <a-select default-value="category" @change="handleChange">
          <a-select-option value="category">
            请选择商品分类
          </a-select-option>
        </a-select>
      </a-form-item>
    </div>
  </section>
</template>

<script>
import ImgUpload from './ImgUpload'
export default {
  components: { ImgUpload },
  data () {
    return {
      proTitle: '',
      category: ''
    }
  },
  methods: {
    handleChange (value) {
      this.category = value
    }
  }
}
</script>

<style lang="less" scoped>
.base-info-header {
  background-color: #f7f7f7;
  padding: 5px;
  span {
    white-space: nowrap;
  }
}
.base-info-content {
  padding: 0 50px;
  .ant-form-item {
    display: flex;
    margin: 20px 0;
    #pro-title {
      width: 500px;
    }
  }
}
</style>