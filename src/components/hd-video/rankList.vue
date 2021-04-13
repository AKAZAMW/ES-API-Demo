<template>
  <div class='container2'>
    <div>
      <div class="rank_header" :opacity="0.3"></div>
      <div style="flex-direction: row;margin-left: 40px;margin-top: 20px;height: 80px;">
        <img style="width: 36px;height: 36px;" src="../../../static/img/btn_icon2.png">
        <p style="font-size: 30px;color: white;margin-left: 10px;font-family: 'Microsoft YaHei';">排行榜</p>
      </div>
    </div>
    <div style="flex-direction: row;margin-left: 80px;" v-for="data in dataList">
<!--      <div v-for="d in data"  :focusable="true" :requestFocus="d.rankIndex===1" @focus="onFocus" @click="routeTo('/video/playPage')"  :index="d.rankIndex" :class="{rank_container:true,active:currentIndex===d.rankIndex}">-->
      <div v-for="d in data"  :focusable="true" :requestFocus="d.rankIndex===1" @focus="onFocus" :focusScale="1.1" @click="routeTo('/video/playPage')"  :index="d.rankIndex" :class="{rank_container:true}">
        <div class="rank_content">
          <div class="rank_rank">
            <img src="../../../static/img/rank_bg.png">
            <p style="font-size: 28px;color: white;margin-top:-46px;margin-left: 10px;">{{d.rankIndex}}</p>
          </div>
          <p class="rank_title">{{d.title}}</p>
        </div>
        <div class="rank_img">
          <img :src="d.url">
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import Vue from 'vue';
  import { getApp } from '@/util';
  export default {
    data() {
      return {
        dataList: [],
        currentIndex:1,
      };
    },
    mounted() {
      this.app = getApp();
      this.app.$on('hardwareBackPress', this.backPress);
      this.init();
    },
    methods: {
      backPress() {
        Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
      },
      init() {
        const data = [
          {'title': '侏罗纪世界进化', 'url': 'http://182.106.142.31:8090/uploads/images/1bf09ba2d9bb0ff50c9e1afd68829b59.png','rankIndex':1},
          {'title': '马尔代夫', 'url': 'http://182.106.142.31:8090/uploads/images/f1bd3708fe04da3f8bb88b223b27d56c.png','rankIndex':2},
          {'title': '下一站风景更好', 'url': 'http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg','rankIndex':3},
          {'title': '超级过山车', 'url': 'http://182.106.142.31:8090/uploads/images/eca88577bf5bea5761608b301020734b.png','rankIndex':4},
          {'title': '城市风光', 'url': 'http://182.106.142.31:8090/uploads/images/fce6d0d0dfd50c18eb733989204d40a3.jpg','rankIndex':5},
          {'title': '毛里求斯_休闲篇', 'url': 'http://182.106.142.31:8090/uploads/images/28bead1e8a3b9ee6f7c5ed8fe37d219e.png','rankIndex':6},
        ];

        for(let i=0; i<data.length; ) {
          if((i+1)<data.length) {
            this.dataList.push([data[i],data[i+1]]);
          } else {
            this.dataList.push([data[i]]);
          }
          i+=2;
        }
      },
      onFocus(e) {
        if(e.isFocused) {
          this.currentIndex = e.target.attributes.index;
        }
      },
      routeTo(url) {
        Vue.Native.callNative('MiniModule', 'execute', { action: '__AC_NEW_TAB__', data: JSON.stringify({ url }) });
      },
    },
  };
</script>
<style>
  .rank_header {
    width: 1920px;
    height: 80px;
    background-color: #A492BF;
    position: absolute;
  }
  .rank_container {
    width: 584px;
    height: 292px;
    display: flex;
  }

  .rank_container.active {
    background-image: url("http://120.236.119.11:58011/ivod/jiangsuVR/img/selected/rank.png");
  }

  .rank_container .rank_img {
    width: 162px;
    height: 226px;
    margin-top:26px;
    margin-left: 56px;
    border-radius: 5px;
    /*border-color: red;*/
    /*border-width: 2px;*/
  }

  .rank_container .rank_img img{
    width: 162px;
    height: 226px;
  }

  .rank_container .rank_content{
    width: 534px;
    height: 192px;
    position: absolute;
    margin-top:78px;
    margin-left: 28px;
    border-radius: 2px;
    background-color: #5344A6;
  }
  .rank_container .rank_title{
    font-size: 30px;
    color: white;
    margin-top: 20px;
    margin-left: 220px;
  }
  .rank_container .rank_rank{
    width: 36px;
    height: 45px;
    position: absolute;
    margin-left: 480px;
  }

  .rank_container .rank_rank img {
    width: 36px;
    height: 45px;
  }
</style>
