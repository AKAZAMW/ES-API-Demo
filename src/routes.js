import Menu from './menu.vue';
import routeLoading from './routeLoading.vue';
import demos from './components/demos';
import nativeDemos from './components/native-demos';
import esTvDemos from './components/es-tv-demos';
import hdVideo from './components/hd-video';

export default {
  /**
   * 阻止 Android 上 Back 键触发页面返回
   * 默认值为 false，就是开启 Back 键返回。
   */
  disableAutoBack: true,

  /**
   * 定义路由
   * 这里偷了个懒直接做了个大数组，跟 Menu.vue 里互相匹配动态加载。
   */
  routes: [
    {
      path: '/',
      component: routeLoading,
    },
    {
      path: '/menu',
      component: Menu,
    },
    ...Object.keys(demos).map(demoId => ({
      path: `/demo/${demoId}`,
      name: demos[demoId].name,
      component: demos[demoId].component,
    })),
    ...Object.keys(nativeDemos).map(demoId => ({
      path: `/demo/${demoId}`,
      name: nativeDemos[demoId].name,
      component: nativeDemos[demoId].component,
    })),
    ...Object.keys(esTvDemos).map(demoId => ({
      path: `/demo/${demoId}`,
      name: esTvDemos[demoId].name,
      component: esTvDemos[demoId].component,
    })),
    ...Object.keys(hdVideo).map(videoId => ({
      path: `/video/${videoId}`,
      name: hdVideo[videoId].name,
      component: hdVideo[videoId].component,
    })),
  ],
};
