<template>
  <div class="table-footer">
    <div class="table-footer-btns">
      <a-checkbox :checked="isCheckAll" @change="checkOnChange"
        >全选</a-checkbox
      >
      <span>已选{{ count }}项</span>
      <a-button type="link">批量设置</a-button>
      <a-button type="primary">分类</a-button>
      <a-button type="danger">删除</a-button>
      <a-button type="primary">下架</a-button>
    </div>
    <a-pagination
      show-quick-jumper
      :current="current"
      :total="total"
      @change="onChange"
      show-size-changer
    />
  </div>
</template>

<script>
export default {
  props: ['count', 'proCount'],
  data() {
    return {
      current: 2,
      total: 500,
      isCheckAll: false,
    }
  },
  methods: {
    onChange(current) {
      this.current = current
    },
    checkOnChange() {
      this.isCheckAll = !this.isCheckAll
      this.$emit('isCheckAll', this.isCheckAll)
    },
  },
  watch: {
    count(v) {
      if (v === this.proCount) this.isCheckAll = true
      else this.isCheckAll = false
    },
  },
}
</script>

<style lang="less" scoped>
.table-footer {
  display: flex;
  justify-content: space-between;
  .table-footer-btns {
    .ant-btn-primary,
    .ant-btn-danger {
      margin: 0 5px;
    }
  }
}
</style>
