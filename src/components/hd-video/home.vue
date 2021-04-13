<template>
  <div class="contain">
    <div class="head" :gradientBackground="gradientBackground">
      <div class="nav-left">
        <img :src="imgSrc" class="logoimg" />
      </div>
      <div class="nav-right" :focusable="false">
        <div
          class="li-1 rank current same"
          :focusable="true"
          :focusScale="1.1"
          @click="routerToRank"
        >
          <img
            class="selected"
            src="../../../static/img/rank_no_selected.png"
          />
        </div>
        <div
          class="li-1 history same"
          :focusable="true"
          :focusScale="1.1"
          @click="routerToHistory"
        >
          <img
            class="selected"
            src="../../../static/img/history_no_select.png"
            alt=""
          />
        </div>
        <div
          class="li-1 help same"
          :focusable="true"
          :focusScale="1.1"
          @click="routerToFeedback"
        >
          <img
            class="selected"
            src="../../../static/img/help_no_selected.png"
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
              <img class="default" src="../../../static/img/yule.png" />
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
              <img class="default" src="../../../static/img/mengchong.png" />
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
              <img class="default" src="../../../static/img/yundong.png" />
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
              <img class="default" src="../../../static/img/lvyou.png" />
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
              <img class="default" src="../../../static/img/vr.png" />
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
    <div
      id="home-clumn"
      class="display-flex flex-column"
      ref="list"
      @scroll="onScroll"
    >
      <div class="content-list">
        <div class="section display-flex flex-row">
          <div
            class="list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
            :requestFocus="true"
            ref="swiperPic"
          >
            <div class="img">
              <img :src="swiperUrl" class="default" />
            </div>
            <div class="swiper-dot dispaly-flex flex-row">
              <p class="dot" :class="[isActive == 0 ? 'active' : '']"></p>
              <p class="dot" :class="[isActive == 1 ? 'active' : '']"></p>
              <p class="dot" :class="[isActive == 2 ? 'active' : '']"></p>
            </div>
          </div>
          <div
            class="list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/baby.png" class="default" />
            </div>
          </div>
          <div
            class="list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/blzy.png" class="default" />
              <!-- <img src="../img/selected/recommend_big.png" class="selected"/> -->
            </div>
          </div>
        </div>

        <!-- 竖排图片1 -->

        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="list-rank">
              <p class="rank-work">Top1</p>
            </div>
            <!-- <div class="list-label">
              <img :src="item.icon" v-if="item.icon != ''" />
            </div> -->
            <div class="img">
              <img src="../../../static/img/home/xm.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >直播！大熊猫干饭</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="list-rank">
              <p class="rank-work">Top2</p>
            </div>
            <!-- <div class="list-label">
              <img :src="item.icon" v-if="item.icon != ''" />
            </div> -->
            <div class="img">
              <img src="../../../static/img/home/top2.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >AKB48-我们不战斗</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="list-rank">
              <p class="rank-work">Top3</p>
            </div>
            <!-- <div class="list-label">
              <img :src="item.icon" v-if="item.icon != ''" />
            </div> -->
            <div class="img">
              <img src="../../../static/img/home/top3.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >堡垒之夜激斗</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="list-label">
              <img src="../../../static/img/recommend.png" />
            </div>
            <div class="img">
              <img src="../../../static/img/home/tj.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >我的世界逃离</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="list-label">
              <img src="../../../static/img/hot.png" />
            </div>
            <div class="img">
              <img src="../../../static/img/home/rm.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >忠实可靠的柴犬</text-view
                >
              </div>
            </div>
          </div>
          <!-- 动态数据 -->
          <!-- <div
            v-for="(item, i) in recmondList"
            :key="i"
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.1"
            @click="openVideo"
          >
            <div class="list-rank" v-if="item.level != ''">
              <p class="rank-work">{{ item.level }}</p>
            </div>
            <div class="list-label">
              <img :src="item.icon" v-if="item.icon != ''" />
            </div>
            <div class="img">
              <img :src="item.url" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >{{ item.name }}</text-view
                >
              </div>
            </div>
          </div> -->
        </div>
        <!-- 动态数据 -->
        <!-- <div class="model-list" v-for="(item, i) in modelList" :key="i">
          <p class="home-section-name">{{ item.title }}</p>
          <div class="section display-flex flex-row">
            <div
              v-for="(data, i) in item.data"
              :key="i"
              class="small-list focus-area"
              :focusable="true"
              :focusScale="1.1"
              @click="openVideo(data.type)"
            >
              <div class="img">
                <img :src="data.url" class="default" />
              </div>
              <div class="list-word">
                <div class="view-box">
                  <text-view
                    class="text-view"
                    :focusable="false"
                    :select="true"
                    maxLines="1"
                    ellipsizeMode="2"
                    >{{ data.name }}</text-view
                  >
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- 竖排图片2  娱乐-->
        <p class="home-section-name">娱乐</p>
        <div class="section display-flex flex-row">
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yl1.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >堡垒之夜乘船</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yl2.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >堡垒之夜凯文魔方</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yl3.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >圣诞马术嘉年华</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yl4.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >我的世界水下浮沉</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo('yule')"
          >
            <div class="img">
              <img src="../../../static/img/home/more.png" class="default" />
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
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/mc1.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >两只小鹦鹉的日常</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/mc2.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >高傲的大猫——白虎</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/mc3.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >犀牛与鹈鹕的同居生活</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/mc4.png" class="default" />
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
            @click="openVideo('mengchong')"
          >
            <div class="img">
              <img src="../../../static/img/home/more.png" class="default" />
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
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yd1.jpg" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >山地单车比赛</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yd1.jpg" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >宝可梦过山车</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yd1.jpg" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >极限滑板</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/yd2.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >沙丘冲浪-罗尼.雷纳</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo('yundong')"
          >
            <div class="img">
              <img src="../../../static/img/home/more.png" class="default" />
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
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/ly1.jpg" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >香港风情篇1</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/ly2.jpg" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >印尼时光_monilith</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/ly3.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >和海豚一起游泳</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/ly4.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >大溪地冲浪</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo('lvyou')"
          >
            <div class="img">
              <img src="../../../static/img/home/more.png" class="default" />
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
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/vr1.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >AKB48-持续的恋爱</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/vr2.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >AKB48-因为喜欢你</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/vr3.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >AKB48-Love Trip</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo"
          >
            <div class="img">
              <img src="../../../static/img/home/vr4.png" class="default" />
            </div>
            <div class="list-word">
              <div class="view-box">
                <text-view
                  class="text-view"
                  :focusable="false"
                  :select="true"
                  maxLines="1"
                  ellipsizeMode="2"
                  >AKB48-闪亮的幸运</text-view
                >
              </div>
            </div>
          </div>
          <div
            class="small-list focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="openVideo('vr')"
          >
            <div class="img">
              <img src="../../../static/img/home/more.png" class="default" />
            </div>
            <!-- <div class="list-word" >
              <div class="view-box"><text-view  class="text-view" :focusable=false :select="true"  maxLines="1" ellipsizeMode="2"  ></text-view></div>
              </div> -->
          </div>
        </div>
        <!-- 返回顶部 -->
        <div class="section display-flex flex-row">
          <div
            class="home-bottom focus-area"
            :focusable="true"
            :focusScale="1.05"
            @click="goToTop"
          >
            <p class="botom-word">我是有底线的~按我返回顶部</p>
          </div>
        </div>
      </div>
      <p class="home-section-name" style="margin-bottom: 550px">天翼VR</p>
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
      scrollPos: {
        top: 0,
        left: 0,
      },
      recmondList: [
        {
          level: "Top1",
          url:
            "http://120.236.119.11:58011/uploads/images/62473806fcfb449f6aba83fdc5653cc9.png",
          name: "直播！大熊猫吃播",
        },
        {
          level: "Top2",
          url:
            "http://120.236.119.11:58011/uploads/images/6afd6f751ffed845e1b305687c4dba7b.png",
          name: "AKB48 我们不战斗",
        },
        {
          level: "Top3",
          url:
            "http://120.236.119.11:58011/uploads/images/0ff0018702ee41fe0e6394ba32b7f0ae.png",
          name: "堡垒之夜激斗",
        },
        {
          level: "",
          url:
            "http://120.236.119.11:58011/uploads/images/dbcb643ab9c00717ef5306dbf89a2941.png",
          icon:
            "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/recommend.png",
          name: "我的世界逃离",
        },
        {
          level: "",
          icon: "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/hot.png",
          url:
            "http://120.236.119.11:58011/uploads/images/8a3c8c8d44f6f4dca81dc8a11899be8f.png",
          name: "忠诚可靠的绅士柴犬",
        },
      ],
      modelList: [
        {
          title: "娱乐",
          data: [
            {
              url:
                "http://120.236.119.11:58011/uploads/images/62473806fcfb449f6aba83fdc5653cc9.png",
              name: "堡垒之夜之乘船",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/5d9e2377180df5fa38ed1e197f9816ae.png",
              name: "堡垒之夜",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/b56d6c7d0940e79913a28986feb3e03c.png",
              name: "圣诞马术嘉年华",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/74fb730998e2ae25d6cf64a87013915b.png",
              name: "我的世界",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png",
              name: "",
              type: "more",
            },
          ],
        },
        {
          title: "萌宠",
          data: [
            {
              url:
                "http://120.236.119.11:58011/uploads/images/38832c7d95d993ef6d6dba76fec99ec1.png",
              name: "两只小鹦鹉日常",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/396e3cb72b373b624d99b9fcd7c0ba6f.png",
              name: "高傲的大猫",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/6d2dcd971ad44b02040d66eb8c8f4e24.png",
              name: "犀牛与鹧鸪的同居生活",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/dbcb643ab9c00717ef5306dbf89a2941.png",
              name: "忠诚可靠的柴犬绅士",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png",
              name: "",
              type: "more",
            },
          ],
        },
        {
          title: "运动",
          data: [
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg",
              name: "山地单车比赛",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg",
              name: "宝可梦过山车",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/practise/1.jpg",
              name: "极限滑板",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/e599d8977875a038ffa31085f4886ecf.png",
              name: "沙丘冲浪",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png",
              name: "",
              type: "more",
            },
          ],
        },
        {
          title: "旅游",
          data: [
            {
              url:
                "http://120.236.119.11:58011/uploads/images/d863acab94440edc5e450e700189fb3d.jpg",
              name: "香港风情篇",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/352af22ffacb33f0cedb0cdff3323b8b.jpg",
              name: "印尼风光",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/0b520b38484a478171379ba319f130d7.png",
              name: "和海豚一起游泳",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/b5bd21315b6ffb5fd85540b540e683d9.png",
              name: "大栖息地冲浪",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png",
              name: "",
              type: "more",
            },
          ],
        },
        {
          title: "天翼VR",
          data: [
            {
              url:
                "http://120.236.119.11:58011/uploads/images/38743d477d639d8dfb7dc446a12b52c8.png",
              name: "AKB48-持续的恋爱",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/77e661177ee3e4873b893144c1ddd2a5.png",
              name: "AKB48-因为喜欢你",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/3bf7cdd3a26c275fe0a43dc8031d9b78.png",
              name: "AKB48-Love Trip",
            },
            {
              url:
                "http://120.236.119.11:58011/uploads/images/7630d601056981e1776f89cca00d5994.png",
              name: "AKB48- 闪亮的幸运",
            },
            {
              url:
                "http://120.236.119.11:58011/ivod/jiangsuVR/img/home/more.png",
              name: "",
              type: "more",
            },
          ],
        },
      ],
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
      if (index === 1) {
        this.scrollPage(860);
      } else if (index === 2) {
        this.scrollPage(1400);
      } else if (index === 3) {
        this.scrollPage(1920);
      } else if (index === 4) {
        this.scrollPage(2460);
      } else if (index === 5) {
        this.scrollPage(3000);
      }
      console.log("获取焦点啦");
    },
    //跳转到视频页面
    openVideo(type) {
      console.log("sjsjs");
      if (type == "yule") {
        let url = "/video/moreYule";
        Vue.Native.callNative("MiniModule", "execute", {
          action: "__AC_NEW_TAB__",
          data: JSON.stringify({ url }),
        });
      } else if (type == "mengchong") {
        let url = "/video/moreMengchong";
        Vue.Native.callNative("MiniModule", "execute", {
          action: "__AC_NEW_TAB__",
          data: JSON.stringify({ url }),
        });
      } else if (type == "yundong") {
        let url = "/video/moreYundong";
        Vue.Native.callNative("MiniModule", "execute", {
          action: "__AC_NEW_TAB__",
          data: JSON.stringify({ url }),
        });
      } else if (type == "lvyou") {
        let url = "/video/moreLvyou";
        Vue.Native.callNative("MiniModule", "execute", {
          action: "__AC_NEW_TAB__",
          data: JSON.stringify({ url }),
        });
      } else if (type == "vr") {
        let url = "/video/moreVR";
        Vue.Native.callNative("MiniModule", "execute", {
          action: "__AC_NEW_TAB__",
          data: JSON.stringify({ url }),
        });
      } else {
        let url = "/video/playPage";
        Vue.Native.callNative("MiniModule", "execute", {
          action: "__AC_NEW_TAB__",
          data: JSON.stringify({ url }),
        });
      }
      // switch (type) {
      //   case "yule":
      //     let url = "/video/moreYule";
      //     Vue.Native.callNative("MiniModule", "execute", {
      //       action: "__AC_NEW_TAB__",
      //       data: JSON.stringify({ url }),
      //     });
      //     break;
      //   case "mengchong":
      //     let url = "/video/moreMengchong";
      //     Vue.Native.callNative("MiniModule", "execute", {
      //       action: "__AC_NEW_TAB__",
      //       data: JSON.stringify({ url }),
      //     });
      //     break;
      //   case "yundong":
      //     let url = "/video/moreYundong";
      //     Vue.Native.callNative("MiniModule", "execute", {
      //       action: "__AC_NEW_TAB__",
      //       data: JSON.stringify({ url }),
      //     });
      //     break;
      //   case "lvyou":
      //     let url = "/video/moreLvyou";
      //     Vue.Native.callNative("MiniModule", "execute", {
      //       action: "__AC_NEW_TAB__",
      //       data: JSON.stringify({ url }),
      //     });
      //     break;
      //   case "vr":
      //     let url = "/video/moreVR";
      //     Vue.Native.callNative("MiniModule", "execute", {
      //       action: "__AC_NEW_TAB__",
      //       data: JSON.stringify({ url }),
      //     });
      //     break;

      //   default:
      //     let url = "/video/playPage";
      //     Vue.Native.callNative("MiniModule", "execute", {
      //       action: "__AC_NEW_TAB__",
      //       data: JSON.stringify({ url }),
      //     });
      //     break;
      // }
      // if (type == "more") {
      //   let url = "/video/moreList";
      //   Vue.Native.callNative("MiniModule", "execute", {
      //     action: "__AC_NEW_TAB__",
      //     data: JSON.stringify({ url }),
      //   });
      // } else {
      //   let url = "/video/playPage";
      //   Vue.Native.callNative("MiniModule", "execute", {
      //     action: "__AC_NEW_TAB__",
      //     data: JSON.stringify({ url }),
      //   });
      // }
    },
    //跳转到排行榜
    routerToRank() {
      let url = "/video/rankList";
      Vue.Native.callNative("MiniModule", "execute", {
        action: "__AC_NEW_TAB__",
        data: JSON.stringify({ url }),
      });
    },
    //跳转到观看历史
    routerToHistory() {
      // console.log("hello ligen")
      let url = "/video/history";
      Vue.Native.callNative("MiniModule", "execute", {
        action: "__AC_NEW_TAB__",
        data: JSON.stringify({ url }),
      });
    },
    //跳转到帮助
    routerToFeedback() {
      let url = "/video/feedback";
      Vue.Native.callNative("MiniModule", "execute", {
        action: "__AC_NEW_TAB__",
        data: JSON.stringify({ url }),
      });
    },
    goToTop() {
      this.scrollPage(0);
      setTimeout(() => {
        Vue.Native.callUIFunction(this.$refs.swiperPic, 'requestFocus');
      }, 100);
    },
    scrollPage(top) {
      // 因为布局问题，浏览器内 flex: 1 后也会超出窗口尺寸高度，所以这么滚是不行的。
      if (!Vue.Native) {
        /* eslint-disable-next-line no-alert */
        alert("This method is only supported in Native environment.");
        return;
      }
      console.log(this);
      const { list } = this.$refs;
      const { scrollPos } = this;
      // CSSOM View standard - ScrollToOptions
      // https://www.w3.org/TR/cssom-view-1/#extensions-to-the-window-interface
      list.scrollTo({
        left: scrollPos.left,
        top,
      }); // 其实 scrollPost.left 写 0 也可以。
      console.log("===================");
    },
    onScroll(evt) {
      console.log("lilili", evt);
      evt.stopPropagation(); // 这个事件触发比较频繁，最好阻止一下冒泡。
      this.scrollPos = {
        top: evt.offsetY,
        left: evt.offsetX,
      };
      // 初始化时曝光上报
      this.exposureReport(evt.offsetY);
    },
    exposureReport(screenTop) {
      // 获取可视范围内的组件
      const componentsInWindow = Object.keys(heightOfComponents).filter(
        (index) => {
          const height = heightOfComponents[index];
          return (
            screenTop <= height && screenTop + this.$windowHeight >= height
          );
        }
      );
      // 其实没有上报，只是把界面上正在曝光的组件列出来了。
      // 同时曝光锁还得业务自己做。
      console.log("Exposuring components:", componentsInWindow);
    },
    //返回顶部
    scrollToTop() {
      console.log("absbsb");
      const { list } = this.$refs;
      list.scrollToIndex(0, 0);
    },
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
.home-bottom {
  width: 1780px;
  height: 61px;
  line-height: 61px;
  background-color: purple;
  margin-bottom: 50px;
}
.botom-word {
  width: 1780px;
  height: 61px;
  line-height: 61px;
  color: #fff;
  font-size: 32px;
  text-align: center;
}
</style>
