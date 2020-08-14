<template>
  <a-menu mode="horizontal" :default-selected-keys="[getSelectedKey]">
    <a-menu-item v-for="nav in navConfig" :key="nav.key">
      <router-link :to="{ name: 'product_table', params: { id: nav.key } }">{{
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
        { title: '售卖中', key: 'sell' },
        { title: '已下架', key: 'out' },
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
