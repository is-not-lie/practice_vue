<template>
  <a-menu mode="horizontal" :default-selected-keys="[getSelectedKey]">
    <a-menu-item v-for="nav in navConfig" :key="nav.key">
      <router-link :to="{ name: 'money_table', params: { id: nav.key } }">{{
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
        { title: '收入明细', key: 'detail' },
        { title: '提现记录', key: 'record' },
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
