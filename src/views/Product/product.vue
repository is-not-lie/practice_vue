<template>
  <a-card>
    <TopNav slot="title" />
    <router-link slot="extra" :to="{name: 'product_update',params:{id:'add'}}">
      <a-button type="primary">添加商品</a-button>
    </router-link>
    <router-view></router-view>
  </a-card>
</template>

<script>
import TopNav from '../../components/Product_components/TopNav'
export default {
  components: { TopNav },
}
</script>

<style lang="less" scoped></style>
