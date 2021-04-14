<template>
  <div class='container2'>
    <!-- 视频组件 -->
    <div style="flex-direction: row;">
      <div class="video-wrap">
        <video-view class='video' :src="videoUrl" ref="video" :autoPlay="true" :controls="true" :progressUpdateInterval=1000
                    :controlStyle="{colors:['#00000000', '#000000']}"
                    :seekStyle="{seekBackgroundColor:'#50FFFFFF', seekProgressColor:'#ff6f2e', seekRadius:5.0, seekHeight:5, seekThumbSize:20, seekThumbColor:'#ffffff'}"
                    @video-load='onVideoLoaded' @video-buffer-start='onVideoBufferStart' @video-buffer-end="onVideoBufferEnd" @video-play="onVideoPlay"
                    @video-pause="onVideoPause" @video-progress-change="onVideoProgressChange"
                    @video-end="onVideoEnd"/>
        <div class="barrage">
          <p v-if="barrageOpenFlag" v-for="data in barrageData" :style="{left:data.left,top:data.top}">{{data.text}}</p>
        </div>
        <div v-show="videoLoading" class="loading">
          <loading-view class="loading-icon" color="#ff6f2e"></loading-view>
        </div>

      </div>
      <div style="margin-top:60px;margin-left: 30px;">
        <div>
          <p ref="test" style="font-size: 30px;color: white;">动物视界</p>
          <p style="font-size: 24px;line-height:32px;font-family: 'Microsoft YaHei';color: white;width: 500px;">
一千个人眼中有一千个哈姆雷特
一千种动物眼中也有一千个不一样的世界
世界之大，无奇不有！你感兴趣的都在这里
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
        <div :focusable=true :focusScale="1.1" @click="barrageClick" style="background-color: #6E4FF1;width: 120px;height: 60px;position: absolute;top:600px;left:160px;">
          <div style="margin-left: 10px;margin-top: 10px;flex-direction: row;">
            <p style="font-size: 20px;color: white;margin-left: 10px;margin-top: 5px;">{{barrageOpenFlag?'关闭弹幕':'打开弹幕'}}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 80px;">
      <p style="font-size: 24px;color: white;margin-top: 20px;">剧集列表</p>
      <ul style="flex-direction: row;margin-top: 20px;" horizontal>
        <li v-for="(url,index) in videoList"  :focusable=true :focusScale="1.2" @click="playVideo(url, index)" style="float:left;">
          <div class="video_item"><p style="font-size: 30px;color: white;">{{index+1}}</p></div>
        </li>
      </ul>
    </div>
  </div>

</template>


<script>
  import Vue from 'vue';
  import { getApp } from '@/util';
  export default {
    data() {
      return {
        pLeft: 100,
        barrageData: [],
        barrageSpeed: [1, 1.2, 1.5, 2],
        trajectory: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        barrageOpenFlag: true,
        barrageInterval: 0,
        playPauseText: '暂停',
        playBtnFlag: false,
        videoLoading: true,
        currentVideoIndex:0,
        videoUrl:'https://vd3.bdstatic.com/mda-jf8u3ypduredhch1/sc/mda-jf8u3ypduredhch1.mp4?v_from_s=nj_haokan_4469&auth_key=1618285987-0-0-1d81ba2e0b92401c5310bee58759c259&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
        videoList:[
          'https://vd3.bdstatic.com/mda-jf8u3ypduredhch1/sc/mda-jf8u3ypduredhch1.mp4?v_from_s=nj_haokan_4469&auth_key=1618285987-0-0-1d81ba2e0b92401c5310bee58759c259&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-kd1y7cctqu28wcrx/sc/mda-kd1y7cctqu28wcrx.mp4?v_from_s=nj_haokan_4469&auth_key=1618285986-0-0-633474a5155ca479663fceeb1cfbe3f2&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-kh0pugd4siga71x5/cae_h264_clips/mda-kh0pugd4siga71x5.mp4?auth_key=1618285983-0-0-23db17fbb3d46f34da6a6f63fae79d5c&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-kkigetd72bmfgvks/sc/cae_h264_clips/1605758524/mda-kkigetd72bmfgvks.mp4?auth_key=1618285978-0-0-4ee924f07afb19a7335d94eb5452f150&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-kcw6z1adci8ca6i5/sc/mda-kcw6z1adci8ca6i5.mp4?v_from_s=nj_haokan_4469&auth_key=1618285975-0-0-3b7f7528b8248eff7c0f5724e54f8950&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-kadnyjfdfmrxmqmc/sc/mda-kadnyjfdfmrxmqmc.mp4?v_from_s=nj_haokan_4469&auth_key=1618285972-0-0-5fee2659405a6b9134dd5a1aaa2b9042&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-ma6mpx9fys57buye/v1-cae/sc/mda-ma6mpx9fys57buye.mp4?v_from_s=nj_haokan_4469&auth_key=1618285966-0-0-a6c7eda735b040dda914311754d0540f&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-macnxgupu2urng8t/v1-cae/sc/mda-macnxgupu2urng8t.mp4?v_from_s=nj_haokan_4469&auth_key=1618285963-0-0-f14d4403ad1a96eefe15e11fc7887bf7&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-kaduxr1qnqcmeu0m/v1-cae/sc/mda-kaduxr1qnqcmeu0m.mp4?v_from_s=nj_haokan_4469&auth_key=1618285356-0-0-219ac591b174e2708a3d6926413f77da&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
          'https://vd2.bdstatic.com/mda-mc3itznxf9qmxd6c/v1-cae/sc/mda-mc3itznxf9qmxd6c.mp4?v_from_s=nj_haokan_4469&auth_key=1618285961-0-0-82d529f917ee4dc1a25664588e48882a&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
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
      playVideo(url, index){
        if(this.currentVideoIndex !== index) {
          this.closeBarrage();
          this.$refs.video.stop();
          this.showLoading();
          this.playPauseText = '暂停';
          this.playBtnFlag = false;
          this.videoLoading = true;
          this.videoUrl = url;
          this.currentVideoIndex = index;
        }
      },
      barrageClick() {
        this.barrageOpenFlag = !this.barrageOpenFlag;
      },
      barrageBuilder() {
        this.barrageOpenFlag = true;
        var _this = this;
        clearInterval(this.barrageInterval);
        this.barrageInterval = setInterval(function() {
          if(!_this.playBtnFlag) {
          if (_this.barrageData.length < 10) {
            //当前弹幕不足10条尝试增加弹幕
            if (Math.random() > 0.9) {
              //十分之一的概率产生弹幕
              const index = Math.floor((Math.random() * _this.trajectory.length));
              const val = _this.trajectory.splice(index, 1);
              console.log('index==' + index)
              console.log('val==' + val)
              _this.barrageData.push({
                text: Math.floor((Math.random() * 50)),
                left: 1200,
                top: val * 70,
                trajectory: val,
                speed: _this.barrageSpeed[(Math.floor((Math.random() * _this.barrageSpeed.length)))],
              });
            }
          }
          console.log(_this.barrageData)
          _this.barrageData.forEach(function (d) {
            d.left -= d.speed * 5;
          });
          _this.barrageData = _this.barrageData.filter(function (d) {
            if (d.left <= -100) {
              _this.trajectory.push(d.trajectory);
            }
            return d.left > -100;
          });
        }
        }, 50);
      },
      closeBarrage() {
        this.barrageOpenFlag = false;
        clearInterval(this.barrageInterval);
        this.trajectory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.barrageData = [];
      },
      random(start, end) {
        return Math.floor(Math.random() * (end + 1 - start) + start);
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
        this.barrageBuilder();
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
      onVideoEnd(e) {
        this.closeBarrage();
        var nextIndex = this.currentVideoIndex + 1;
        if(nextIndex === this.videoList.length) {
          nextIndex = 0;
        }
        this.playVideo(this.videoList[nextIndex], nextIndex);
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

  .barrage{
    position: absolute;
    width:1200px;
    height:675px;
    border-width: 2px;
  }

  .barrage p {
    color: white;
    font-size: 30px;
    position: absolute;
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
