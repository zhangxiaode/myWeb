<template>
  <div class="main homePage">
    <div class="mainLeft">
      <div class="content">
        <div class="contentLeft">
          <div class="portrait">
            <img :src="photo" alt="">
          </div>
          <div class="box introduction">
            <div class="boxTit">
              个人信息
            </div>
            <div class="boxCont">
              <ul>
                <li v-for="(item,index) in introList" :key="index">
                  <span>{{item.key}}</span>
                  <i>:</i>
                  {{item.value}}
                </li>
              </ul>
            </div>
          </div>
          <div class="box article">
            <div class="boxTit">
              文章精要 <a href="#" class="more">更多</a>
            </div>
            <div class="boxCont">
              <ul>
                <li v-for="(item,index) in artList" :key="index">
                  <a href="#">{{item.title}}</a>
                  <span>{{item.date}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="contentRight">
          <div class="project">
            <div class="projectItem" v-for="(item,index) in projectList" :key="index">
              <a href="#"><img :src="item.img"></a>
            </div>
          </div>
          <div class="articleList">
            <a href="#" class="listItem" v-for="(item,index) in articleList" :key="index">
              <div class="img">
                <img :src="item.img">
              </div>
              <div class="txt">
                <h2 class="tit">{{item.title}}</h2>
                <p class="author"><img :src="item.authorPhoto"><span>{{item.authorName}} 发布时间： {{item.releaseTime}} 分类：{{item.type}}</span></p>
                <p class="cont">{{item.cont}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mainRight">
      <div class="entrance">
        <a href="#" v-for="(item,index) in entranceList" :key="index"><img :src="item.img"></a>
      </div>
      <div class="forum">
        <a href="#" class="forumItem" v-for="(item,index) in forumList" :key="index">
          <div class="name"><span><img :src="item.photo"></span>{{item.name}}：</div>
          <div class="chat">{{item.chat}}</div>
        </a>
      </div>
      <div class="taobao">
        <a href="#"></a>
      </div>
      <div class="website box">
        <div class="boxTit">
          网站推广
        </div>
        <div class="boxCont">
          <a v-for="(item,index) in websiteList" :key="index" target="_blank" :href="item.url" :class="item.calssName">{{item.webName}}</a>
        </div>
      </div>
    </div>
    <div class="box photo">
      <div class="boxTit">
        我的相册<a href="#" class="more">更多</a>
      </div>
      <div class="boxCont">
        <div class="photoItem" v-for="(item,index) in photoList" :key="index">
          <a href="#"><img :src="item.img"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      photo: require('../assets/photo.jpg'),
      pic: require('../assets/pic1.jpg'),
      introList: [
        {
          key: '姓名',
          value: '张孝德'
        },
        {
          key: '出生日期',
          value: '1992/05/27'
        },
        {
          key: '身高',
          value: '172'
        },
        {
          key: '职业',
          value: '前端开发'
        },
        {
          key: '电话',
          value: '1505715****'
        },
        {
          key: 'Q Q',
          value: '1243019627'
        },
        {
          key: 'E m a i l',
          value: '1243019617@qq.com'
        },
        {
          key: '住址',
          value: '浙江省杭州市西湖区'
        },
        {
          key: '座右铭',
          value: '学无止境'
        },
        {
          key: '兴趣',
          value: '3D室内设计、全息投影、虚拟现实VR、增强现实AR...'
        }
        // {
        //   key: '个人主页',
        //   value: 'www.zhangxiaode.com'
        // },
        // {
        //   key: '喜欢的动物',
        //   value: '龟、鱼、狗'
        // },
        // {
        //   key: '个人简介',
        //   value: '2015年就职于杭州天阙科技有限公司，从业年限三年'
        // }
      ],
      artList: [
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        },
        {
          title: '阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个',
          date: '2017/05/02'
        }
      ],
      projectList: [
        {img: require('../assets/pic1.jpg')},
        {img: require('../assets/pic2.jpg')},
        {img: require('../assets/pic3.jpg')},
        {img: require('../assets/pic4.jpg')},
        {img: require('../assets/pic5.jpg')},
        {img: require('../assets/pic6.jpg')}
      ],
      articleList: [
        {
          img: require('../assets/pic1.jpg'),
          title: '如何建立个人网站',
          authorPhoto: require('../assets/photo.jpg'),
          authorName: '张孝德',
          releaseTime: '2017-03-13 17:29:56',
          type: 'web前端',
          cont: '想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人'
        },
        {
          img: require('../assets/pic2.jpg'),
          title: '如何建立个人网站',
          authorPhoto: require('../assets/photo.jpg'),
          authorName: '张孝德',
          releaseTime: '2017-03-13 17:29:56',
          type: 'web前端',
          cont: '想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人'
        },
        {
          img: require('../assets/pic3.jpg'),
          title: '如何建立个人网站',
          authorPhoto: require('../assets/photo.jpg'),
          authorName: '张孝德',
          releaseTime: '2017-03-13 17:29:56',
          type: 'web前端',
          cont: '想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人'
        }
      ],
      entranceList: [
        {
          img: require('../assets/pic1.jpg')
        },
        {
          img: require('../assets/pic2.jpg')
        },
        {
          img: require('../assets/pic3.jpg')
        },
        {
          img: require('../assets/pic4.jpg')
        }
      ],
      forumList: [
        {
          photo: require('../assets/photo.jpg'),
          name: '阿卡丽',
          chat: '阿萨德客观环境埃里克森的感觉拉速度公交卡拉速度管理看到赶快拉上决定公司打开啦国家开始给觉得'
        },
        {
          photo: require('../assets/pic1.jpg'),
          name: '阿卡丽',
          chat: '阿萨德客观环境埃里克森的感觉拉速度公交卡拉速度管理看到赶快拉上决定公司打开啦国家开始给觉得'
        },
        {
          photo: require('../assets/pic2.jpg'),
          name: '阿卡丽',
          chat: '阿萨德客观环境埃里克森的感觉拉速度公交卡拉速度管理看到赶快拉上决定公司打开啦国家开始给觉得'
        },
        {
          photo: require('../assets/pic3.jpg'),
          name: '阿卡丽',
          chat: '阿萨德客观环境埃里克森的感觉拉速度公交卡拉速度管理看到赶快拉上决定公司打开啦国家开始给觉得'
        }
      ],
      websiteList: [
        {
          calssName: 'bd',
          webName: '百度(百度一下，你就知道)',
          url: 'https://www.baidu.com'
        },
        {
          calssName: 'tb',
          webName: '淘宝网(淘，我喜欢)',
          url: 'https://world.taobao.com'
        },
        {
          calssName: 'tm',
          webName: '天猫(上天猫，就购了)',
          url: 'https://www.tmall.com'
        },
        {
          calssName: 'jd',
          webName: '京东商城(网购上京东，省钱又放心)',
          url: 'https://www.jd.com'
        },
        {
          calssName: 'sn',
          webName: '苏宁易购(苏宁易购，购生活，购幸福)',
          url: 'https://www.suning.com'
        },
        {
          calssName: 'qn',
          webName: '去哪儿(聪明你的旅行)',
          url: 'https://www.qunar.com'
        },
        {
          calssName: 'tc',
          webName: '58同城(一个神奇的网站)',
          url: 'https://hz.58.com'
        },
        {
          calssName: 'xc',
          webName: '携程旅行(酒店预订服务中心)',
          url: 'http://www.ctrip.com'
        }
        // {
        //   calssName: 'tx',
        //   webName: '腾讯(你的心声，世界的回声)',
        //   url: 'http://www.qq.com'
        // },
        // {
        //   calssName: 'wy',
        //   webName: '网易(网聚人的力量)',
        //   url: 'https://www.163.com'
        // },
        // {
        //   calssName: 'sh',
        //   webName: '搜狐(搜狐-中国最大的门户网站)',
        //   url: 'http://www.sohu.com'
        // },
        // {
        //   calssName: 'xl',
        //   webName: '新浪(世界在你眼中)',
        //   url: 'https://www.sina.com.cn'
        // },
        // {
        //   calssName: 'jhs',
        //   webName: '聚划算(无所不能聚)',
        //   url: 'https://ju.taobao.com'
        // },
        // {
        //   calssName: 'yk',
        //   webName: '优酷(这世界很酷)',
        //   url: 'https://www.youku.com'
        // }
      ],
      photoList: [
        {img: require('../assets/pic1.jpg')},
        {img: require('../assets/pic2.jpg')},
        {img: require('../assets/pic3.jpg')},
        {img: require('../assets/pic4.jpg')},
        {img: require('../assets/pic5.jpg')},
        {img: require('../assets/pic6.jpg')},
        {img: require('../assets/pic7.jpg')},
        {img: require('../assets/photo.jpg')},
        {img: require('../assets/pic1.jpg')},
        {img: require('../assets/pic2.jpg')},
        {img: require('../assets/pic3.jpg')},
        {img: require('../assets/pic4.jpg')},
        {img: require('../assets/pic5.jpg')},
        {img: require('../assets/pic6.jpg')},
        {img: require('../assets/pic7.jpg')},
        {img: require('../assets/photo.jpg')},
        {img: require('../assets/pic1.jpg')},
        {img: require('../assets/pic2.jpg')},
        {img: require('../assets/pic3.jpg')},
        {img: require('../assets/pic4.jpg')},
        {img: require('../assets/pic5.jpg')},
        {img: require('../assets/pic6.jpg')},
        {img: require('../assets/pic7.jpg')},
        {img: require('../assets/photo.jpg')},
        {img: require('../assets/pic1.jpg')},
        {img: require('../assets/pic2.jpg')},
        {img: require('../assets/pic3.jpg')},
        {img: require('../assets/pic4.jpg')},
        {img: require('../assets/pic5.jpg')},
        {img: require('../assets/pic6.jpg')}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homePage{
  width:1200px;margin:20px auto;overflow:hidden;
  .mainLeft{
    float:left;width:840px;
    .content{
      overflow:hidden;
      .contentLeft{
        float:left;width:230px;
        .article{
          height:480px;
          .boxCont{
            top:42px;
            li{
              height:27px;
            }
            a{
              position:relative;float:left;width:135px;height:27px;padding:0 5px 0 20px;color:#eee;font:normal 12px/27px "SimSun";overflow:hidden;text-overflow: ellipsis;white-space: nowrap;
              &:before{
                position:absolute;top:7px;left:10px;width:0;height:0;content:"";border-top:solid 5px transparent;border-bottom:solid 5px transparent;border-left:solid 5px #41B511;
              }
            }
            span{
              float:right;width:68px;height:27px;color:#999;font:normal 12px/27px "SimSun";
            }
          }
        }
      }
      .portrait{
        height:150px;margin-bottom:10px;
        img{
          width:100%;height:100%;
        }
      }
      .introduction{
        height:330px;margin-bottom:10px;
        .boxCont li{
          line-height:26px;padding:0 10px;font:normal 14px/26px "Microsoft Yahei";
          span{
            float:left;width:50px;height:26px;overflow:hidden;color:#f8f;font-weight:bold;text-align: justify;text-justify: distribute-all-lines;text-align-last: justify;
          }
          i{
            float:left;padding:0 3px;font-style:normal;text-align:right;color:#f8f;font-weight:bold;
          }
        }
      }
      .contentRight{
        float:right;width:600px;
        .project{
          overflow:hidden;margin:-5px -5px 0;
        }
        .projectItem{
          float:left;width:295px;height:157px;margin:5px;
          a{
            display:block;height:147px;overflow:hidden;padding:5px;background:#222;
          }
          img{
            width:100%;height:100%;
          }
        }
        .articleList{
          height:485px;overflow:hidden;margin-bottom:-5px;
        }
        .listItem{
          float:left;box-sizing:border-box;width:100%;height:153px;padding:20px 10px;margin:5px 0;background:#efefef;
          &:hover{
            opacity:0.8;
          }
          .img{
            float:left;width:150px;height:113px;
            img{
              width:100%;height:100%;
            }
          }
          .txt{
            float:left;width:410px;height:113px;margin-left:20px;
          }
          .tit{
            height:30px;color:#333;font:bold 16px/30px "Microsoft Yahei";
          }
          .author{
            height:26px;overflow:hidden;
            img{
              float:left;width:26px;height:26px;border-radius:13px;margin-right:10px;
            }
            span{
              float:left;height:26px;color:#999;font:normal 12px/26px "Microsoft Yahei";
            }
          }
          .cont{
            height:54px;color:#666;font:normal 12px/18px "Microsoft Yahei";text-indent:2em;
          }
        }
      }
    }
  }
  .box{
    position:relative;box-sizing:border-box;border:solid 1px #08f;border-radius:5px;overflow:hidden;
    .boxTit{
      height:32px;background:#08f;color:#fff;text-indent:1em;font:bold 16px/32px "Microsoft Yahei";
      .more{
        float:right;line-height:32px;margin-right:10px;color:#03FFEA;font-size:14px;
      }
      .boxCont{
        position:absolute;top:37px;bottom:10px;left:0;width:100%;overflow:hidden;
      }
    }
  }
  .mainRight{
    float:right;width:350px;
    .entrance{
      height:188px;margin:0 -5px 5px;
      a{
        float:left;width:170px;height:91px;margin:0 5px 5px;border-radius:5px;overflow:hidden;
      }
      img{
        width:100%;height:100%;
      }
    }
    .forum{
      height:296px;margin-bottom:8px;border:dashed 1px #ccc;
      .forumItem{
        display:block;padding:5px 10px;text-decoration:none;
        .name{
          height:22px;color:#fff;font:normal 16px/22px "Microsoft Yahei";
          span{
            float:left;width:22px;height:22px;border-radius:15px;margin-right:10px;overflow:hidden;
          }
          img{
            float:left;width:22px;height:22px;
          }
        }
        .chat{
          color:#bababa;font:normal 12px/18px "Microsoft Yahei";text-indent:2em;padding:3px 0;
        }
      }
    }
    .taobao{
      height:206px;margin-bottom:5px;
      a{
        display:block;height:206px;background:url(../assets/shop.jpg) no-repeat center center;background-size:auto 100%;
      }
    }
    .website{
      height:270px;
      a{
        display:block;height:28px;color:#eee;font:normal 14px/28px "Microsoft Yahei";padding-left:25px;
        &.bd{background:url(../assets/baidu.png) no-repeat left center;}
        &.tb{background:url(../assets/tb.png) no-repeat left center;}
        &.tm{background:url(../assets/tm.png) no-repeat left center;}
        &.jd{background:url(../assets/jd.png) no-repeat left center;}
        &.sn{background:url(../assets/sn.png) no-repeat left center;}
        &.qn{background:url(../assets/qn.png) no-repeat left center;}
        &.tc{background:url(../assets/tc.png) no-repeat left center;}
        &.xc{background:url(../assets/xc.png) no-repeat left center;}
        &.tx{background:url(../assets/tx.png) no-repeat left center;}
        &.wy{background:url(../assets/wy.png) no-repeat left center;}
        &.sh{background:url(../assets/sh.png) no-repeat left center;}
        &.xl{background:url(../assets/xl.png) no-repeat left center;}
        &.jhs{background:url(../assets/jhs.png) no-repeat left center;}
        &.yk{background:url(../assets/yk.png) no-repeat left center;}
      }
      .boxCont{
        padding:0 10px;
      }
    }
  }
  .photo{
    float:left;width:100%;height:auto;margin-top:10px;overflow: hidden;
    .boxCont{
      position: relative;top: 0;bottom: 0;left: 0;margin:5px;column-count:6;
      .photoItem{
        display:inline-block;margin:6px 5px;
        a{
          display:inline-block;width:185px;height:auto;
          &:hover{
            opacity:0.6;
          }
        }
        img{
          width:100%;height:auto;
        }
      }
    }
  }
}
</style>
