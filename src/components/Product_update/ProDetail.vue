<template>
  <section>
    <header class="base-info-header"><span>商品描述</span></header>
    <div class="base-info-content">
      <div ref="editorElem" style="text-align:left;"></div>
      <div class="btns">
        <a-button type="danger">立即上架</a-button>
        <a-button>保存草稿</a-button>
      </div>
    </div>
  </section>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'Editor',
  mounted() {
    this.editor = new E(this.$refs.editorElem)
    this.editor.customConfig.onchange = (html) => {
      console.log(html)
    }
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo', // 重复
    ]
    this.editor.create()
  },
  data() {
    return {
      editor: null,
      editorContent: '',
    }
  },
  methods: {
    handleChange(value) {
      this.category = value
    },
  },
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
  padding: 50px;
  .btns {
    margin-top: 20px;
    button {
      margin-right: 30px;
    }
  }
}
</style>
