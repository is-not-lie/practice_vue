<template>
  <a-card>
    <div slot="title">
      <a-button type="link" shape="circle" icon="arrow-left" @click="goBack" />
      <span>{{ getTitle }}</span>
    </div>
    <a-form>
      <BaseInfo />
      <ProModel />
      <Logistics />
      <ProDetail />
    </a-form>
  </a-card>
</template>

<script>
import BaseInfo from '../../components/Product_update/BaseInfo'
import ProModel from '../../components/Product_update/ProModel'
import Logistics from '../../components/Product_update/Logistics'
import ProDetail from '../../components/Product_update/ProDetail'
export default {
  components: { BaseInfo, ProModel, Logistics, ProDetail },
  props: ['id'],
  methods: {
    goBack() {
      this.$router.back()
    },
  },
  computed: {
    getTitle() {
      return this.id === 'add' ? '商品新增' : '商品修改'
    },
  },
}
</script>

<style lang="less" scoped></style>
