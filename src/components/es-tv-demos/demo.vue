<template>
  <div class="container2">
    <div>
    <img class="guide"  src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/help2.jpg"
         focusView :focusable="true" :requestFocus="true" @click="clickView"/>
    <img class="feedback" src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/feedback_selected.png"/>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { getApp } from '@/util';
  import '/static/css/common.css'

  export default {
    mounted() {
      this.app = getApp();
      this.app.$on('hardwareBackPress', this.backPress);
    },
    methods: {
      backPress() {
        Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
      },
      clickView() {
        console.log('hello');
      },
    }
  }
</script>

<style scope>



</style>
