<template>
  <section>
    <header class="base-info-header"><span>发货物流</span></header>
    <div class="base-info-content">
      <a-form-item label="运费模板:" required>
        <a-select default-value="default" @change="handleChange" style="width:230px;">
          <a-select-option value="default">默认运费模板（全国包邮）</a-select-option>
        </a-select>
        <a-button type="link" icon="plus">新建运费模板</a-button>
      </a-form-item>
      <a-form-item label="不发货地区:" required>
        <a-select default-value="" @change="handleChange" style="width:230px;">
          <a-select-option value="">无</a-select-option>
        </a-select>
        <a-button type="link" icon="plus">添加不发货区域模板</a-button>
      </a-form-item>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleChange (value) {
      this.category = value
    }
  }
}
</script>

<style lang="less" scoped>
.base-info-header {
  background-color: #f7f7f7;
  padding: 5px;
  span {
    white-space: nowrap;
  }
}
.base-info-content {
  padding: 0 50px;
  .ant-form-item {
    display: flex;
    margin: 20px 0;
  }
}
</style>