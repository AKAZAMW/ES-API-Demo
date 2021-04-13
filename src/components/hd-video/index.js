import home from './home';
import history from './history';
import playPage from './playPage';
import rankList from './rankList';
import feedback from './feedback';
import morelist from './morelist';

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
  moreList: {
    name: '更多页面',
    component: morelist,
  },
};


export default hdVideo;
