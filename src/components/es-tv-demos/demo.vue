<template>
  <div class="container2">
    <div v-if="showGuide">
      <img class="guide"  src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/help2.jpg"/>
      <img class="feedback" :focusable="true" :requestFocus="true" @click="clickView"
           src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/feedback_selected.png"/>
    </div>
    <div v-if="!showGuide" class="report">
      <p class="title">故障上报</p>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { getApp } from '@/util';
  import '/static/css/common.css'

  export default {
    data() {
      return {
        showGuide: true,
      };
    },
    mounted() {
      this.showGuide = false;
      this.app = getApp();
      this.app.$on('hardwareBackPress', this.backPress);
    },
    methods: {
      backPress() {
        Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
      },
      clickView() {
        console.log('hello');
        this.showGuide = !this.showGuide;
      },
    }
  }
</script>

<style>
.container2 .report{

}
.container2 .report .title{
  line-height: 70px;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  margin-top: 60px;
  font-family: 'Microsoft YaHei UI';
  color: #FFFFFF;

}

</style>
