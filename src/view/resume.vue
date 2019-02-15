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
          <img src="../assets/photo.jpg" alt="">
        </div>
      </div>
      <div class="resumeSection">
        <div class="secTit"><span>技能应用</span></div>
        <div class="secCont">
          <p>1、熟悉Vue、h5、css3、es6、less，sass。</p>
          <p>2、熟悉Vue项目框架搭建,webpack项目环境配置，vue组件封装。</p>
          <p>3、熟悉react、jQuery、canvas、页面响应式设计、浏览器兼容、echarts等图表类组件。</p>
          <p>4、熟悉git与svn版本控制，有Linux、mac等平台开发经验,</p>
          <p>5、了解 react-native,angular,nodeJS,数据库MySQL和orical;后端开发语言php和Java;熟悉Photoshop,</p>
          <p>6、习惯编辑器：webstorm,visual-Studio-code，sublime，eclipse,</p>
          <p>附GitHub账号：https://github.com/zhangxiaode</p>
        </div>
      </div>
      <div class="resumeSection experience">
        <div class="secTit"><span>工作经历</span></div>
        <div class="secCont">
          <h2>浙江小赢卡乐信息技术有限公司（2017/9-2018/3）</h2>
          <p><strong>工作描述：</strong>在职期间主要负责金牛管家、贷加加、奥铄等项目的功能开发、组件开发及项目优化工作。项目涉及到权限控制、路由、状态管理、组件库、以及移动端项目与原生的交互等。</p>
          <p><strong> 项目经验：</strong></p>
          <p>1、金牛管家（卡卡消费）</p>
          <p><strong>项目描述：</strong>金牛管家是一款生活管家类app，项目部分列表及详情等页面由h5完成。卡卡消费是一款由h5独立开发的完善的现金贷项目，其中涉及身份认证，绑卡收款、信用认证、联系信息认证、第三方支付、借款还款流程控制、会员购模块等内容。</p>
          <p><strong>责任描述：</strong>主要负责卡卡消费的前端开发工作，搭建金牛管家项目框架，协助处理金牛管家内的疑难问题，包括路由设计，页面交互等。卡卡消费模块多涉及h5与原生的交互、风险控制、借款还款流程控制、身份与信用认证、支付宝付款接口调用等。使用技术栈有h5、vue、vue-router、vuex、es6、css3、sass、webpack、axios、regex等</p>
          <p><strong>项目地址：</strong>www.zhangxiaode.com/kkxf/</p>
          <p>2、贷加加</p>
          <p><strong>项目描述：</strong>项目描述：贷加加是一款在线贷款攻略类app，内含首页、贷款产品、攻略和个人信息四个模块。全部内容由h5实现。App包含各个现金贷产品入口、贷款攻略、资料认证、红包、积分、订单处理、个人收藏等内容。</p>
          <p><strong>责任描述：</strong>主要负责项目框架搭建、接口调试、权限控制、前端与原生的交互、解决bugger及项目发布等。涉及技术栈有：h5、css3、es6、vue、vue-router、vuex、elementUI、axios、es6-promise、vue-scroller等</p>
          <p><strong>项目地址：</strong>www.zhangxiaode.com/djjMobile/</p>
          <p>3、奥铄官网</p>
          <p><strong>项目描述：</strong>奥铄官网是2018年3月做的一个官网展示类网站，包括首页、公司要闻，关于我们三个模块；内容部分由静态json数据获取。</p>
          <p><strong>责任描述：</strong>主要负责项目的框架搭建、路由跳转、数据获取；涉及技术栈：vue、vue-router、es6等。</p>
          <p><strong>项目地址：</strong>www.zhangxiaode.com/aoshuo/</p>
          <h2>杭州天阙科技有限公司（2015/7-2017/8）</h2>
          <p><strong>工作描述：</strong>在职期间主要负责公司项目的前端开发及后期维护工作，工作期间曾出差北京、常德、银川、南昌等地，并获得优异的成绩，使公司的项目顺利验收。</p>
          <p><strong> 项目经验：</strong></p>
          <p>1、中央综治平台升级项目</p>
          <p><strong>项目描述：</strong>项目包括门户网、九大业务首页、大屏、新研判、地理信息系统GIS等内容</p>
          <p><strong>责任描述：</strong>主要负责该项目的前端工作，并控制项目进度，协调产品、设计、和前后端人员，最终使项目顺利发布使用，该项目受到领导的一致认同。使用技术栈有h5、css3、ajax、jquery、canvas等</p>
          <p><strong>项目地址：</strong>http://www.zhangxiaode/bigScreen/</p>
          <p>2、常德完美社区服务平台</p>
          <p><strong>项目描述：</strong>该项目包括首页、公共服务、公益服务、商业服务、社区论坛我的社区、监督评价等七个模块，以及注册、登录及个人信息等页面。</p>
          <p><strong>责任描述：</strong>由我负责该项目的前端工作，包括页面的布局、兼容性调试，后端数据对接、页面动画的实现等。使用技术栈有h5、css3、jquery、ajax等</p>
          <p><strong>项目地址：</strong>http://www.zhangxiaode/wmsq/</p>
          <p>3、常德市社会治理网格化综合信息平台二期</p>
          <p><strong>项目描述：</strong>常德市委常委政法委书记黄清宇书记要求常德市市级网格化平台从业务应用到系统页面和交互提出了非常高的要求，并要求定期整改完成，在此紧急情况下，和设计一起出差常德，支撑该项目的改版工作。</p>
          <p><strong>责任描述：</strong>出差常德，配合设计与开发完成该项目的改版工作，并在大屏上进行兼容性调试。使用技术栈有h5、css3、jquery、ajax、echarts等</p>
          <p><strong>项目地址：</strong>www.zhangxiaode.com/changde/</p>
          <h2>附Github项目地址如下：</h2>
          <p>龙虾养殖（技术栈：vue/es6/css3）：https://github.com/zhangxiaode/breed</p>
          <p>仿淘宝首页（技术栈：jquery/php/mysql）：https://github.com/zhangxiaode/itaobao</p>
          <p>仿淘宝移动端首页(技术栈：jquery/h5/css3/)：https://github.com/zhangxiaode/taobaoMobile</p>
          <p>仿YouTube制作视频插件（技术栈：h5-video）：https://github.com/zhangxiaode/video</p>
          <p>仿百度天气（技术栈：canvas）：https://github.com/zhangxiaode/weather</p>
        </div>
      </div>
      <div class="resumeSection">
        <div class="secTit"><span>个人爱好</span></div>
        <div class="secCont">
          喜欢爬山、健身、美食、旅游，喜欢热闹。
          技术方面，喜欢研究新技术，前端有es6、框架、组件、css3常用样式总结以及js底层方法的研究。有时间也会研究一些其他方面的技术，比如虚拟现实的web端实现(webvr)、全息投影、3dsmax室内设计
        </div>
      </div>
      <div class="resumeSection">
        <div class="secTit"><span>自我评价</span></div>
        <div class="secCont">
          本人性格稳重、真诚；热衷技术，积极主动，能吃苦耐劳，勇于承受压力，勇于创新；有很强的组织能力和团队协作精神，具有较强的适应能力；工作积极配合，具有较强的无私奉献精神。
          对待工作认真负责，善于沟通、协调，有较强的组织能力与团队意识；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。
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
        h2{
          font-size:16px;
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
      border:dotted 2px rgba(255,255,255,0.3);
      .resumeSection{
        .secTit{
          border-bottom:solid 1px #4c8cd6;
          height:36px;
          span{
            float:left;line-height:36px;padding:0 36px;
            background:#4c8cd6;color:#fff;
            border-top-left-radius: 36px;border-bottom-right-radius: 36px;
          }
        }
        .secCont{
          padding:15px;line-height:2;
        }
      }
      .profiles .secCont{
        display:flex;
        table{
          flex:1;
        }
      }
      .experience{
        h2{
          text-align:center;font-size:24px;
        }
        strong{
          font-size:18px;
        }
      }
    }
  }
</style>
