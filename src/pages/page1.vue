<template>
  <div>
    <button @click="cordovaDevice">获取地理信息</button>
    <img class="image" :src="imgUrl">
    <button @click="getImage">获取图片</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: ''
    }
  },
  methods: {
    cordovaDevice() {
      alert("Cordova version: " + window.device.cordova + "\n" +
      "Device model: " + window.device.model + "\n" +
      "Device platform: " + window.device.platform + "\n" +
      "Device UUID: " + window.device.uuid + "\n" +
      "Device version: " + window.device.version);
    },
    getImage() {
      window.navigator.camera.getPicture((url) => {
        this.imgUrl = url
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: 100px;
  width: 100px;
}
</style>
