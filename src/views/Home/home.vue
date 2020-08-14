<template>
  <div class="home">
    <div v-for="item in homeInfo" :key="item.id">
      <div>
        <span>{{ item.title }}</span>
        <span>{{ item.money }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeInfo: [
        { title: '待发货订单', money: 0, id: 1 },
        { title: '待退款处理', money: 0, id: 2 },
        { title: '可提现收入', money: 0, id: 3 },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  background-color: #fff;
  & > div {
    width: 30%;
    border: 1px solid #6c6c6c31;
    padding: 24px;
    margin: 0 20px;
    &:nth-child(1) > div {
      background-color: #f88276;
    }
    &:nth-child(2) > div {
      background-color: #ffc764;
    }
    &:nth-child(3) > div {
      background-color: #78c5ff;
    }
    & > div {
      width: 80%;
      padding: 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      span {
        color: #fff;
        &:nth-child(1) {
          font-size: 18px;
        }
        &:nth-child(2) {
          font-size: 16px;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
