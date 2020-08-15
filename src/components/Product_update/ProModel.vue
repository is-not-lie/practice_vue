<template>
  <section>
    <header class="base-info-header"><span>型号/价格/库存</span></header>
    <div class="base-info-content">
      <div>
        <a-form-item label="商品型号:">
          <a-button icon="plus">添加商品型号</a-button>
        </a-form-item>
        <span class="proposal">如有颜色、尺码等多种型号，请添加商品型号</span>
      </div>
      <div class="supply-price">
        <div>
          <a-form-item label="供货价:" required>
            <a-input prefix="￥" suffix="元" v-model="supplyPrice" placeholder="请添加商品价格" />
          </a-form-item>
          <span class="proposal">注意：平台会扣除5%销售费用，与您按供货价的95%结算，请精确设置供货价。</span>
        </div>
        <div>
          <a-form-item label="佣金比:" required>
            <a-input suffix="%" v-model="ratio" />
          </a-form-item>
          <span class="proposal">佣金比=（团购价格-结算价格）/结算价格</span>
        </div>
      </div>
      <a-form-item label="产品售价:" required>
        <a-input v-model="price" prefix="￥" suffix="元" placeholder="请定义商品售价" />
      </a-form-item>
      <a-form-item label="商品库存:" required>
        <a-input placeholder="请填写商品库存" v-model="inventory" />
      </a-form-item>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      supplyPrice: "",
      price: "",
      inventory: ""
    }
  },
  methods: {
    handleChange (value) {
      this.category = value
    }
  },
  computed: {
    ratio () {
      return 100
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
  }
  .proposal {
    font-size: 12px;
    color: #6c6c6c88;
    margin-left: 60px;
  }
  .supply-price {
    display: flex;
    .proposal {
      display: inline-block;
      width: 230px;
    }
    div {
      &:nth-child(1) {
        margin-right: 20px;
      }
    }
  }
}
</style>