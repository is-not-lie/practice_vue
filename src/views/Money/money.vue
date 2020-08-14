<template>
  <div>
    <div class="withdraw">
      <div>
        <span>可提现金额(元)</span><span>{{ money }}</span>
      </div>
      <div>
        <span>待结算(元)</span><span>{{ money }}</span>
      </div>
      <div>
        <a-button>提现</a-button>
      </div>
    </div>
    <a-card>
      <MoneyNav slot="title" />
      <router-view></router-view>
    </a-card>
  </div>
</template>

<script>
import MoneyNav from '../../components/Money_component/MoneyNav'
export default {
  components: {
    MoneyNav,
  },
  data() {
    return {
      money: 0,
    }
  },
}
</script>

<style lang="less" scoped>
.withdraw {
  width: 450px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:nth-child(1) {
      border-bottom: 1px solid #6c6c6c2d;
      span {
        &:nth-child(1) {
          font-size: 16px;
          font-weight: 400;
        }
        &:nth-child(2) {
          margin: 10px 0;
          font-size: 30px;
          font-weight: 600;
          color: #3284e9;
        }
      }
    }
    &:nth-child(2) {
      span {
        &:nth-child(1) {
          font-size: 12px;
          margin: 10px 0;
        }
        &:nth-child(2) {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
    &:nth-child(3) {
      align-items: flex-end;
      button {
        width: 100px;
      }
    }
  }
}
</style>
