<template>
  <a-layout class="container">
    <LeftNav />
    <a-layout>
      <Header />
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">小马开团 ©2020</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import LeftNav from '../../components/Main_components/LeftNav'
import Header from '../../components/Main_components/Header'
export default {
  components: { LeftNav, Header },
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  .content {
    padding: 20px 10px;
  }
  .footer {
    text-align: center;
  }
}
</style>
