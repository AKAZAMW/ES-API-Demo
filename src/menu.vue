<template>
  <div class="container">
    <ul class="feature-list">
      <!--<li :focusable=false>-->
      <!--<div id="version-info">-->
      <!--<p class="feature-title">Vue: {{ Vue.version }}</p>-->
      <!--<p class="feature-title" v-if="Vue.Native">Hippy-Vue: {{ Vue.Native.version }}</p>-->
      <!--</div>-->
      <!--</li>-->
      <li :focusable=false>
        <p class="feature-title">天翼高清 VR全景</p>
      </li>
      <li class="feature-item" :focusable=false>
<!--        <div v-for="(feature, index) in videoList" @focus="onFocus" :key="feature.id" :focusable=true :focusScale="1.1" :requestFocus="index === 0" @click="routeTo(`/video/${feature.id}`)" class="button">-->
<!--          <p duplicateParentState>{{ feature.name }}</p>-->
<!--        </div>-->
        <div @focus="onFocus" :focusable=true :focusScale="1.1" :requestFocus="true" @click="routeTo(`/video/home`)" class="button">
          <p duplicateParentState>首页</p>
        </div>
      </li>
      <li :focusable=false>
        <p class="feature-title">基础组件 Demos</p>
      </li>
      <li class="feature-item" :focusable=false>
        <div class="feature-item" :clipChildren="false">
          <div v-for="(feature, index) in featureList" @focus="onFocus" :key="feature.id" :focusable=true :focusScale="1.1" @click="routeTo(`/demo/${feature.id}`)" class="button">
            <p duplicateParentState>{{ feature.name }}</p>
          </div>
        </div>
      </li>
      <li :focusable=false v-if="nativeFeatureList.length">
        <p class="feature-title">终端组件 Demos</p>
      </li>
      <li :focusable=false>
        <div class="feature-item">
          <div v-for="feature in nativeFeatureList" :key="feature.id" :focusable=true :focusScale="1.1" @click="routeTo(`/demo/${feature.id}`)" class="button">
            <p duplicateParentState>{{ feature.name }}</p>
          </div>
        </div>
      </li>
      <li :focusable=false v-if="nativeFeatureList.length">
        <p class="feature-title">ES扩展组件 Demos</p>
      </li>
      <li :focusable=false>
        <div class="feature-item">
          <div v-for="feature in esFeatureList" :key="feature.id" :focusable=true :focusScale="1.1" @click="routeTo(`/demo/${feature.id}`)" class="button">
            <p duplicateParentState>{{ feature.name }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import demos from './components/demos';
import nativeDemos from './components/native-demos';
import esTvDemos from './components/es-tv-demos';
import hdVideo from './components/hd-video';
import { getApp } from './util';

export default {
  name: 'App',
  data() {
    return {
      exitTime: 0,
      featureList: Object.keys(demos).map(demoId => ({
        id: demoId,
        name: demos[demoId].name,
      })),
      nativeFeatureList: Object.keys(nativeDemos).map(demoId => ({
        id: demoId,
        name: nativeDemos[demoId].name,
      })),
      esFeatureList: Object.keys(esTvDemos).map(demoId => ({
        id: demoId,
        name: esTvDemos[demoId].name,
      })),
      videoList: Object.keys(hdVideo).map(videoId => ({
        id: videoId,
        name: hdVideo[videoId].name,
      })),
      Vue,
    };
  },
  /**
   * Hippy-Vue 的特殊生命周期方法
   *
   * 仅供 Android 使用。
   * 仅供绑定在 '/' 的根页面使用。
   * 仅供 VueRouter 的 disableAutoBack 参数为假时，绑定了 Back 按键返回时使用。
   *
   * 当 Android 上通过 Back 按键返回到根页面时，通过它可以确认是否需要继续退出，传入了一个 exit 方法，
   * 当确认步骤或者退出前处理完后，调用 exit() 即可退出 app。
   *
   * 如果 disableAutoBack = true 阻止了 Back 按键，也可以通过 this.router.history.exitApp() 退出 App
   * 但是这个方法仅限 Android 上通过 Back 按键到最顶页面时触发，其它页面不做响应。
   */
  beforeAppExit(/* exit */) {
    // 取消 exit() 的注释，即可阻止退出，在前面可以加上退出条件
    // exit();
  },
  mounted() {
    this.app = getApp();
    this.app.$on('hardwareBackPress', this.backPress);
  },
  methods: {
    routeTo(url) {
      // this.$router.push(url)
      Vue.Native.callNative('MiniModule', 'execute', { action: '__AC_NEW_TAB__', data: JSON.stringify({ url }) });
    },
    onFocus(e) {
      console.log("onFocus isFocused:" + e.isFocused);
    },
    backPress() {
      const now = new Date().getTime() / 1000
      console.log('backPress', now)
      clearTimeout(this.exitTimer)
      if (now - this.exitTime < 1) {
        Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
      } else {
        this.exitTime = now
        this.exitTimer = setTimeout(() => {
          Vue.Native.callNative('MiniModule', 'execute', {action: '__AC_TOAST__', text: '双击返回键退出APP'});
        }, 1000)
      }
    },
  }
};
</script>

<style scope>
.container {
  height: 1080px;
}
.feature-list {
  overflow: scroll;
  margin-top: 10px;
}
.feature-list li {
  padding-left: 50px;
  padding-right: 50px;
}

.feature-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.feature-title {
  font-size: 30px;
  color: #555;
  text-align: center;
  line-height: 70px;
}

#version-info {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: gainsboro;
  border-bottom-style: solid;
}
</style>
