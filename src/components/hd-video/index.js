import home from './home';
import history from './history';
import playPage from './playPage';
import rankList from './rankList';
import feedback from './feedback';
import moreYule from './moreYule';
import moreMengchong from './moreMengchong';
import moreYundong from './moreYundong';
import moreLvyou from './moreLvyou';
import moreVR from './moreVR';

const hdVideo = {
  home: {
    name: '首页',
    component: home,
  },
  history: {
    name: '观看历史',
    component: history,
  },
  rankList: {
    name: '排行榜',
    component: rankList,
  },
  playPage: {
    name: '播放页面',
    component: playPage,
  },
  feedback: {
    name: '反馈页面',
    component: feedback,
  },
  moreYule: {
    name: '娱乐',
    component: moreYule,
  },
  moreMengchong: {
    name: '萌宠',
    component: moreMengchong,
  },
  moreYundong: {
    name: '运动',
    component: moreYundong,
  },
  moreLvyou: {
    name: '旅游',
    component: moreLvyou,
  },
  moreVR: {
    name: '天翼VR',
    component: moreVR,
  },
};


export default hdVideo;
