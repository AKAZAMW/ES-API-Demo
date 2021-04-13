import home from './home';
import history from './history';
import playPage from './playPage';
import rankList from './rankList';
import feedback from './feedback';

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
};


export default hdVideo;
