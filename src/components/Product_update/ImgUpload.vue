<template>
  <div class="clearfix">
    <a-upload
      class="upload"
      name="image"
      action="http://localhost:3000/img/upload"
      list-type="picture-card"
      :file-list="product.imgs"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="product.imgs.length < 3">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          添加图片
        </div>
      </div>
    </a-upload>
    <span class="proposal">建议尺寸：800*800像素，最多上传3张</span>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
    }
  },
  methods: {
    ...mapMutations(['setFileList']),
    ...mapActions(['removeImg']),
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ file, fileList }) {
      if (file.status === 'done') {
        const { url, name } = file.response.data
        fileList[fileList.length - 1].url = url
        fileList[fileList.length - 1].name = name
      }
      if (file.status === 'removed') {
        this.removeImg(file.name)
      }
      this.setFileList(fileList)
    },
  },
  computed: {
    ...mapState(['product']),
  },
}
</script>
<style lang="less">
.proposal {
  font-size: 12px;
  color: #6c6c6c88;
}
.ant-upload-select-picture-card i {
  font-size: 25px;
  color: #508de2;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #508de2;
}
</style>
