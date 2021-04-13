<template>
  <div class="container2">
    <div class="head-name flex-row">
      <img
        src="../../../static/img/yule.png"
      />
      <p class="his-word">娱乐</p>
    </div>
    <!-- 历史加载区域 -->
    <div id="div-clumn" class="display-flex flex-column">
      <div class="page-loading">
        <div class="display-flex flex-row his-content">
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo" :requestFocus="true">
            <img
              src="../../../static/img/history/his6.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >刺激过山车第一季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his13.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >刺激过山车第二季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his17.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >堡垒之夜第一季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his5.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >堡垒之夜第二季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/gggs.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >搞怪故事</text-view></div>
              </div>
          </div>
        </div>
        <div class="display-flex flex-row his-content">
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his11.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >拍刀</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his2.png"
            />
            <p class="list-word">赛车比赛</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his10.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >我的世界第一季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his15.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >侏罗纪公园</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his9.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >VR纪录片</text-view></div>
              </div>
          </div>
        </div>
        <div class="display-flex flex-row his-content" style="margin-bottom:100px;">
          <div class="his-list" :focusable="true" :focusScale="1.1" @click="openVideo">
            <img
              src="../../../static/img/history/his4.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >VR娱乐</text-view></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { getApp } from "@/util";
// import '/static/css/common.css'

export default {
  data() {
    return {};
  },
  mounted() {
    this.app = getApp();
    this.app.$on("hardwareBackPress", this.backPress);
  },
  methods: {
    backPress() {
      Vue.Native.callNative(
        "DeviceEventModule",
        "invokeDefaultBackPressHandler"
      );
    },
    openVideo() {
      let url = "/video/playPage";
      Vue.Native.callNative("MiniModule", "execute", {
        action: "__AC_NEW_TAB__",
        data: JSON.stringify({ url }),
      });
    },
    clickView() {
      console.log("hello");
    },
  },
};
</script>

<style scope>
.container2 {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  background-image: url("http://120.236.119.11:58011/ivod/jiangsuVR/img/home/bg3.png");
  background-repeat: no-repeat;
}
.head-name {
  width: 1920px;
  height: 130px;
  line-height: 130px;
  padding-left: 100px;
  background-color: rgba(45, 85, 112, 0.5);
}
.head-name img {
  display: inline-block;
  width: 46px;
  height: 46px;
  margin-top: 46.5px;
  margin-right: 15px;
}
.head-name .his-word {
  display: inline-block;
  color: #fff;
  font-size: 45px;
  line-height: 130px;
}
 #div-clumn {
    flex: 1;
    overflow-y: scroll;
    /* padding: 50px; */
    
  }
.page-loading {
  position: relative;
  width: 1920px;
  /* height: 7000px; */
  margin-top: 45px;
  /* background-color: rgba(0, 0, 0, 0.8); */
  /* overflow-y: scroll; */
}
.his-content {
  margin-left: 100px;
}
.his-list {
  width: 307.5px;
  height: 510px;
  margin-top: 30px;
  margin-right: 50px;
  border: 1px solid red;
}
.his-list img {
  width: 307.5px;
  height: 426px;
  border-radius: 7.5px;
}
.list-word {
  width: 307.5px;
  height: 84px;
  line-height: 84px;
  font-size: 40px;
  text-align: center;
  color: #fff;
}
.display-flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}
.view-box {
    width: 280px;
    padding: 10px;

  }
 .view-box .text-view {
    height: 50px;
    color: #fff;
  font-size: 40px;
  }
</style>
