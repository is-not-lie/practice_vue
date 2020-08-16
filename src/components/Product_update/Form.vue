<template>
  <a-form :form="form" @submit.prevent="handleSubmit">
    <div class="base-info">
      <header class="header"><span>基本信息</span></header>
      <div class="content">
        <a-form-item v-bind="formItemLayout" label="商品图片:" required>
          <ImgUpload />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="商品标题:">
          <a-textarea
            placeholder="请输入内容"
            :rows="4"
            v-decorator="['title', rules.title]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="商品分类:">
          <a-select v-decorator="['category', rules.category]">
            <a-select-option value="">
              请选择商品分类
            </a-select-option>
            <a-select-option value="test">
              测试
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
    </div>
    <div class="model-info">
      <header class="header"><span>型号/价格/库存</span></header>
      <div class="content">
        <div>
          <a-form-item label="商品型号:">
            <a-button icon="plus">添加商品型号</a-button>
          </a-form-item>
          <span class="proposal">如有颜色、尺码等多种型号，请添加商品型号</span>
        </div>
        <div class="supply-price">
          <div>
            <a-form-item v-bind="formItemLayout" label="供货价:">
              <a-input
                prefix="￥"
                suffix="元"
                placeholder="请添加商品价格"
                v-decorator="['supply_price', rules.supply_price]"
              />
            </a-form-item>
            <span class="proposal"
              >注意：平台会扣除5%销售费用，与您按供货价的95%结算，请精确设置供货价。</span
            >
          </div>
          <div>
            <a-form-item label="佣金比:" v-bind="formItemLayout">
              <a-input suffix="%" v-decorator="['com_rate', rules.com_rate]" />
            </a-form-item>
            <span class="proposal">佣金比=（团购价格-结算价格）/结算价格</span>
          </div>
        </div>
        <a-form-item label="产品售价:" v-bind="formItemLayout">
          <a-input
            prefix="￥"
            suffix="元"
            placeholder="请定义商品售价"
            v-decorator="['price', rules.price]"
          />
        </a-form-item>
        <a-form-item label="商品库存:" v-bind="formItemLayout">
          <a-input
            placeholder="请填写商品库存"
            v-decorator="['inv', rules.inv]"
          />
        </a-form-item>
      </div>
    </div>
    <div class="logistics-info">
      <header class="header"><span>发货物流</span></header>
      <div class="content">
        <a-form-item label="运费模板:" v-bind="formItemLayout">
          <a-select v-decorator="['template', { initialValue: '' }]">
            <a-select-option value="">默认运费模板（全国包邮）</a-select-option>
          </a-select>
          <a-button type="link" icon="plus">新建运费模板</a-button>
        </a-form-item>
        <a-form-item label="不发货地区:" v-bind="formItemLayout">
          <a-select v-decorator="['city', { initialValue: '' }]">
            <a-select-option value="">无</a-select-option>
          </a-select>
          <a-button type="link" icon="plus">添加不发货区域模板</a-button>
        </a-form-item>
      </div>
    </div>
    <ProDetail />
    <div class="btns">
      <a-button type="danger" html-type="submit">立即上架</a-button>
      <a-button html-type="submit">保存草稿</a-button>
    </div>
  </a-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ImgUpload from './ImgUpload'
import ProDetail from '../../components/Product_update/ProDetail'
import rules from '../../config/rules/product_rule'
export default {
  created() {
    this.form = this.$form.createForm(this, {})
  },
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 2 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
      },
      rules,
    }
  },
  components: { ProDetail, ImgUpload },
  computed: { ...mapState(['product']) },
  methods: {
    ...mapActions(['addProduct']),
    handleSubmit() {
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.addProduct(values)
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  background-color: #f7f7f7;
  padding: 5px;
  span {
    white-space: nowrap;
  }
}
.content {
  padding: 0 50px;
  .ant-form-item {
    display: flex;
    margin: 20px 0;
  }
}
.btns {
  margin: 30px 0 0 50px;
  button {
    margin-right: 30px;
  }
}
</style>
