<template>
  <a-table :columns="columns" :data-source="productList" rowKey="id" bordered :row-selection="{
      selectedRowKeys,
      onChange: onSelectChange,
    }" :pagination="false">
    <Pagination slot="footer" :count="selectedRowKeys.length" :proCount="productList.length" @isCheckAll="isCheckAll" />
  </a-table>
</template>

<script>
// import dayjs from 'dayjs'
import Pagination from '../../components/Product_components/Pagination'
export default {
  props: ['id'],
  components: {
    Pagination,
  },
  data () {
    return {
      columns: [
        {
          title: '商品图',
          dataIndex: 'proImg',
          key: 'proImg',
        },
        {
          title: '商品标题',
          dataIndex: 'proTitle',
          key: 'proTitle',
        },
        {
          title: '价格',
          dataIndex: 'money',
          key: 'money',
        },
        {
          title: '库存',
          dataIndex: 'inventory',
          key: 'inventory',
        },
        {
          title: '销量',
          dataIndex: 'volume',
          key: 'volume',
        },
        {
          title: '分类',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: '操作',
          dataIndex: 'option',
          key: 'option',
        },
      ],
      productList: [
        {
          id: '1',
          proImg: <img src="/src/assets/img/logo.png" alt="productImg" />,
          proTitle: '按算法',
          money: 10,
          inventory: 10,
          volume: 10,
          category: '日常用品',
          createTime: 210348665,
          status: '上架',
          option: '下架',
        },
      ],
      selectedRowKeys: [],
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    isCheckAll (isCheckAll) {
      if (isCheckAll) {
        this.productList.forEach((product) => {
          this.selectedRowKeys.push(product.id)
        })
      } else this.selectedRowKeys = []
    },
  },
  watch: {
    $route ({ params }) {
      this.id = params.id
    },
  },
}
</script>

<style lang="less" scoped></style>
