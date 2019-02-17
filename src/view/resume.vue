<template>
  <div class="main resume">
    <div class="resumeHd">
      <div class="resumeName">张孝德</div>
      <div class="job">
        <p>学无止境</p>
        <h2>求职目标: 前端开发</h2>
      </div>
      <div class="resumeIcon">
        <span v-for="(item,index) in icons" :key="index"><img :src="item" alt=""></span>
      </div>
    </div>
    <div class="resumeBd">
      <div class="resumeSection profiles">
        <div class="secTit"><span>个人概况</span></div>
        <div class="secCont">
          <table>
            <tr>
              <th>姓名</th>
              <td>张孝德</td>
              <th>性别</th>
              <td>男</td>
            </tr>
            <tr>
              <th>出生年月</th>
              <td>1992年5月</td>
              <th>籍贯</th>
              <td>河南省驻马店市</td>
            </tr>
            <tr>
              <th>目前住地</th>
              <td>浙江省杭州市西湖区</td>
              <th>婚姻状况</th>
              <td>未婚</td>
            </tr>
            <tr>
              <th>邮箱</th>
              <td>1243019627@qq.com</td>
              <th>联系电话</th>
              <td>15057159482</td>
            </tr>
            <tr>
              <th>毕业院校</th>
              <td>河南理工大学（全日制本科/2011-2015）</td>
              <th>专业</th>
              <td>电子信息工程</td>
            </tr>
          </table>
          <div class="photo">
            <img src="../assets/photo.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="resumeSection">
        <div class="secTit"><span>技能应用</span></div>
        <div class="secCont">
          <ul>
            <li>
              <h2>1、 前端框架及技术栈的使用</h2>
              <p>熟悉MVVM、MVC框架，深入理解模块化编程思想，熟悉前端编译和构建工具，熟练掌握webpack的各项配置，能够独立搭建基于webpack的项目,熟悉h5+css3+es6，熟练使用原生JavaScript编程。熟悉Vue项目框架搭建并深入理解框架及其设计原理，能熟练使用vue技术栈开发应用。熟悉webpack + vue + vue-router + vuex + axios + less/sass + elementUI/mintUI开发。熟悉react项目框架搭建并能熟练使用react开发项目，熟悉webpack + react + react-router + redux + less/sass + Ant Design/Ant Design Mobile开发。熟悉微信小程序、微信公众号开发、有移动端开发经验。</p>
              <p>熟悉jQuery、canvas及echarts、highcharts、d3等图表类组件的使用。</p>
              <p>了解angular、react native。</p>
            </li>
            <li>
              <h2>2、 后端及服务器相关</h2>
              <p>熟悉Java开发流程，深入理解面向对象编程思想，有spring boot + mybatis + maven + mysql项目开发经验，有gitlib服务器搭建经验，熟悉tomcat、apache项目配置及项目发布流程，熟悉https服务器搭建,熟悉linux/windows + apache + php + mysql项目搭建,熟悉nginx代理配置，熟悉phpmyadmin等数据库操作工具，对nodeJS、Orical也有一定了解。</p>
            </li>
            <li>
              <h2>3、 UI组件库</h2>
              <p>熟悉elementUI、antDesign、mint-ui、Ant Design Mobile、jQueryUI等UI组件库，有UI框架开发经验,能根据业务需求，封装高复用、可维护性好的前端基础组件。</p>
              <p>npm自开发组件库：<a target="_blank" href="https://www.npmjs.com/package/kangkang-ui">https://www.npmjs.com/package/kangkang-ui</a></p>
              <p>使用方法：npm install kangkang-ui (开发中)。</p>
            </li>
            <li>
              <h2>4、 操作系统</h2>
              <p>熟悉centos、ubuntu等Linux操作系统的使用、能熟练使用yum、apt、wget等Linux命令搭建服务器、有windows、Linux、mac等平台开发经验。</p>
            </li>
            <li>
              <h2>5、 编译工具</h2>
              <p>常用编辑器：VSCode、idea、webstorm、sublime、eclipse、wechat_devtools</p>
            </li>
            <li>
              <h2>6、 交互与设计</h2>
              <p>熟悉交互设计，对可用性、可访问性等用户体验知识有深刻理解,熟悉Photoshop及原型设计工具Axure RP。</p>
            </li>
            <li>
              <h2>7、 其他</h2>
              <p>熟悉前端工程化构建策略及工具webpack，掌握常见性能优化的方法，熟悉git、svn等版本控制系统，能熟练编写响应式的界面，具有Android、iPhone、iPad等智能手机上基于浏览器的h5应用开发经验，熟悉eslint代码规范，熟悉浏览器兼容，掌握 HTTP 及相关网络协议，熟悉项目发布流程，具有很强的技术研发和创新能力、良好的沟通表达能力、很强的业务理解和技术实现能力。</p>
              <p>GitHub分享：<a target="_blank" href="https://github.com/zhangxiaode">https://github.com/zhangxiaode</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="resumeSection experience">
        <div class="secTit"><span>工作经历</span></div>
        <div class="secCont">
          <h2>芮想信息科技有限公司（2018/4至今）</h2>
          <p><strong>工作描述：</strong>在职期间主要负责快乐菜场、数据开放平台等项目的功能开发、组件开发及项目优化工作。项目涉及到权限控制、路由、状态管理、组件库、以及移动端项目与原生的交互等，项目框架为vue</p>
          <p><strong> 项目经验</strong></p>
          <h3>1、快乐菜场</h3>
          <p><strong>项目描述：</strong>是在APP发布的方便公司员工在线订购食材的一款h5移动端应用，项目框架是vue+mint-ui，现已发布上线。项目主体包括在线订购、今日小票、历史订单三个模块，实现了线上预定，线下交付的一套商品预定流程。</p>
          <p><strong>责任描述：</strong>主要负责项目的前端框架搭建、页面切图、接口调试、兼容性调试、项目发布、对接app等工作。</p>
          <h3>2、数据开放平台</h3>
          <p><strong>项目描述：</strong>数据开放平台是为用户提供数据的开发平台。项目框架为vue+elementui，项目共分五大模块：登录模块、网关管理、接口文档、指标管理、管理中心，通过权限控制以实现对外的接口开放平台，使外部服务对象方便的调用公共接口的数据。</p>
          <p><strong>责任描述：</strong>主要负责服务模块、预警模块、监控模块、日志管理、接口文档、秘钥管理、合作媒体管理等模块的开发，页面书写、接口调试及权限控制。</p>
          <h2>浙江小赢卡乐信息技术有限公司（2017/9-2018/3）</h2>
          <p><strong>工作描述：</strong>在职期间主要负责金牛管家、贷加加、奥铄等项目的功能开发、组件开发及项目优化工作。项目涉及到权限控制、路由、状态管理、组件库、以及移动端项目与原生的交互等。</p>
          <p><strong> 项目经验</strong></p>
          <h3>1、金牛管家（卡卡消费）</h3>
          <p><strong>项目描述：</strong>金牛管家是一款生活管家类app，项目部分列表及详情等页面由h5完成。卡卡消费是一款由h5独立开发的完善的现金贷项目，其中涉及身份认证，绑卡收款、信用认证、联系信息认证、第三方支付、借款还款流程控制、会员购模块等内容。</p>
          <p><strong>责任描述：</strong>主要负责卡卡消费的前端开发工作，搭建金牛管家项目框架，协助处理金牛管家内的疑难问题，包括路由设计，页面交互等。卡卡消费模块多涉及h5与原生的交互、风险控制、借款还款流程控制、身份与信用认证、支付宝付款接口调用等。使用技术栈有h5、vue、vue-router、vuex、es6、css3、sass、webpack、axios、regex等</p>
          <p><strong>项目地址：</strong><a target="_blank" href="http://www.zhangxiaode.com/kkxf/">http://www.zhangxiaode.com/kkxf/</a></p>
          <h3>2、贷加加</h3>
          <p><strong>项目描述：</strong>项目描述：贷加加是一款在线贷款攻略类app，内含首页、贷款产品、攻略和个人信息四个模块。全部内容由h5实现。App包含各个现金贷产品入口、贷款攻略、资料认证、红包、积分、订单处理、个人收藏等内容。</p>
          <p><strong>责任描述：</strong>主要负责项目框架搭建、接口调试、权限控制、前端与原生的交互、解决bugger及项目发布等。涉及技术栈有：h5、css3、es6、vue、vue-router、vuex、elementUI、axios、es6-promise、vue-scroller等</p>
          <p><strong>项目地址：</strong><a target="_blank" href="http://www.zhangxiaode.com/djjMobile/">http://www.zhangxiaode.com/djjMobile/</a></p>
          <h3>3、奥铄官网</h3>
          <p><strong>项目描述：</strong>奥铄官网是2018年3月做的一个官网展示类网站，包括首页、公司要闻，关于我们三个模块；内容部分由静态json数据获取。</p>
          <p><strong>责任描述：</strong>主要负责项目的框架搭建、路由跳转、数据获取；涉及技术栈：vue、vue-router、es6等。</p>
          <p><strong>项目地址：</strong><a target="_blank" href="http://www.zhangxiaode.com/aoshuo/">http://www.zhangxiaode.com/aoshuo/</a></p>
          <h2>杭州天阙科技有限公司（2015/7-2017/8）</h2>
          <p><strong>工作描述：</strong>在职期间主要负责公司项目的前端开发及后期维护工作，工作期间曾出差北京、常德、银川、南昌等地，并获得优异的成绩，使公司的项目顺利验收。</p>
          <p><strong> 项目经验</strong></p>
          <h3>1、中央综治平台升级项目</h3>
          <p><strong>项目描述：</strong>项目包括门户网、九大业务首页、大屏、新研判、地理信息系统GIS等内容</p>
          <p><strong>责任描述：</strong>主要负责该项目的前端工作，并控制项目进度，协调产品、设计、和前后端人员，最终使项目顺利发布使用，该项目受到领导的一致认同。使用技术栈有h5、css3、ajax、jquery、canvas等</p>
          <p><strong>项目地址：</strong><a target="_blank" href="http://www.zhangxiaode.com/bigScreen/">http://www.zhangxiaode.com/bigScreen/</a></p>
          <h3>2、常德完美社区服务平台</h3>
          <p><strong>项目描述：</strong>该项目包括首页、公共服务、公益服务、商业服务、社区论坛我的社区、监督评价等七个模块，以及注册、登录及个人信息等页面。</p>
          <p><strong>责任描述：</strong>由我负责该项目的前端工作，包括页面的布局、兼容性调试，后端数据对接、页面动画的实现等。使用技术栈有h5、css3、jquery、ajax等</p>
          <p><strong>项目地址：</strong><a target="_blank" href="http://www.zhangxiaode.com/wmsq/">http://www.zhangxiaode.com/wmsq/</a></p>
          <h3>3、常德市社会治理网格化综合信息平台二期</h3>
          <p><strong>项目描述：</strong>常德市委常委政法委书记黄清宇书记要求常德市市级网格化平台从业务应用到系统页面和交互提出了非常高的要求，并要求定期整改完成，在此紧急情况下，和设计一起出差常德，支撑该项目的改版工作。</p>
          <p><strong>责任描述：</strong>出差常德，配合设计与开发完成该项目的改版工作，并在大屏上进行兼容性调试。使用技术栈有h5、css3、jquery、ajax、echarts等</p>
          <p><strong>项目地址：</strong><a target="_blank" href="http://www.zhangxiaode.com/changde/">http://www.zhangxiaode.com/changde/</a></p>
          <h2>个人项目</h2>
          <h3>1、亢亢点单</h3>
          <p><strong>项目描述：</strong>一款智能点餐的微信小程序，支持线下扫码点餐、在线支付功能。</p>
          <p><strong>前端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/newShopping.git">https://github.com/zhangxiaode/newShopping.git</a></p>
          <p><strong>后端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/shoppingJava.git">https://github.com/zhangxiaode/shoppingJava.git</a> 技术栈：spring-boot + maven + mybatis + mysql,该项目已配置nginx代理，并安装了ssl证书</p>
          <p><strong>接口访问地址为：</strong>https://wx.zxdkxl.com/apis/***</p>
          <h3>2、个人网站</h3>
          <p><strong>项目描述：</strong>用于展示个人信息的网站。</p>
          <p><strong>前端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/myWeb.git">https://github.com/zhangxiaode/myWeb.git</a> 技术栈：vue + vue-router + vuex + less + axios + elementUI</p>
          <p><strong>后端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/myWebJava.git">https://github.com/zhangxiaode/myWebJava.git</a> 技术栈：spring-boot + maven + mybatis + mysql,该项目已配置nginx代理，并安装了ssl证书</p>
          <p><strong>访问地址为：</strong><a target="_blank" href="https://www.zxdkxl.com">https://www.zxdkxl.com</a></p>
          <h3>3、个人网站移动端</h3>
          <p><strong>项目描述：</strong>用于展示个人信息的h5应用。</p>
          <p><strong>前端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/zxdMobile.git">https://github.com/zhangxiaode/zxdMobile.git</a> 技术栈：vue + vue-router + vuex + less + axios</p>
          <p><strong>后端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/zxdMobileJava.git">https://github.com/zhangxiaode/zxdMobileJava.git</a> 技术栈：spring-boot + maven + mybatis + mysql,该项目已配置nginx代理，并安装了ssl证书</p>
          <p><strong>访问地址为：</strong><a target="_blank" href="https://m.zxdkxl.com">https://m.zxdkxl.com</a></p>
          <h3>4、个人博客</h3>
          <p><strong>项目描述：</strong>一款类似于知乎的博客论坛。</p>
          <p><strong>前端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/blog.git">https://github.com/zhangxiaode/blog.git</a> 技术栈：react + react-router + redux + less + axios + Ant Design</p>
          <p><strong>后端git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/blogJava.git">https://github.com/zhangxiaode/blogJava.git</a> 技术栈：spring-boot + maven + mybatis + mysql,该项目已配置nginx代理，并安装了ssl证书</p>
          <p><strong>访问地址为：</strong><a target="_blank" href="https://blog.zxdkxl.com">https://blog.zxdkxl.com</a></p>
          <h3>5、kangkang-ui</h3>
          <p><strong>项目描述：</strong>自己设计的一款vue UI框架（待完善）</p>
          <p><strong>npm地址：</strong><a target="_blank" href="https://www.npmjs.com/package/kangkang-ui">https://www.npmjs.com/package/kangkang-ui</a></p>
          <h3>6、仿淘宝首页</h3>
          <p><strong>技术栈：</strong>jquery/php/mysql</p>
          <p><strong>git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/itaobao.git">https://github.com/zhangxiaode/itaobao.git</a></p>
          <p><strong>访问地址为：</strong><a target="_blank" href="http://www.zhangxiaode.com/itaobao/root/tcms/">http://www.zhangxiaode.com/itaobao/root/tcms/</a></p>
          <h3>7、仿YouTube视频插件制作</h3>
          <p><strong>技术栈：</strong>h5-video</p>
          <p><strong>git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/video.git">https://github.com/zhangxiaode/video.git</a></p>
          <p><strong>访问地址为：</strong><a target="_blank" href="http://www.zhangxiaode.com/video">http://www.zhangxiaode.com/video</a></p>
          <h3>8、仿百度天气</h3>
          <p><strong>技术栈：</strong>canvas</p>
          <p><strong>git地址：</strong><a target="_blank" href="https://github.com/zhangxiaode/weather.git">https://github.com/zhangxiaode/weather.git</a></p>
          <p><strong>访问地址为：</strong><a target="_blank" href="http://www.zhangxiaode.com/weather">http://www.zhangxiaode.com/weather</a></p>
        </div>
      </div>
      <div class="resumeSection">
        <div class="secTit"><span>个人爱好</span></div>
        <div class="secCont">
          <p>喜欢爬山、健身、美食、旅游。</p>
        </div>
      </div>
      <div class="resumeSection">
        <div class="secTit"><span>自我评价</span></div>
        <div class="secCont">
          <p>对待工作认真负责，善于沟通、协调，有较强的组织能力与团队意识；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。</p>
          <p>技术方面，热衷于新技术的研发，对各种编程语言都有涉猎，主修前端，兼做java，做过vue、react、jQuery、小程序、公众号，h5客户端应用、spring-boot后端开发等；搭建过gitlab服务、lamp服务、nginx服务、java服务、配置过ssl；开发过vue的UI框架，npm地址：<a target="_blank" href="https://www.npmjs.com/package/kangkang-ui">https://www.npmjs.com/package/kangkang-ui</a>；除此之外还熟悉原型设计工具rp和UI设计工具PS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyResume',
  data () {
    return {
      icons: [
        require('../assets/icon/degree.svg'),
        require('../assets/icon/bag.svg'),
        require('../assets/icon/pencil.svg')
      ]
    }
  },
  beforeCreate () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      window.location.href = 'https://m.zxdkxl.com/#/resume'
    } else {
      window.location.href = 'https://www.zxdkxl.com/#/resume'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .resume{
    position:fixed;top:0;left:0;right:0;bottom:0;z-index: 9999;
    background:#333;overflow:auto;
    font-size:16px;
    a{
      color:rgb(26, 135, 224);
    }
    .resumeHd{
      display:flex;justify-content: center;align-items: center;
      height:60px;padding:30px 0;
      .resumeName{
        padding:0 30px;height:60px;line-height:60px;
        font-size:30px;font-weight:bold;
        border-right:solid 3px #fff;
      }
      .job{
        display:flex;flex-direction: column;justify-content: center;
        padding:0 20px;height:60px;margin-right:50px;
        p{
          font-size:14px;margin-bottom:5px;
        }
      }
      .resumeIcon{
        display:flex;align-items:center;
        span{
          width:30px;height:30px;border-radius:30px;
          background:#4c8cd6;
          margin:10px;
        }
        img{
          width:20px;height:20px;margin:5px;
        }
      }
    }
    .resumeBd{
      width:80%;margin:0 auto;
      border:dotted 2px rgba(255,255,255,0.3);
      .resumeSection{
        .secTit{
          border-bottom:solid 1px #4c8cd6;
          height:36px;
          span{
            float:left;line-height:36px;padding:0 36px;
            background:#4c8cd6;color:#fff;font-weight: bold;
            border-top-left-radius: 36px;border-bottom-right-radius: 36px;
          }
        }
        .secCont{
          padding:15px;line-height:2;
        }
        p{
          text-indent: 2em;
        }
      }
      .profiles .secCont{
        display:flex;
        table{
          flex:1;
        }
        .photo{
          width:160px;height:160px;margin-right:100px;
          border-radius:50%;
          overflow:hidden;
          img{
            width:160px;margin-top:-10px;
          }
        }
      }
      .experience{
        h2{
          text-align:center;font-size:24px;
        }
        h3{
          font-size:18px;
        }
      }
    }
  }
</style>
