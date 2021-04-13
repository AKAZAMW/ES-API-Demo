<template>
  <div class="container2">
    <div v-if="showGuide">
      <img class="guide"  src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/help2.jpg"/>
      <div class="feedback" :focusable="true" :focusScale="1.1" @click="changeShowGuide">
        <img style="width: 200px;height: 80px;" src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/feedback_selected.png"/>
      </div>
    </div>
    <div v-if="!showGuide" class="report">
      <p class="report_title">故障上报</p>
      <div class="report_back">
        <div style="height: 85px;flex-direction: row;">
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true" :requestFocus="true" @click="report_1_select=!report_1_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_1_select }"></div>
              <span :duplicateParentState="true" class="report_content">视频无画面</span>
            </div>
          </div>
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true"  @click="report_2_select=!report_2_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_2_select }"></div>
              <span :duplicateParentState="true" class="report_content">视频清晰度低</span>
            </div>
          </div>
        </div>
        <div style="height: 85px;flex-direction: row;">
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true"  @click="report_3_select=!report_3_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_3_select }"></div>
              <span :duplicateParentState="true" class="report_content">视频无法播放或卡顿</span>
            </div>
          </div>
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true"  @click="report_4_select=!report_4_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_4_select }"></div>
              <span :duplicateParentState="true" class="report_content">遥控器无法旋转视角</span>
            </div>
          </div>
        </div>
        <div style="height: 85px;flex-direction: row;">
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true"  @click="report_5_select=!report_5_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_5_select }"></div>
              <span :duplicateParentState="true" class="report_content">视频播放无法快进快退</span>
            </div>
          </div>
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true"  @click="report_6_select=!report_6_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_6_select }"></div>
              <span :duplicateParentState="true" class="report_content">直播无法播放或卡顿</span>
            </div>
          </div>
        </div>
        <div style="height: 85px;flex-direction: row;">
          <div style="margin-top:20px;width: 460px;">
            <div :focusable="true"  @click="report_7_select=!report_7_select">
              <div :duplicateParentState="true" :class="{report_icon:true, report_selected: report_7_select }"></div>
              <span :duplicateParentState="true" class="report_content">其他</span>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-left: 500px;margin-top: 60px;">
        <input :focusable="true" v-model="phoneNum" style="color: white;width: 920px;height: 60px;font-size: 36px;border-radius: 10px;background-color: #6343A1;" placeholder="请输入手机号码" >
      </div>
      <div style="width: 1920px;text-align: center;">
        <button :focusable="true" class="report_button" :focusScale="1.1"  @click="submit">
          <span style="line-height: 56px;text-align: center;font-size:32px;color: #FFFFFF;">确认</span>
        </button>
      </div>
    </div>
    <div v-if="showReportRadisFlag" style="position: absolute;left:860px;top:400px;background-color: #FEF0F0;padding: 10px;border-radius: 10px;">
      <p style="line-height: 70px;color: red;font-size: 24px;">{{errorMsg}}</p>
    </div>
    <div v-if="showReportSuccessFlag" style="position: absolute;left:580px;top:200px;">
      <img style="width: 760px;height: 560px;" src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/success.png">
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
        showReportRadisFlag:false,//选择反馈信息
        showReportSuccessFlag:false,//上报成功
        phoneNum:'',//上报成功
        errorMsg:'',//错误信息
        report_1_select:false,
        report_2_select:false,
        report_3_select:false,
        report_4_select:false,
        report_5_select:false,
        report_6_select:false,
        report_7_select:false,
      };
    },
    mounted() {
      this.showGuide = true;
      this.app = getApp();
      this.app.$on('hardwareBackPress', this.backPress);
    },
    methods: {
      backPress() {
        if(this.showGuide) {
          Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
        } else {
          this.showGuide = true;
        }
      },
      changeShowGuide() {
        this.showGuide = !this.showGuide;
      },
      submit() {
        if(!this.report_1_select&&!this.report_2_select&&!this.report_3_select&&!this.report_4_select
          &&!this.report_5_select&&!this.report_6_select&&!this.report_7_select) {
          this.msgAlert('请选择反馈信息！');
          return false;
        }

        if(!this.phoneNum) {
          this.msgAlert('请输入手机号！');
          return false;
        }

        if(!/\d{11}/.test(this.phoneNum)) {
          this.msgAlert('手机号错误！');
          return false;
        }
        this.showReportSuccessFlag=true;
        var _this = this;
        setTimeout(function () {
          _this.routeTo('/video/feedback');
        }, 3000);
      },
      msgAlert(msg) {
        var _this = this;
        this.errorMsg = msg;
        this.showReportRadisFlag = true;
        setTimeout(function () {
          _this.showReportRadisFlag = false;
        }, 3000);
      },
      routeTo(url) {
        Vue.Native.callNative('MiniModule', 'execute', { action: '__AC_NEW_TAB__', data: JSON.stringify({ url }) });
      },
    }
  }
</script>

<style>
  .container2 .report{

  }
  .container2 .report .report_title{
    line-height: 70px;
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    margin-top: 60px;
    font-family: 'Microsoft YaHei UI';
    color: #FFFFFF;
  }

  .container2 .report_back{
    /*position: absolute;*/
    width: 920px;
    height: 340px;
    padding-left: 32px;
    margin-top: 60px;
    margin-left: 500px;
    background-image: url("http://120.236.119.11:58011/ivod/jiangsuVR/img/home/feedback_model.png");
    background-size: 100% 100%;
  }

  .report_back .report_icon {
    width: 30px;
    height: 30px;
    margin-top: 6px;
    border-width: 2px;border-radius: 15px;border-color: white;
    focus-background-color: yellow;
  }

  .report_back .report_icon.report_selected {
    background-color: yellow;
  }

  .report_back .report_icon img{
    width: 28px;
    height: 28px;
    position: absolute;
  }
  .report_back .report_content {
    position: absolute;
    margin-left: 40px;
    font-size: 27px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    color: #FFFFFF;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    focus-color:#7AFF2F;
  }
  .report_button {
    height: 64px;
    width: 240px;
    border-width: 2px;
    border-radius: 10px;
    align-items: center;
    background-color: #7A48EF;
    margin-top: 60px;
    margin-left: 840px;
  }
</style>
