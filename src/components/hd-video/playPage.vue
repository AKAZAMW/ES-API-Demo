<template>
  <div class='container2'>
    <!-- 视频组件 -->
    <div style="flex-direction: row;">
      <div class="video-wrap">
        <video-view class='video' :src="videoUrl" ref="video" :autoPlay="true" :controls="true" :progressUpdateInterval=1000
                    :controlStyle="{colors:['#00000000', '#000000']}"
                    :seekStyle="{seekBackgroundColor:'#50FFFFFF', seekProgressColor:'#ff6f2e', seekRadius:5.0, seekHeight:5, seekThumbSize:20, seekThumbColor:'#ffffff'}"
                    @video-load='onVideoLoaded' @video-buffer-start='onVideoBufferStart' @video-buffer-end="onVideoBufferEnd" @video-play="onVideoPlay"
                    @video-pause="onVideoPause" @video-progress-change="onVideoProgressChange"/>
        <div v-show="videoLoading" class="loading">
          <loading-view class="loading-icon" color="#ff6f2e"></loading-view>
        </div>
      </div>
      <div style="margin-top:60px;margin-left: 30px;">
        <div>
          <p style="font-size: 24px;color: white">动物视界</p>
          <p style="font-size: 16px;line-height:26px;font-family: 'Microsoft YaHei';color: white;width: 500px;">
一千个人眼中有一千个哈姆雷特。
一千种动物眼中也有一千个不一样的世界。
世界之大，无奇不有！你感兴趣的都在这里。
让我们一起来探索动物世界的奥秘吧...
          </p>
        </div>
        <div :focusable=true :focusScale="1.1" @click="play" style="background-color: #6E4FF1;width: 130px;height: 60px;position: absolute;top:600px;">
          <div style="margin-left: 20px;margin-top: 10px;flex-direction: row;">
            <img v-if="playBtnFlag" style="width: 37px;height: 38px;" src="http://120.236.119.11:58011/ivod/jiangsuVR/img/detail/play_btn.png">
            <img v-if="!playBtnFlag" style="width: 37px;height: 38px;" src="http://120.236.119.11:58011/ivod/jiangsuVR/img/play/pause.png">
            <p style="font-size: 20px;color: white;margin-left: 10px;margin-top: 5px;">{{playPauseText}}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 80px;">
      <p style="font-size: 24px;color: white;margin-top: 20px;">剧集列表</p>
      <div style="flex-direction: row;margin-top: 20px;">
        <div v-for="(url,index) in videoList" :class="{video_item:true,active:currentVideoIndex===index}"  :focusable=true :focusScale="1.2" @click="playVideo(url, index)"><p style="font-size: 30px;color: white;">{{index+1}}</p></div>
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
        playPauseText: '暂停',
        playBtnFlag:false,
        videoLoading: true,
        currentVideoIndex:0,
        videoUrl:'https://vdn.vzuu.com/HD/v3_d741bdc6-6fa3-11e9-a17e-0a580a44df77.mp4?disable_local_cache=1&auth_key=1618279660-0-0-e969a072f1fcf8c441318c2c5dca8109&f=mp4&bu=http-com&expiration=1618279660&v=ali',
        videoList:['https://vdn.vzuu.com/HD/v3_d741bdc6-6fa3-11e9-a17e-0a580a44df77.mp4?disable_local_cache=1&auth_key=1618279660-0-0-e969a072f1fcf8c441318c2c5dca8109&f=mp4&bu=http-com&expiration=1618279660&v=ali',
          'https://vdn.vzuu.com/HD/b6194bd4-d521-11ea-bb7e-a6ee87533986.mp4?disable_local_cache=1&auth_key=1618281403-0-0-5f11366f8013094178e8b2268e9b663e&f=mp4&bu=http-com&expiration=1618281403&v=ali',
          'https://vdn.vzuu.com/HD/e7dca95c-8f3e-11e8-8d8e-0242ac112a1b.mp4?disable_local_cache=1&auth_key=1618281530-0-0-bccc07a44b202a293818247a39af8e03&f=mp4&bu=http-com&expiration=1618281530&v=ali',
          'https://vdn.vzuu.com/HD/310b3bc4-d4f0-11e8-a75a-0242ac112a07.mp4?disable_local_cache=1&auth_key=1618281823-0-0-268074ccaeb006d73fa5d3297e36d634&f=mp4&bu=http-com&expiration=1618281823&v=ali',
        ]
      };
    },
    mounted() {
      this.app = getApp();
      this.app.$on('hardwareBackPress', this.backPress);
    },
    methods: {
      backPress() {
        Vue.Native.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
      },
      playVideo(url,index){
        if(this.currentVideoIndex !== index) {
          this.playPauseText = '暂停';
          this.playBtnFlag = false;
          this.videoLoading = true;
          this.videoUrl = url;
          this.currentVideoIndex = index;
        }
      },
      play() {
        this.$refs.video.playOrPause();
        this.updateStateText();
      },
      updateStateText(){
        setTimeout(()=>{
          this.$refs.video.isPlay(play=>{
            console.log('isplay', play)
            this.playPauseText = play? '暂停' : '播放';
            this.playBtnFlag=!play;
          })
        }, 100)
      },

      onVideoLoaded(){
        this.hideLoading()
        console.log('加载成功...');
      },

      onVideoPlay(){
        this.hideLoading()
        console.log('播放...');
      },

      onVideoPause(){
        console.log('暂停...');
      },

      onVideoProgressChange(e){
        console.log('aaaa', e);
        console.log('onVideoProgressChange position:' + e.position + ', duration:' + e.duration);
      },

      onVideoBufferStart(){
        this.showLoading()
        console.log('开始缓冲...');
      },

      onVideoBufferEnd(){
        this.hideLoading()
        console.log('结束缓冲...');
      },

      showLoading(){
        this.videoLoading = true;
      },

      hideLoading(){
        this.videoLoading = false;
      }
    },
  };
</script>

<style scoped>

  .videoContainer2 {
    width: 1920px;
    height:1080px;
    display:flex;
  }
  .container2 .video-wrap {
    width:1200px;
    height:675px;
    background-color: black;
    margin-top: 50px;
    margin-left: 80px;
    border-color: white;
  }
  .container2 .video {
    width:1200px;
    height:675px;
  }
  .container2 .loading {
    position: absolute;
    width:1200px;
    height:675px;
    display:flex;
    justify-content:center;
    align-items: center;
  }
  .container2 .loading .loading-icon{
    position: absolute;
    width:100px;
    height:100px;
  }
  .videoContainer2 .video-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .container2 .state-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .container2 .state-info p {
    font-size: 15px;
    color: #fff;
  }
  .container2 .button p {
    color: #000;
  }

  .container2 .video_item {
    width: 80px;
    height: 40px;
    background-color: #4c9afa;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
  .container2 .video_item.active {
    transform: scale(1.2);
  }
</style>
