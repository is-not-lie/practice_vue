<template>
  <a-card>
    <OrderNav slot="title" />
    <div slot="extra">
      <a-button>批量导出订单</a-button>
      <a-button :style="{ marginLeft: '10px' }">批量发货</a-button>
    </div>
    <router-view></router-view>
  </a-card>
</template>

<script>
import OrderNav from '../../components/Order_components/OrderNav'
export default {
  components: { OrderNav },
}
</script>

<style lang="less" scoped></style>
