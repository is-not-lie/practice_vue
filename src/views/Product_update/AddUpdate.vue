<template>
  <a-card>
    <div slot="title">
      <a-button type="link" shape="circle" icon="arrow-left" @click="goBack" />
      <span>{{ getTitle }}</span>
    </div>
    <Form />
  </a-card>
</template>

<script>
import Form from '../../components/Product_update/Form'
export default {
  props: ['id'],
  components: { Form },
  methods: {
    goBack() {
      this.$router.back()
    },
    handleSubmit() {
      console.log(this.form.getFieldsValue())
    },
  },
  computed: {
    getTitle() {
      return this.id === 'add' ? '商品新增' : '商品修改'
    },
  },
}
</script>

<style lang="less" scoped>

</style>
