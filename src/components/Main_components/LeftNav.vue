<template>
  <a-layout-sider :width="200" class="left-nav">
    <h1 class="logo">
      <img src="../../assets/img/logo.png" alt="logo" />
      <span>小马开团</span>
    </h1>
    <a-menu mode="inline" class="nav-wrap" :default-selected-keys="[getSelectedKey]" theme="light">
      <a-menu-item class="nav-item" v-for="nav in navConfig" :key="nav.key">
        <router-link :to="nav.path">
          <a-icon class="icon" :type="nav.icon" :theme="nav.theme" />
          <span class="nav-title">{{ nav.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data () {
    return {
      navConfig: [
        {
          title: '首页',
          path: '/main/home',
          key: 'home',
          icon: 'home',
          theme: 'filled',
        },
        {
          title: '商品管理',
          path: '/main/product',
          key: 'product',
          icon: 'shopping',
          theme: 'filled',
        },
        {
          title: '订单管理',
          path: '/main/order',
          key: 'order',
          icon: 'unordered-list',
        },
        {
          title: '提现',
          path: '/main/money',
          key: 'money',
          icon: 'dollar-circle',
          theme: 'filled',
        },
      ],
    }
  },
  computed: {
    getSelectedKey () {
      const { path } = this.$route
      if (path.indexOf('product') !== -1) return 'product'
      if (path.indexOf('order') !== -1) return 'order'
      if (path.indexOf('money') !== -1) return 'money'
      return path.split('/').reverse()[0]
    },
  },
}
</script>

<style lang="less" scoped>
.left-nav {
  background-color: #fff;
  .logo {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .nav-wrap {
    .nav-item {
      height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
