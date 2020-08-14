<template>
  <a-table
    :columns="columns"
    :data-source="orderList"
    rowKey="id"
    bordered
    :row-selection="{
      selectedRowKeys,
      onChange: onSelectChange,
    }"
    :pagination="false"
  >
    <div slot="footer" class="table-footer">
      <span>共 {{ orderList.length }} 条</span>
      <a-pagination
        :current="current"
        :total="total"
        showQuickJumper
        show-size-changer
        @change="onChange"
      />
    </div>
  </a-table>
</template>

<script>
// import dayjs from 'dayjs'
export default {
  props: ['id'],
  mounted() {
    console.log(this.id)
  },
  data() {
    return {
      columns: [
        {
          title: '订单信息',
          dataIndex: 'orderInfo',
          key: 'orderInfo',
        },
        {
          title: '付款人信息',
          dataIndex: 'payerInfo',
          key: 'payerInfo',
        },
        {
          title: '订单状态',
          dataIndex: 'orderStatus',
          key: 'orderStatus',
        },
        {
          title: '操作',
          dataIndex: 'option',
          key: 'option',
        },
      ],
      orderList: [
        {
          id: '1',
          orderInfo: 'test',
          payerInfo: 'test',
          orderStatus: 'test',
          option: '下架',
        },
      ],
      selectedRowKeys: [],
      current: 1,
      total: 100,
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    onChange(current) {
      this.current = current
    },
  },
  watch: {
    $route({ params }) {
      this.id = params.id
    },
  },
}
</script>

<style lang="less" scoped>
.table-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-right: 15px;
  }
}
</style>
