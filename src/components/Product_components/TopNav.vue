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
        { title: '全部', key: 'all', path: '/main/product/all' },
        { title: '售卖中', key: 'sell', path: '/main/product/sell' },
        { title: '已下架', key: 'out', path: '/main/product/out' },
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
