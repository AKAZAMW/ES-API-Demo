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
        barrageSpeed: [1, 1.2, 1.5, 2, 2.4],
        trajectory: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        allBarrageData: ['还好进化得快，不然在那抓痒的就是我了','放在影院，我也愿意花钱买票，不玩虚的！','如果没有大卫解说，这个片子会没有那么完美','没有善恶只有美丽','真好看写的很好，很好','一听就很贵。','用了很长时间拍的，拍的过程很辛苦的','怎么找不到这首歌？','说的对','就你皮','真想给它上点药','反正比电视剧好看','凡事逃不过真香定律','中国什么时候有动物世界了','感觉会上瘾哈哈','蓝色星球里面更厉害','我看到都想哭','没有片酬的金典！高超的摄影！','听说一直按着点赞键 点赞数会不停的涨。。','为什么没有狼？智慧型选手','哪天地球毁灭就是人类干的','说真的有些人还不如不进化呢.','bbc出品必属精品！！！！','练好了就能去找它亲爹啦','还有你爹','我也是，心疼','你去嫁给猩猩吧！祝你幸福','在后面','我也想看狼','期待后面的几部，不知道多久更新','老子来也(๑‾᷅^‾᷅๑) 嫌弃你','有道理','画面竟如此精美','给我自己点个赞！','我给你点个赞','大爱这些美丽的圣灵','眼神','刚刚笑死我了，评论的都是些人才啊！','到位','好看','像不像毕业照，哈哈哈','BBC出的纪录片真棒','旗子🇺🇳','解说的声音跟地球脉动的是一个人，很喜欢','超喜欢动物世界，但对戴维的伤口好心疼','BBC的纪录片部部都是经典','保护环境拒绝污染，让企鹅永远繁衍下去','没有蓝色星球2好看','我以为是皇马的BBC','希望这次没有造假，摆拍，合成！','洗个痛快澡','片花的歌曲叫什么名字？','我是来学习英语的啊哈哈','赵忠祥老师呢，快来！！！','这个我喜欢，多出点这种节目','太厉害了！佩服佩服！','适者生存，懂吗','纪录片的原则是记录、不干预','因为我们要的不是生存，而是生活质量','Bbc纪录片绝了啊！！！！感动','Moo','每一个生命都值得认真对待','呜呜呜！好可怜的狮子啊','大人的事小孩不要参与','挑战他的可能也是他的后代','(๑•॒̀ ູ॒•́๑)啦啦啦','为什么没有国语 why？','熊孩子','看到那伤口都揪心，哎','happy','我看的都是家族里永远是雌性承担最多的责任','均安也没有国语。只有英语','啦啦啦啦','扭扭捏捏','漂亮','看到了一半，感觉有点残忍','怎么样，怎么样好看不','好看吗，我刚看，想问下','每一帧，都是可以当做壁纸的画面太棒了','老外的这些团队是真的专业，，，，，','火，最伟大的力量','把你放到没有人的地方，想想自己能活多久','有多少人跟我一样认为是个电影？？','什么时候出中文版？期待期待期待','摄影组敬业。感谢为我们带来的真实','我也很喜欢小动物，基本上每顿都有。','摄影人员太牛逼了！戴维是真正的王者！','重头戏往往最后才出场，所以老虎大佬压轴！','优秀的统领，一个家族的强盛。','中央十套《动物世界》很好看！','很好看~很有意义的记录片！','被遗弃的小企鹅后来怎么样了？还活着吗？','达到上亿就是被吃的命运了','没有语言。没有语言记录传承不行的。','不忍心告诉你，它们最后冻死了','美……','这声优可以跟苹果首席声优乔纳森有一拼了','共勉哈 哈哈','我小时候就喜欢看动物世界','欢迎大家收看，动物世界改编版','喜欢大自然的一草一木一生命','震撼 ！感动！','我也喜欢动物世界纪录片','这个纪录片拍了多久才剪辑出成片啊？','我才开始看，很期待收获','所以这个理论有争议 不能成立','批次不一样！','哈哈\n讳疾忌医会斤斤计较','还好我进化的快 不然上电视的就是我了','动物世界来咯，喜欢看的报个到','变色？不太懂也。怎么变','当然','舅扶你','可爱的小脑斧','喜欢，大自然的小动物，就怕他们会咬我哈哈','这个视频用来学英语感觉很不错！！','这黑猩猩的有点大','可以呢大自然成为王者要一个团队','这太真实了叭，怎么拍出来了','好评如潮，我也来欣赏欣赏','还好我进化的快 不然上电视的就是我了','没国语版啊？？？？？？','这老头陪我度过了n年啊','快乐。','我来了，我真的来了。','拍摄者是最要致敬的','最后剧情触感人心，保护自然','咬破喉咙','安排。','感觉大老虎生无可恋的表情','南极的冻土荒原','很喜欢听英国人说英语','弹屏不会啊','真的是太太太太太太太太太好看了','听不懂看字幕 学学英语 再不行感受氛围','哈哈哈，666','第一次发弹幕，照顾下我','代入了','可怜呀。','真的太美了，为摄影师点赞','太好看了，要看原声的，才有感觉','手指都断了。加油(ง •̀_•́)ง','我说一句，近十年金价跌的不成样子','666666666666','先生存，再繁衍，人类也是如此','权利的斗争，弱肉强食','还好人类祖先先到地面否则还和它们一样呢！','原来这么多人热爱大自然啊','感谢为大家拍出来这么好看的纪录片！','让我们一起保护野生动物保护大自然。','这些拍摄者太伟大了！真让人佩服！','额，是咋拍的。有没有人想知道。','哈哈哈哈哈我的微博已经开了这么','物竞天择，适者生存不适者淘汰','哭了哎，第一次看记录片哭T﹏T','值得一看 非常奈斯 刚刚好我也喜欢看这些','真心佩服这种精神，很震撼','非常好的纪录片，很有感触','有意思，、……','好好看哦！希望大家观赏。','有点像自然传奇啊。。。。','那个进化快的！！你站稳咯','真王者……………………','你无法抵挡大自然的力量','卢瑟起义失败( ﹡ˆoˆ﹡ )','佩服外国人的这种精神。','摄影师的身份一直是个谜','v6不服来战。。。。。。','慢镜头','我竟然再看动物世界！','摄影师们，你们辛苦了','想看猪为什么没有','生命，感动，挖掘～','对生命愈发敬畏，','好可爱的耳朵','好看，棒棒哒','我觉着有假的在里面。','我来了红红火火恍恍惚惚','拒绝假货','拍得好美','佩服摄影师几年如一日的坚持','我想看企鹅，最喜欢企鹅了','比双世宠妃好看多了 ','耶耶耶～','东北虎！印度虎太小！','为了拍摄还放团火，把他们赶去其他地方','太震撼了','喜欢看！热爱自然，保护环境！','自然大火，不是人放的。','摄影师值得称赞 每天加鸡腿','希望人类多爱些大自然，因为我们都是共存的','太棒了。','哇，so酷','这雨拍的好！','喜欢，大自然的小动物，就怕他们会咬我哈哈','很不错，画面拍摄技术很一流。很有公益性','我进化太快了，要不然可以无代价上电视了','解说员的声音特别棒，大家赞一个。','非常好的题材 希望以后多拍点动物世界','真的是这样的吗？嗯呢我要去看看吧','震撼 值得一看 很感动 画面也很美','拍的太好了！！本色演出！','看起来不错的样子动物的王国！','我们应该学习人家，要保护动物','喜欢 不错他们拍摄挺不容易的','如何拍摄出来的？？？？？','烤串啊，老板，来二斤肉串','不错，还可以 纪录片要出击了','滴滴滴滴滴滴滴滴滴滴滴滴滴','这里可以看到更真实的世界','记录片就要记录有意义的事','不知道我是不是彩色。。。','最近特别喜欢看纪录片','喜欢这个节目！！！！！','果然都是文化人d(ŐдŐ๑)','好奇是他们是怎么拍摄的','总共才五集但是都是精华','说说都是楼梯上人生价值','淘金者应该注意一下咯。','画面感超强的啊，清晰。','我是让老师逼来的。','我是专门进来点赞的','好看，视野效果非常好','这火是不是你们放的、','就欢他的讲解的话语。','热爱纪录片的我 嘻嘻','哈哈(ಡωಡ)hiahiahia','如果新生','太辛苦了摄制组。走了2千多公里，两年时间','生存法则不只是在人类，动物也在改进','辛苦了，拍摄者们，您们真棒！','旁白很棒，旁白撑起了整部剧','生命太神奇了，宇宙太神圣了','不能投屏到电视怎么回事','我很好奇名字是如何取的','还好','震撼','很优秀的一部纪录片。','画面太美','喜欢这种接近自然，亲近自然的感觉','为啥不更新阿 在线等更新','看的有点惊心动魄了','动物世界 棒棒哒','那是你渴望权利','快了','好看，动物也有权利竞争','伤成这样还能活下来。生命力太顽强了。','看的想哭','真的是良心片','温情的动物世界❤','还好我进化的快 不然上电视的就是我了','来了来了哈哈୧(๑•̀⌄•́๑)૭','每一种动物都生活在一个独特的世界','目前看过最棒的纪录片了，很感动','人类的多少利益背负了多少生命','太赞了，每个镜头，堪比大片','记录很真实，口语很动听！','这女工作人员纹身牛皮哦','没中文就别拿上来播放','像拍摄者致敬 万岁','物竞天择 适者生存','每帧画面都凝聚了摄制组的心血，感动极了','终于有了','呵呵呵呵','这个解说员翻译的还可以。','细节很到位，好看，期待下面的','是的。','良心纪录片！感动，震撼。','跪求更新，太精彩了……期待','当然，配音还可以更好','大自然的伟大，任何动物都值得尊敬，敬畏','查姆回来找儿子，却又不得不离开，泪目。','我立一个flag这部片会火的恩','这技术，简直没谁了，奥斯卡最佳纪录片','读书读少了 除了用震撼找不到其他形容','哈哈哈孔雀的叫声好像鸡啊哈哈','很不错ꉂ ೭(˵¯̴͒ꇴ¯̴͒˵)౨”','很久没看，还记得动物世界吗','良心制作，幕后摄影组不容易','来了','值得一看 值得一看值得一看','好不好看？有没有看完的','牛皮啊啊啊啊啊啊啊啊啊','终于等到了，沙发沙发','喜欢听英文版，多棒啊','喜欢看这类影片，喜欢动物，喜欢森林','致敬摄像组','又来看动物世界了','拍了两，摄制组太不容易了。','一个字，赞','太清晰好看了','噢噢噢噢噢噢','大片即视感','好看没有比这更好的','没整明白是电影还是电视剧？','拍的真好','经典之作','纪录片','有意思','狮子和老虎，谁是王','我觉的这比大多数国产电影好看呢','真的服，我是饿饿饿饿饿饿饿饿饿','老虎，百兽之王。个体来说老虎最强大','呵呵红红火火滚滚滚古古怪怪','别以为长得帅，我就不打你','我同意，但怎么做?叫我。','为啥你们不救火，就在那拍','好片子好片子好片子好片子','大自然的神奇，无与伦比','每个生灵都是奇迹，伟大','真聪明啊 再过几亿年会不会变成人类的敌人','向为我们带来这么好的视频的摄影师们感谢','翻译不严谨。\n熟悉的老爷子的声音。','喜欢这种类型的节目 记录一份真才是美好','围观大片！bbc的纪录片真心太棒了！摩拜','我属王者畏壮大','生命都脆弱 我们就是他们外界的干扰','国语呢\n国语配音呢……国语呢','果然你爸爸还是你爸爸！@戴维','什么时候才能拍一个花豹或猎豹的','还挺好看的……………………','我也是','我想吃他们啊啊啊啊啊啊啊啊啊','中国反正是拍不出这样的纪录片','我看看，，，，，，，，，','终于等到你 还好我没放弃','拍得不错应该获奖！！！','我等着看狮子过老虎见面','看完莫名的好想哭(┯_┯)','人类的天敌是什么？人性化','实在是太过于震撼人心','...厉害了','叫你皮，叫你皮。','你噢噢','两秒瞌睡要你命','燃烧颜值长大的','喜欢，大自然的小动物，就怕他们会咬我哈哈','想说明什么？','不敢相信用了四年的时间来拍摄这个','东北虎，华南虎，华北虎，很难见到了','摄影师你们辛苦了，这样片子很好。','投屏到电视上就没有hdr清晰度了...','哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈','生存好艰难','进化快的我们看那些不快的表演','动物只是真实放大了人类的生活','BBC的纪录片——下饭的最佳佐料','我想看普通话版权，光看翻译了','拍摄的人辛苦了为我们提供这些','那伤口，看着就很痛，太坚强了','我的妈呀，这也太狼狈了吧','这帮人太强大了！不得不佩服','动物活的比有些人类有使命。','还没看，等待更新完在看。','还没人与自然好看。。。。','看过很震撼，真是太棒了','的雨阿姐啊聚聚玩你手机','嗯ヽ(○^㉨^)ﾉ♪','中文就好了，人与自然','平头哥在哪里？非洲的','好开心(●°u°●)​ 」','又是一种很魔性的声音','很不错的一部纪录片，','给制作团队点赞，感谢','你真的','可以','不错','太好看了。哭了','背景音乐真的太大了，几乎听不到旁白','就算是世界末日，也阻挡不了我过来追剧','我说我的名字跟这部电影一样你们信吗？','第一集看的心痛 任何时候都是弱肉强食','连续剧现在太难看了，还不如看纪录片','记得小的时候特别喜欢看动物世界 ','特好看啊啊啊啊啊啊啊啊啊啊啊啊啊','似乎看到了人类社会，也看到了人性','纪录片 看这还不错 比特效好看多了','这个解说是不是解说地球脉动的？','觉得可怜','这些摄影师，真的很佩服他们！','我在想四六级美文会不会这里出','动物世界太残暴了，','我是发现了，所以动物都是小时候好看','咬死咋办，你负责啊','谁有中文翻译的动物世界一类的节目','棒极了……','我也是 哈哈哈','排的震撼','稀有动物，需要我们共同保护','非常棒的记录片！','还有真实的取景，看着挺真实的','技术拍不了还是有那个技术但是怕死不敢拍','人类不断地在想探索，','人类探索自然界，了解自然界','摄影师是个迷啊','这是怎么拍的呢？？有这么远的镜头？','这个厉害了','现在看电视只看动物世界','大型纪录片（蹦啵尔霸的大家族）','想学拍这个，录音也太厉害了','不容易啊','是中国人拍的吗？','我很奇怪摄影师是怎么回来的。','动物世界真好看','自然界之神奇，人与自然相融相通','大自然魅力真美','这个是在哪里看的？','学习自然之道','真是大开眼界，适者生存。','这类视频应该多一点！','大家晚上好','看了，学到了很多知识','为什么没有英文呀','生命的真谛','转发，真不错','收藏了'],
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
            if (Math.random() > 0.95) {
              //二十分之一的概率产生弹幕
              const index = Math.floor((Math.random() * _this.trajectory.length));
              const val = _this.trajectory.splice(index, 1);
              _this.barrageData.push({
                text: _this.allBarrageData[Math.floor((Math.random() * _this.allBarrageData.length))],
                left: 1200,
                top: val * 70,
                trajectory: val,
                speed: _this.barrageSpeed[(Math.floor((Math.random() * _this.barrageSpeed.length)))],
              });
            }
          }
          console.log(_this.barrageData)
          _this.barrageData.forEach(function (d) {
            d.left -= d.speed * 1;
          });
          _this.barrageData = _this.barrageData.filter(function (d) {
            if (d.left <= -200) {
              _this.trajectory.push(d.trajectory);
            }
            return d.left > -200;
          });
        }
        }, 5);
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
