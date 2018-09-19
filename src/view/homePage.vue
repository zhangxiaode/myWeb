<template>
  <div class="main homePage">
    <div class="mainLeft">
      <div class="content">
        <div class="contentLeft">
          <div class="portrait"></div>
          <div class="box introduction">
            <div class="boxTit">
              个人信息
            </div>
            <div class="boxCont">
              <ul>
                <li><span>姓名</span><i>:</i>张孝德</li>
                <li><span>出生日期</span><i>:</i>1992/05/27</li>
                <li><span>身高</span><i>:</i>172</li>
                <li><span>专长</span><i>:</i>前端开发</li>
                <li><span>电话</span><i>:</i>15057159482</li>
                <li><span>Q Q</span><i>:</i>1243019627</li>
                <li><span>E m a i l</span><i>:</i>1243019617@qq.com</li>
                <li><span>住址</span><i>:</i>浙江省杭州市西湖区</li>
                <li><span>座右铭</span><i>:</i>学无止境</li>
                <li><span>兴趣</span><i>:</i>3D室内设计、全息投影、虚拟现实VR、增强现实AR...</li>
                <!-- <li><span>个人主页：</span><a href="http://www.zhangxiaode.com">www.zhangxiaode.com</a></li>
                <li><span>最喜欢的一句话：</span>有起伏的道路，才能看到更多的风景。</li>
                <li><span>喜欢的动物：</span>龟、鱼、狗</li>
                <li><span>兴趣：</span>3D室内设计、全息投影、虚拟现实VR、增强现实AR</li>
                <li><span>个人简介：</span>2015年就职于杭州天阙科技有限公司，从业年限三年</li> -->
              </ul>
            </div>
          </div>
          <div class="box article">
            <div class="boxTit">
              文章精要 <a href="javascript:;" class="more">更多</a>
            </div>
            <div class="boxCont">
              <ul>
                <li v-for="(item,index) in 16" :key="index">
                  <a href="javascript:;">阿克江单身公害卡十，多个卡十多个卡兰蒂斯更何。况卡戴珊个</a>
                  <span>2017/05/02</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="contentRight">
          <div class="project">
            <div class="projectItem" v-for="(item,index) in 6" :key="index">
              <a href="javascript:;"><img :src="pic"></a>
            </div>
          </div>
          <div class="articleList">
            <a href="javascript:;" class="listItem" v-for="(item,index) in 3" :key="index">
              <div class="img">
                <img :src="pic">
              </div>
              <div class="txt">
                <h2 class="tit">如何建立个人网站</h2>
                <p class="author"><img :src="photo"><span>张孝德 发布时间： 2017-03-13 17:29:56 分类：web前端</span></p>
                <p class="cont">想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mainRight">
      <div class="entrance">
        <a href="javascript:;" v-for="(item,index) in 4" :key="index"><img :src="pic"></a>
      </div>
      <div class="forum">
        <a href="javascript:;" class="forumItem" v-for="(item,index) in 4" :key="index">
          <div class="name"><span><img :src="pic"></span>阿卡丽：</div>
          <div class="chat">阿萨德客观环境埃里克森的感觉拉速度公交卡拉速度管理看到赶快拉上决定公司打开啦国家开始给觉得</div>
        </a>
      </div>
      <div class="taobao">
        <a href="javascript:;"></a>
      </div>
      <div class="website box">
        <div class="boxTit">
          网站推广
        </div>
        <div class="boxCont">
          <a href="javascript:;" class="bd">百度(百度一下，你就知道)</a>
          <a href="javascript:;" class="tb">淘宝网(淘，我喜欢)</a>
          <a href="javascript:;" class="tm">天猫(上天猫，就购了)</a>
          <a href="javascript:;" class="jd">京东商城(网购上京东，省钱又放心)</a>
          <a href="javascript:;" class="sn">苏宁易购(苏宁易购，购生活，购幸福)</a>
          <a href="javascript:;" class="qn">去哪儿(聪明你的旅行)</a>
          <a href="javascript:;" class="tc">58同城(一个神奇的网站)</a>
          <a href="javascript:;" class="xc">携程旅行(酒店预订服务中心)</a>
          <a href="javascript:;" class="tx">腾讯(你的心声，世界的回声)</a>
          <a href="javascript:;" class="wy">网易(网聚人的力量)</a>
          <a href="javascript:;" class="sh">搜狐(搜狐-中国最大的门户网站)</a>
          <a href="javascript:;" class="xl">新浪(世界在你眼中)</a>
          <a href="javascript:;" class="jhs">聚划算(无所不能聚)</a>
          <a href="javascript:;" class="yk">优酷(这世界很酷)</a>
          <a href="javascript:;" class="bd">百度(百度一下，你就知道)</a>
          <a href="javascript:;" class="tb">淘宝网(淘，我喜欢)</a>
          <a href="javascript:;" class="tm">天猫(上天猫，就购了)</a>
          <a href="javascript:;" class="jd">京东商城(网购上京东，省钱又放心)</a>
          <a href="javascript:;" class="sn">苏宁易购(苏宁易购，购生活，购幸福)</a>
          <a href="javascript:;" class="qn">去哪儿(聪明你的旅行)</a>
          <a href="javascript:;" class="tc">58同城(一个神奇的网站)</a>
          <a href="javascript:;" class="xc">携程旅行(酒店预订服务中心)</a>
          <a href="javascript:;" class="tx">腾讯(你的心声，世界的回声)</a>
          <a href="javascript:;" class="wy">网易(网聚人的力量)</a>
        </div>
      </div>
    </div>
    <div class="box photo">
      <div class="boxTit">
        我的相册<a href="javascript:;" class="more">更多</a>
      </div>
      <div class="boxCont">
        <div class="photoItem" v-for="(item,index) in 30" :key="index">
          <a href="javascript:;"><img :src="pic"></a>
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
      pic: require('../assets/pic1.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homePage{
  width:1200px;margin:0 auto;overflow:hidden;
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
          }
        }
      } 
      .portrait{
        height:150px;margin-bottom:10px;background:url(../assets/photo.jpg) no-repeat center center;background-size:cover;
      } 
      .introduction{
        height:330px;margin-bottom:10px;
        .boxCont li{
          line-height:26px;padding:0 10px;font:normal 14px/26px "Microsoft Yahei";
          span{
            float:left;width:50px;color:#f8f;font-weight:bold;text-align: justify;text-justify: distribute-all-lines;text-align-last: justify;
          }
          i{
            float:left;padding:0 3px;font-style:normal;text-align:right;color:#f8f;font-weight:bold;
          }
        }
      }
      .box{
        position:relative;box-sizing:border-box;border:solid 1px #08f;border-radius:5px;overflow:hidden;
      }
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
  }
  .mainLeft .content .contentLeft .article .boxCont li{
    height:27px;
  }
  .mainLeft .content .contentLeft .article .boxCont li a{
    position:relative;float:left;width:135px;height:27px;padding:0 5px 0 20px;color:#333;font:normal 12px/27px "SimSun";overflow:hidden;text-overflow: ellipsis;white-space: nowrap;
  }
  .mainLeft .content .contentLeft .article .boxCont li a:before{
    position:absolute;top:7px;left:10px;width:0;height:0;content:"";border-top:solid 5px transparent;border-bottom:solid 5px transparent;border-left:solid 5px #41B511;
  }
  .mainLeft .content .contentLeft .article .boxCont li span{
    float:right;width:68px;height:27px;color:#666;font:normal 12px/27px "SimSun";
  }
  .mainLeft .content .contentRight{
    float:right;width:600px;
  }
  .mainLeft .content .contentRight .project{
    overflow:hidden;margin:-5px -5px 0;
  }
  .mainLeft .content .contentRight .project .projectItem{
    float:left;width:295px;height:157px;margin:5px;
  }
  .mainLeft .content .contentRight .project .projectItem a{
    display:block;height:147px;overflow:hidden;padding:5px;background:#222;
  }
  .mainLeft .content .contentRight .project .projectItem img{
    width:100%;height:100%;
  }
  .mainLeft .content .contentRight .articleList{
    height:485px;overflow:hidden;margin-bottom:-5px;
  }
  .mainLeft .content .contentRight .articleList .listItem{
    float:left;box-sizing:border-box;width:100%;height:153px;padding:20px 10px;margin:5px 0;background:#efefef;
  }
  .mainLeft .content .contentRight .articleList .listItem:hover{
    opacity:0.8;
  }
  .mainLeft .content .contentRight .articleList .listItem .img{
    float:left;width:150px;height:113px;
  }
  .mainLeft .content .contentRight .articleList .listItem .img img{
    width:100%;height:100%;
  }
  .mainLeft .content .contentRight .articleList .listItem .txt{
    float:left;width:410px;height:113px;margin-left:20px;
  }
  .mainLeft .content .contentRight .articleList .listItem .tit{
    height:30px;color:#333;font:bold 16px/30px "Microsoft Yahei";
  }
  .mainLeft .content .contentRight .articleList .listItem .author{
    height:26px;overflow:hidden;
  }
  .mainLeft .content .contentRight .articleList .listItem .author img{
    float:left;width:26px;height:26px;border-radius:13px;margin-right:10px;
  }
  .mainLeft .content .contentRight .articleList .listItem .author span{
    float:left;height:26px;color:#999;font:normal 12px/26px "Microsoft Yahei";
  }
  .mainLeft .content .contentRight .articleList .listItem .cont{
    height:54px;color:#666;font:normal 12px/18px "Microsoft Yahei";text-indent:2em;
  }
  .mainRight{
    float:right;width:350px;
  }
  .mainRight .entrance{
    height:188px;margin:0 -5px 5px;
  }
  .mainRight .entrance a{
    float:left;width:170px;height:91px;margin:0 5px 5px;border-radius:5px;overflow:hidden;
  }
  .mainRight .entrance img{
    width:100%;height:100%;
  }
  .mainRight .forum{
    height:296px;margin-bottom:8px;border:dashed 1px #ccc;
  }
  .mainRight .forum .forumItem{
    display:block;padding:5px 10px;text-decoration:none;
  }
  .mainRight .forum .forumItem .name{
    height:22px;color:#333;font:normal 16px/22px "Microsoft Yahei";
  }
  .mainRight .forum .forumItem .name span{
    float:left;width:22px;height:22px;border-radius:15px;margin-right:10px;overflow:hidden;
  }
  .mainRight .forum .forumItem .name span img{
    float:left;width:22px;height:22px;
  }
  .mainRight .forum .forumItem .chat{
    color:#999;font:normal 12px/18px "Microsoft Yahei";text-indent:2em;padding:3px 0;
  }
  .mainRight .taobao{
    height:206px;margin-bottom:5px;
  }
  .mainRight .taobao a{
    display:block;height:206px;background:url(../assets/shop.jpg) no-repeat center center;background-size:auto 100%;
  }
  .mainRight .website{
    height:270px;
  }
  .mainRight .website a{
    display:block;height:28px;color:#666;font:normal 14px/28px "Microsoft Yahei";padding-left:25px;
  }
  .mainRight .website .boxCont{
    padding:0 10px;
  }
  .mainRight .website a.bd{background:url(../assets/baidu.png) no-repeat left center;}
  .mainRight .website a.tb{background:url(../assets/tb.png) no-repeat left center;}
  .mainRight .website a.tm{background:url(../assets/tm.png) no-repeat left center;}
  .mainRight .website a.jd{background:url(../assets/jd.png) no-repeat left center;}
  .mainRight .website a.sn{background:url(../assets/sn.png) no-repeat left center;}
  .mainRight .website a.qn{background:url(../assets/qn.png) no-repeat left center;}
  .mainRight .website a.tc{background:url(../assets/tc.png) no-repeat left center;}
  .mainRight .website a.xc{background:url(../assets/xc.png) no-repeat left center;}
  .mainRight .website a.tx{background:url(../assets/tx.png) no-repeat left center;}
  .mainRight .website a.wy{background:url(../assets/wy.png) no-repeat left center;}
  .mainRight .website a.sh{background:url(../assets/sh.png) no-repeat left center;}
  .mainRight .website a.xl{background:url(../assets/xl.png) no-repeat left center;}
  .mainRight .website a.jhs{background:url(../assets/jhs.png) no-repeat left center;}
  .mainRight .website a.yk{background:url(../assets/yk.png) no-repeat left center;}
  .photo{
    float:left;width:100%;height:auto;margin-top:10px;overflow: hidden;
  }
  .photo .boxCont{
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    margin:5px;
    width:auto;
  }
  .photo .photoItem{
    display:inline-block;margin:6px 5px;
  }
  .photo .photoItem a{
    display:inline-block;width:185px;height:95px;overflow:hidden;
  }
  .photo .photoItem a:hover{
    opacity:0.6;
  }
  .photo .photoItem img{
    width:auto;height:auto;
  }
}
</style>
