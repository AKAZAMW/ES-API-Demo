<template>
  <div class="container2">
    <div class="head-name flex-row">
      <img
        src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/btn_icon1.png"
      />
      <p class="his-word">更多</p>
    </div>
    <!-- 历史加载区域 -->
    <div id="div-clumn" class="display-flex flex-column">
      <div class="page-loading">
        <div class="display-flex flex-row his-content">
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/86cb29c637e8b31839b8aec0c13d0432.png"
            />
            <p class="list-word">VR旅游</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/7d5d1e41c1b1fa6c839792529d7f3ce8.png"
            />
            <p class="list-word">赛车比赛</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/375c3dff13abffc62d590000502f0776.png"
            />
            <p class="list-word">动物园游园会</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/b48a08b19a979955e18d76288453d798.png"
            />
            <p class="list-word">VR娱乐</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/2aadddb877c4419369b921d81f1c8f13.png"
            />
            <p class="list-word">堡垒之夜第二季</p>
          </div>
        </div>
        <div class="display-flex flex-row his-content">
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/3052542b0d9c9f2c8f3c1c8a3b40ee09.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >刺激过山车第二季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/8a34afa198471df19f1e4ad220d7ed3d.png"
            />
            <p class="list-word">AKB48</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/5458240b3306b9b8e3b2b9aea42bd88e.jpg"
            />
            <p class="list-word">动物世界</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/38f0cd9807b1606fd5d4fe720e10a3d4.png"
            />
            <p class="list-word">VR纪录片</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/423d97d5214d262bb6d6348ba14128c4.png"
            />
            <p class="list-word">我的世界第一季</p>
          </div>
        </div>
        <div class="display-flex flex-row his-content">
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/3a47dbb67aba523700aa3a3b4ec90389.png"
            />
            <p class="list-word">拍刀</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/d95ae3bd7d8d2bba02a01575769398f0.png"
            />
            <p class="list-word">宠物美容院</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/98703ce9f03f26846228419f2c825977.png"
            />
            <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="3"  >刺激过山车第二季</text-view></div>
              </div>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/112a6455a234f1abc3e794a42c62cd86.png"
            />
            <p class="list-word">VR体育</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/ac9348097a44f201fe17c2bee5bc2f54.png"
            />
            <p class="list-word">侏罗纪公园</p>
          </div>
        </div>
        <div class="display-flex flex-row his-content" style="margin-bottom:100px;">
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/c265b0fc85d7871bd23ed699c13c0549.png"
            />
            <p class="list-word">堡垒之夜第一季</p>
          </div>
          <div class="his-list" :focusable="true" :focusScale="1.1">
            <img
              src="http://120.236.119.11:58011/uploads/images/884fec833129e6c1e06728cdcc92de9a.jpg"
            />
            <p class="list-word">过山车</p>
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
