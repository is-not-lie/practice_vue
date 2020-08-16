<template>
  <a-menu mode="horizontal" :default-selected-keys="[getSelectedKey]">
    <a-menu-item v-for="nav in navConfig" :key="nav.key">
      <router-link :to="nav.path">{{ nav.title }}</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data () {
    return {
      navConfig: [
        { title: '全部', key: 'all', path: '/main/order/all' },
        { title: '待发货', key: 'await', path: '/main/order/await' },
        { title: '退款/售后', key: 'refund', path: '/main/order/refund' },
        { title: '已完成', key: 'done', path: '/main/order/done' },
      ],
    }
  },
  computed: {
    getSelectedKey () {
      return this.$route.params.id
    },
  },
}
</script>

<style lang="less" scoped></style>
