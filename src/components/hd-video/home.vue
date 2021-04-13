<template>
  <div class="contain">
    <div class="head" :gradientBackground="gradientBackground">
      <div class="nav-left">
        <img :src="imgSrc" class="logoimg" />
      </div>
      <div class="nav-right" :focusable="false">
        <div class="li-1 rank current same" :focusable="true" :focusScale="1.1">
          <img
            class="selected"
            src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/rank_no_selected.png"
          />
        </div>
        <div class="li-1 history same" :focusable="true" :focusScale="1.1" @click="routerToHistory">
          <img 
            class="selected"
            src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/history_no_select.png"
            alt=""
          />
        </div>
        <div class="li-1 help same" :focusable="true" :focusScale="1.1">
          <img
            class="selected"
            src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/help_no_selected.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="content-hide">
      <!-- 左侧栏 -->
      <div class="tab">
        <div class="view">
          <ul class="tab-list" style="height: 475px">
            <li
              class="li-3"
              :focusable="true"
              :focusScale="1.01"
              @focus="onChildFocus(1)"
            >
              <img
                class="default"
                src="http://120.236.119.11:58011/uploads/images/b75526f5b72dc01ed7cf47d16d94c16e.png"
              />
              <img
                class="selected"
                :src="selected"
                v-show="isShowBg == 1 ? true : false"
              />
              <div class="name">
                <p class="word">娱乐</p>
              </div>
            </li>
            <li
              class="li-3"
              :focusable="true"
              :focusScale="1.01"
              @focus="onChildFocus(2)"
            >
              <img
                class="default"
                src="http://120.236.119.11:58011/uploads/images/77e77845a419585f5320bb3a4ad19fd3.png"
              />
              <img
                class="selected"
                :src="selected"
                v-show="isShowBg == 2 ? true : false"
              />
              <div class="name">
                <p class="word">萌宠</p>
              </div>
            </li>
            <li
              class="li-3"
              :focusable="true"
              :focusScale="1.01"
              @focus="onChildFocus(3)"
            >
              <img
                class="default"
                src="http://120.236.119.11:58011/uploads/images/516ffaeea16f5ca8021727d158be7d3e.png"
              />
              <img
                class="selected"
                :src="selected"
                v-show="isShowBg == 3 ? true : false"
              />
              <div class="name">
                <p class="word">运动</p>
              </div>
            </li>
            <li
              class="li-3"
              :focusable="true"
              :focusScale="1.01"
              @focus="onChildFocus(4)"
            >
              <img
                class="default"
                src="http://120.236.119.11:58011/uploads/images/95a72f82713f5146926321b1e1677e82.png"
              />
              <img
                class="selected"
                :src="selected"
                v-show="isShowBg == 4 ? true : false"
              />
              <div class="name">
                <p class="word">旅游</p>
              </div>
            </li>
            <li
              class="li-3"
              :focusable="true"
              :focusScale="1.01"
              @focus="onChildFocus(5)"
            >
              <img
                class="default"
                src="http://120.236.119.11:58011/uploads/images/e215b2ec98856fe05f75ab78fdf3af39.png"
              />
              <img
                class="selected"
                :src="selected"
                v-show="isShowBg == 5 ? true : false"
              />
              <div class="name">
                <p class="word">天翼VR</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div id="home-clumn" class="display-flex flex-column">
      <div class="content-list">
        <div class="section display-flex flex-row">
          <div class="list focus-area" :focusable="true" :focusScale="1.1">
            <div class="img">
              <img :src="swiperUrl" class="default" />
            </div>
            <div class="swiper-dot dispaly-flex flex-row">
              <p class="dot" :class="[isActive == 0 ? 'active' : '']"></p>
              <p class="dot" :class="[isActive == 1 ? 'active' : '']"></p>
              <p class="dot" :class="[isActive == 2 ? 'active' : '']"></p>
            </div>
          </div>
          <div class="list focus-area" :focusable="true" :focusScale="1.01">
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/cef4b292d21d348d29af82ccd0060186.png"
                class="default"
              />
              <!-- <img src="../img/selected/recommend_big.png" class="selected"/> -->
            </div>
          </div>
          <div class="list focus-area" :focusable="true" :focusScale="1.01">
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/fb0255eca9c5689602b7ce921c3f048e.png"
                class="default"
              />
              <!-- <img src="../img/selected/recommend_big.png" class="selected"/> -->
            </div>
          </div>
        </div>

        <!-- 竖排图片1 -->
        <div class="section display-flex flex-row">
            <div  v-for="(item ,i) in recmondList" :key="i"
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.005"
            @focus="foncusOnImgBg(i)"
          >
         <div class="list-rank" v-if="item.level!=''">
              <p class="rank-work">{{item.level}}</p>
         </div>
          <div class="list-label" >
              <img :src="item.icon" v-if="item.icon!=''"/>
            </div>  
            <div class="img">
              <img
                :src="item.url"
                class="default"
              />
              <img :src="imgBgColor" class="seleted-img" v-if="isImgSelect==i">
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >{{item.name}}</text-view
                >
              </div>
            </div>
          </div>
        
        </div>
        <!-- 竖排图片2  娱乐-->
        <p class="home-section-name">娱乐</p>
        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/2833a30bf4aeb53932da4004bb7a9f2f.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/5d9e2377180df5fa38ed1e197f9816ae.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/b56d6c7d0940e79913a28986feb3e03c.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/74fb730998e2ae25d6cf64a87013915b.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png"
                class="default"
              />
            </div>
            <!-- <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="2"  >忠实可靠的绅士柴犬</text-view></div>
              </div> -->
          </div>
        </div>

        <!-- 竖排图片3  萌宠-->
        <p class="home-section-name">萌宠</p>
        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/38832c7d95d993ef6d6dba76fec99ec1.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/396e3cb72b373b624d99b9fcd7c0ba6f.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/6d2dcd971ad44b02040d66eb8c8f4e24.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/dbcb643ab9c00717ef5306dbf89a2941.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png"
                class="default"
              />
            </div>
            <!-- <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="2"  >忠实可靠的绅士柴犬</text-view></div>
              </div> -->
          </div>
        </div>

        <!-- 竖排图片4  运动-->
        <p class="home-section-name">运动</p>
        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/e599d8977875a038ffa31085f4886ecf.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png"
                class="default"
              />
            </div>
            <!-- <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="2"  >忠实可靠的绅士柴犬</text-view></div>
              </div> -->
          </div>
        </div>

        <!-- 竖排图片5  旅游-->
        <p class="home-section-name">旅游</p>
        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/d863acab94440edc5e450e700189fb3d.jpg"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/352af22ffacb33f0cedb0cdff3323b8b.jpg"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/0b520b38484a478171379ba319f130d7.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/b5bd21315b6ffb5fd85540b540e683d9.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png"
                class="default"
              />
            </div>
            <!-- <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="2"  >忠实可靠的绅士柴犬</text-view></div>
              </div> -->
          </div>
        </div>

        <!-- 竖排图片6  天翼VR-->
        <p class="home-section-name">天翼VR</p>
        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/38743d477d639d8dfb7dc446a12b52c8.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/77e661177ee3e4873b893144c1ddd2a5.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/7630d601056981e1776f89cca00d5994.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/uploads/images/3bf7cdd3a26c275fe0a43dc8031d9b78.png"
                class="default"
              />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的绅士柴犬</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
          >
            <div class="img">
              <img
                src="http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png"
                class="default"
              />
            </div>
            <!-- <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="2"  ></text-view></div>
              </div> -->
          </div>
        </div>
        <div class="section display-flex flex-row">
              <div class="home-bottom focus-area" :focusable="true"
            :focusScale="1.02">
      <p class="botom-word">我是有底线的~按我返回顶部</p>
    </div>
        </div>
      </div>
      <p class="home-section-name" style="margin-bottom:550px;">天翼VR</p>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import { getApp } from "../../util";
import imgSrc from "../../../static/img/logo.png";
import slide1 from "../../../static/img/yule.png";
import selected from "../../../static/img/home_selected.png";
export default {
  data() {
    return {
      isShowBg: 1,
      imgSrc: imgSrc,
      slide1: slide1,
      selected: selected,
      isActive: 0,
      recmondList:[
        {
          level:"Top1",
          url:"http://120.236.119.11:58011/uploads/images/62473806fcfb449f6aba83fdc5653cc9.png",
          name:"直播！大熊猫吃播"
        },
        {
          level:"Top2",
          url:"http://120.236.119.11:58011/uploads/images/6afd6f751ffed845e1b305687c4dba7b.png",
          name:"AKB48 我们不战斗"
        },
        {
          level:"Top3",
          url:"http://120.236.119.11:58011/uploads/images/0ff0018702ee41fe0e6394ba32b7f0ae.png",
          name:"堡垒之夜激斗"
        },
        {
          level:"",
          url:"http://120.236.119.11:58011/uploads/images/dbcb643ab9c00717ef5306dbf89a2941.png",
          icon:"http://120.236.119.11:58011/ivod/jiangsuVR/img/home/recommend.png",
          name:"我的世界逃离"
        },
        {
          level:"",
          icon:"http://120.236.119.11:58011/ivod/jiangsuVR/img/home/hot.png",
          url:"http://120.236.119.11:58011/uploads/images/8a3c8c8d44f6f4dca81dc8a11899be8f.png",
          name:"忠诚可靠的绅士柴犬"
        },
      ],
      imgBgColor:"http://120.236.119.11:58011/ivod/jiangsuVR/img/selected/recommend_big.png",
      isImgSelect:null,
      swiperUrl:
        "http://120.236.119.11:58011/uploads/images/c7e55a1ba3835f2f142c722b901020c1.png",
      gradientBackground: {
        type: 0,
        shape: 0,
        colors: ["#1b162f00", "#51179f88"],
        cornerRadii4: [0, 0, 0, 0.5],
      },
    };
  },
  methods: {
    backPress() {
      Vue.Native.callNative(
        "DeviceEventModule",
        "invokeDefaultBackPressHandler"
      );
    },
    onChildFocus(index) {
      this.isShowBg = index;
      console.log("获取焦点啦");
    },
    foncusOnImgBg(i){
      console.log("li",i)
      this.isImgSelect=i;
    },
    //跳转到观看历史
    routerToHistory(){
      // console.log("hello ligen")
      let url="/video/history";
      Vue.Native.callNative('MiniModule', 'execute', { action: '__AC_NEW_TAB__', data: JSON.stringify({ url }) });
    }
  },
  mounted() {
    this.app = getApp();
    this.app.$on("hardwareBackPress", this.backPress);
    let imgArr = [
      "http://120.236.119.11:58011/uploads/images/c7e55a1ba3835f2f142c722b901020c1.png",
      "http://120.236.119.11:58011/uploads/images/88aaa7a8380a1f518801d39705abe079.png",
      "http://120.236.119.11:58011/uploads/images/808ad661886d8b87b1193a9d200a234a.jpg",
    ];
    var _this = this;
    var index = 0;
    setInterval(function () {
      index++;
      if (index == 3) {
        index = 0;
        _this.isActive = index;
        _this.swiperUrl = imgArr[index];
      } else {
        _this.isActive = index;
        _this.swiperUrl = imgArr[index];
      }
    }, 3000);
  },
};
</script>

<style scope>
.contain {
  color: #ffffff;
  width: 1920px;
  height: 1080px;
  background-image: url("http://120.236.119.11:58011/ivod/jiangsuVR/img/home/bg3.png");
  background-size: 100% 100%;
  background-repeat: repeat-y;
  position: absolute;
  overflow: hidden;
}
.head {
  position: relative;
  height: 135px;
  background-image: linear-gradient(
    181deg,
    rgba(27, 22, 47, 0.47),
    rgba(81, 23, 159, 0.47)
  );
  background-image: -moz-linear-gradient(
    181deg,
    rgba(27, 22, 47, 0.47),
    rgba(81, 23, 159, 0.47)
  );
  background-image: -webkit-linear-gradient(
    181deg,
    rgba(27, 22, 47, 0.47),
    rgba(81, 23, 159, 0.47)
  );
  background-image: -o-linear-gradient(
    181deg,
    rgba(27, 22, 47, 0.47),
    rgba(81, 23, 159, 0.47)
  );
}
.nav-left {
  position: absolute;
  width: 495px;
  height: 54px;
  top: 37px;
  left: 37px;
}
.logoimg {
  width: 495px;
  height: 54px;
}
.nav-right {
  position: absolute;
  width: 420px;
  height: 75px;
  right: 10px;
}
.nav-right .rank,
.nav-right .history,
.nav-right .help {
  position: absolute;
  width: 202px;
  height: 60px;
  /* border-radius: 25px; */
  top: 50px;
  right: 430px;
}

.nav-right .history {
  right: 200px;
}

.nav-right .help {
  width: 150px;
  right: 25px;
}

.rank img,
.history img,
.help img {
  position: absolute;
}

.rank .selected,
.history .selected {
  /* top: -12px; */
  /* left: -14px; */
  position: absolute;
  width: 202px;
  height: 60px;
}

.help .selected {
  width: 150px;
  height: 60px;
  /* top: -10px;
  left: -14px; */
}

/* 左侧栏目 */
.tab {
  position: absolute;
  top: 20px;
  height: 945px;
  width: 196px;
  overflow: hidden;
  z-index: 9966;
  /* background-color: #000000; */
}
.tab .view {
  position: relative;
  width: 196px;
  height: 900px;
}
.tab-list {
  padding: 25px 0;
  position: relative;
  color: white;
  height: 900px;
  width: 196px;
  overflow: hidden;
  left: 20px;
}
.tab-list li {
  float: none;
  position: relative;
  text-align: center;
  height: 142px;
}
.tab-list li img {
  width: 52px;
  height: 52px;
  top: 25px;
  text-align: center;
  position: absolute;
  transform: translate(-50%);
  -ms-transform: translate(-50%);
  -moz-transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -o-transform: translate(-50%);
}
.tab-list li .default {
  left: 45px;
}
.tab-list li .selected {
  top: 0px;
  height: 135px;
  width: 135px;
  border-radius: 4px;
  z-index: -1;
}
.tab-list li .name {
  position: relative;
  top: 85px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.word {
  /* height: 36px;
  line-height: 36px; */
  width: 135px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}
#home-clumn {
  flex: 1;
  overflow-y: scroll;
}
/* 内容区域 */
.content-list {
  position: relative;
  margin-left: 196px;
  margin-top: 20px;
  width: 1780px;
  /* position: absolute; */
  /* top: 0px; */
  /* height: 1000px; */
  /* overflow-y: scroll; */
  /* background-color: rebeccapurple; */
}
.section {
  width: 1780px;
  /* position: relative; */
}
.home-section-name {
  width: 1920px;
  height: 34px;
  line-height: 34px;
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 20px;
}
.section .list {
  width: 537px;
  height: 348px;
  margin-right: 40px;
  margin-bottom: 52px;
  border-radius: 5px;
  /* position: relative; */
  float: right;
  /* display: inline-block; */
}
.list .img {
  width: 537px;
  height: 348px;
}

.list img {
  /* position: absolute; */
  width: 537px;
  height: 348px;
  border-radius: 5px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}
.flex-row {
  flex-direction: row;
}

.small-list {
  width: 309px;
  height: 426px;
  margin-right: 36px;
  margin-bottom: 52px;
  border-radius: 5px;
}
.small-list .img {
  width: 309px;
  height: 426px;
}
.small-list .seleted-img {
  position: absolute;
  top: -35px;
  left: -39.8px;
  width: 380px;
  height: 503px;
  z-index: 999;
}
.small-list img {
  /* position: absolute; */
  width: 309px;
  height: 426px;
  border-radius: 5px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}
.list-rank {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 97.5px;
  height: 42px;
  background-color: #ff6151;
  z-index: 2999;
  text-align: center;
  border-top-left-radius: 7px;
  border-bottom-right-radius: 25px;
}
.rank-work {
  color: #ffffff;
  text-align: center;
  line-height: 42px;
  font-size: 22px;
}
.list-label {
  position: absolute;
  width: 135px;
  height: 40.5px;
  left: 0;
  z-index: 200;
}
.list-label img {
  width: 135px;
  height: 40.5px;
}
.content-title {
  position: relative;
  height: 34.5px;
  font-size: 34.5px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 34.5px;
  padding: 0px 0 30px;
}
.title-word {
  color: #ffffff;
  height: 34.5px;
  line-height: 34.5px;
  font-size: 34.5px;
}
/* 聚焦变化 */
.focusBox {
  background-color: transparent;
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
.focus-area {
  border: 1px solid red;
}

.list-word {
  position: absolute;
  bottom: 0px;
  width: 309px;
  height: 53px;
  line-height: 53px;
  font-size: 34px;
  text-align: justify;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
}
.swiper-dot {
  width: 150px;
  position: absolute;
  bottom: 10px;
  left: 220px;
}
.dot {
  width: 24px;
  height: 24px;
  background-color: #fff;
  margin: 5px;
  border-radius: 12px;
}
.active {
  background-color: yellow;
}
.same {
  border: 0px;
}
.home-bottom{
  width: 1780px;
  height: 61px;
  line-height: 61px;
  background-color: purple;
  margin-bottom: 50px;
}
.botom-word{
  width: 1780px;
  height: 61px;
  line-height: 61px;
  color: #fff;
  font-size: 32px;
  text-align: center;
}
</style>
