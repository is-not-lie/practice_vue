<template>
  <a-menu mode="horizontal" :default-selected-keys="[getSelectedKey]">
    <a-menu-item v-for="nav in navConfig" :key="nav.key">
      <router-link :to="{ name: 'order_table', params: { id: nav.key } }">{{
        nav.title
      }}</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      navConfig: [
        { title: '全部', key: 'all' },
        { title: '待发货', key: 'await' },
        { title: '退款/售后', key: 'refund' },
        { title: '已完成', key: 'done' },
      ],
    }
  },
  computed: {
    getSelectedKey() {
      return this.$route.name
    },
  },
}
</script>

<style lang="less" scoped></style>
