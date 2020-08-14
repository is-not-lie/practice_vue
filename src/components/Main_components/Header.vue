<template>
  <a-layout-header class="header">
    <span>供应商管理中心</span>
    <div>
      <a-avatar :size="45" icon="user" />
      <span></span>
    </div>
  </a-layout-header>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  background-color: #5ddb63;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    color: #fff;
    font-size: 18px;
    font-weight: 300;
  }
}
</style>
