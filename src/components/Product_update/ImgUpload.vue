<template>
  <div class="clearfix">
    <a-upload class="upload" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture-card" :file-list="fileList" @preview="handlePreview" @change="handleChange">
      <div v-if="fileList.length < 3">
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
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  data () {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    };
  },
  methods: {
    handleCancel () {
      this.previewVisible = false;
    },
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange ({ fileList }) {
      this.fileList = fileList;
    },
  },
};
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