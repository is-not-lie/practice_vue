<template>
  <a-menu mode="horizontal" :default-selected-keys="[getSelectedKeys]">
    <a-menu-item v-for="nav in navConfig" :key="nav.key">
      <router-link :to="nav.path">{{
        nav.title
      }}</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data () {
    return {
      navConfig: [
        { title: '收入明细', key: 'detail', path: '/main/money/detail' },
        { title: '提现记录', key: 'record', path: '/main/money/record' },
      ],
    }
  },
  computed: {
    getSelectedKeys () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="less" scoped></style>
