export default {
  title: {
    rules: [{ required: true, message: '商品标题不能为空' }],
  },
  category: {
    rules: [{ required: true, message: '商品分类不能为空' }],
    initialValue: '',
  },
  supply_price: {
    rules: [
      {
        required: true,
        message: '商品价格不能为空',
      },
    ],
  },
  com_rate: {
    rules: [
      {
        required: true,
        message: '佣金比不能为空',
      },
    ],
  },
  price: {
    rules: [
      {
        required: true,
        message: '商品售价不能为空',
      },
    ],
  },
  inv: {
    rules: [
      {
        required: true,
        message: '商品库存不能为空',
      },
    ],
  },
}
