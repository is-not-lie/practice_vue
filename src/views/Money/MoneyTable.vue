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
export default {
  props: ['id'],
  mounted() {
    console.log(this.id)
  },
  data() {
    return {
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
  computed: {
    columns() {
      return this.id === 'detail'
        ? [
            {
              title: '商品名称',
              dataIndex: 'proName',
              key: 'proName',
            },
            {
              title: '支付时间',
              dataIndex: 'payTime',
              key: 'payTime',
            },
            {
              title: '支付金额',
              dataIndex: 'payMoney',
              key: 'payMoney',
            },
            {
              title: '订单号',
              dataIndex: 'orderId',
              key: 'orderId',
            },
          ]
        : [
            {
              title: '提现方式',
              dataIndex: 'withdrawMode',
              key: 'withdrawMode',
            },
            {
              title: '提现时间',
              dataIndex: 'withdrawTime',
              key: 'withdrawTime',
            },
            {
              title: '提现金额',
              dataIndex: 'withdrawMoney',
              key: 'withdrawMoney',
            },
            { title: '状态', dataIndex: 'status', key: 'status' },
          ]
    },
    orderList() {
      return this.id === 'detail'
        ? [
            {
              id: '1',
              proName: 'test',
              payTime: '20134687',
              payMoney: 50,
              orderId: '6546843578',
            },
          ]
        : [
            {
              id: '1',
              withdrawMode: 'test',
              withdrawTime: '20134687',
              withdrawMoney: 50,
              status: '成功',
            },
          ]
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
