<template lang="html">
    <div class="school">
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark school_top">
            <!--<xuetangimg src="../assets/images/a1.jpg" alt="" style="width:100%; height: 100vh;">-->
            <p>氢学堂</p>
            <p>氢学堂构建了以SAAS平台为载体， 培训咨询为支撑，兼顾运营效率与 成果落地的一体化企业移动大学解 决方案体系。</p>
            <el-row class="qingKe_top">
          <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="5"><div class="qingKe_top_left">氢云新媒体
          </div></el-col>
          <el-col :span="11"><div class="qingKe_top_right">
            <div>关于氢学堂</div>
            <div>平台体系/培训咨询体系</div>
            <div >经典案例</div>
            <div >百万客户选择</div>
          </div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
          </div></el-col>
        </el-row>
      <div class="sy_car_third">
        <p>关于氢学堂 </p>
        <p>氢学堂构建了以SAAS平台为载体，培训咨询为支撑， 兼顾运营效率与成果落地的一体化企业移动大学解决方案体系。 致力于推动每一家企业拥有自己的企业大学。</p>
        <el-row>
              <el-col :span="24"><div class="grid-content">
              <div>
                  <img src="../assets/images/yunschool.png" alt="">
               </div>
              </div></el-col>
            </el-row>
      </div>
      <div class="school_car_second">
        <p>平台体系解决方案</p>
        <p>SAAS</p>
        <p>(系统，实时，实效)</p>
         <el-row>
          <el-col :span="6" :push="9">
            <el-row>
              <el-col :span="24"><div class="">
              <p class="a"></p>
                <div class="qingKe_list">
                   <div class="">
                      <el-carousel trigger="click" height="30rem" indicator-position="outside" :autoplay="false" arrow="always">
                        <el-carousel-item v-for="item in 3" :key="item" >
                          <span>
                            <div style="margin-left: 4rem">让培训更系统</div>
                             <ul style="list-style-type: circle;text-align: left;margin-left: 5rem">
                               <li>1.考试，分析，汇总(随堂测试，课后实践，成果展现) </li>
                               <li>2.学习路径图，学习积分，积分商城 (学习驱动机制，助力绩效改进）</li>
                               <li>3.数据分析，进度监控(学习数据可视化，培训效果即时跟进) </li>
                               <li>4.自定义组块(高效管理组织、兼顾学习共性与个性)</li>
                             </ul>
                          </span>
                        </el-carousel-item>

                      </el-carousel>
                    </div>
                </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        <div class="school_car_third">
        <p>培训咨询体</p>
        <p>系解决方案</p>
        <p>(课程体系，师资体系，运营体系)</p>
        <el-row>
          <el-col :span="8" :push="8">
            <el-row>
              <el-col :span="24"><div class="">
                <div class="">
                   <div class="min" style="margin-top: 1rem">
                      <el-carousel  type="card" height="5rem" indicator-position="outside"  :autoplay="false" arrow="never">
                        <el-carousel-item class="lunBo">
                          <span>师资体系</span>
                          <div>帮助企业打造内部金牌讲师</div>
                        </el-carousel-item >
                        <el-carousel-item class="lunBo">
                          <span>课程体系</span>
                          <div>帮助企业萃取内部成功经验 </div>
                        </el-carousel-item>
                        <el-carousel-item class="lunBo">
                          <span>师资体系</span>
                          <div>帮助企业打造内部金牌讲师</div>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        <el-row>s
          <el-col :span="6" :push="9">
            <el-row>
              <el-col :span="24"><div class="">
              <p class="a"></p>
                <div class="qingKe_list">
                   <div class="">
                      <el-carousel trigger="click" height="30rem" indicator-position="outside" :arrow="always" :autoplay="false" arrow="always">
                        <el-carousel-item v-for="item in 3" :key="item" >
                          <span>
                            <div style="margin-left: 4rem">让培训更系统</div>
                             <ul style="list-style-type: circle;text-align: left;margin-left: 5rem">
                               <li>1.考试，分析，汇总(随堂测试，课后实践，成果展现) </li>
                               <li>2.学习路径图，学习积分，积分商城 (学习驱动机制，助力绩效改进）</li>
                               <li>3.数据分析，进度监控(学习数据可视化，培训效果即时跟进) </li>
                               <li>4.自定义组块(高效管理组织、兼顾学习共性与个性)</li>
                             </ul>
                          </span>
                        </el-carousel-item>

                      </el-carousel>
                    </div>
                </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
      </div>
  <div class="school_car_second">
        <p>服务保障</p>
        <div>技术支持</div>
        <el-row>
          <el-col :span="24">
            <div class="school_card">
              <span></span>
              <span>
                <ul style="text-align: left">
                  <li>氢学堂企业微学习平台是基于阿里云提供的SaaS服务开发， 依托其强大的网络运维能力，可以自动无缝升级网络服务能 力，快速扩充产品性能，满足客户持续增长的需求，承诺服 务水平不低于99.9%</li>
                  <li>服务期内，由项目经理对项目提供全年7*24小时服务支持， 支持方式包含微信（QQ）、电话、视频会议、上门面谈等。 由技术支持提供专业培训、实施支持、咨询研讨，保障客户 使用无忧！ </li>
                  <li>依托于GHR自身的知识库与课程库，本产品终身持续升级、 快速迭代，不断丰富各种学习场景、满足各种学习需求，可 定制提供相应需求的解决方案，帮助组织构建智慧大脑，完 善组织知识输入渠道，提升企业业务水平，助力企业人才发 展；</li>
                </ul>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
      </div>
      <div class="card_third">
      <p>专家团队</p>
      <el-row>
          <el-col :span="24">
            <div class="school_card">
              <span></span>
              <span>
                <ul>
                  <li>氢学堂企业微学习平台是基于阿里云提供的SaaS服务开发， 依托其强大的网络运维能力，可以自动无缝升级网络服务能 力，快速扩充产品性能，满足客户持续增长的需求，承诺服 务水平不低于99.9%</li>
                  <li>服务期内，由项目经理对项目提供全年7*24小时服务支持， 支持方式包含微信（QQ）、电话、视频会议、上门面谈等。 由技术支持提供专业培训、实施支持、咨询研讨，保障客户 使用无忧！ </li>
                  <li>依托于GHR自身的知识库与课程库，本产品终身持续升级、 快速迭代，不断丰富各种学习场景、满足各种学习需求，可 定制提供相应需求的解决方案，帮助组织构建智慧大脑，完 善组织知识输入渠道，提升企业业务水平，助力企业人才发 展；</li>
                </ul>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="sy_car_second">
        <p>成功案例</p>
        <p>环球人力资源智库（GHR/GHRlib）——  最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
            <el-col :span="12" :push="6">
              <el-row type="flex" justify="space-between">
              <el-col :span="12" :sm="24"><div class="grid-content">
                <div class="school_list">
                   <span></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span><img src="" alt=""></span>
                </div>
              </div></el-col>
              <el-col :span="12" :ms="24"><div class="grid-content">
                <div class="school_list">
                   <span></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span style="display: inline-block"><img src="" alt="" style="height:12rem;width:12rem;background-color: #ffffff"></span>
                </div>
              </div></el-col>

            </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :push="6">
              <el-row type="flex" justify="space-between">
             <el-col :span="12" :sm="24"><div class="grid-content">
                <div class="school_list">
                   <span></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span><img src="" alt=""></span>
                </div>
              </div></el-col>
              <el-col :span="12" :ms="24"><div class="grid-content">
                <div class="school_list">
                   <span></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span style="display: inline-block"><img src="" alt="" style="height:12rem;width:12rem;background-color: #ffffff"></span>
                </div>
              </div></el-col>
            </el-row>
            </el-col>
          </el-row>
      </div>
      <div class="sy_car_third">
        <p>百万HR的 共同选择 </p>
        <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
          <el-col :span="12" :push="6">
            <el-row :gutter="20">
              <el-col :span="6" :xs="12" :ms="14" :md="12" :lg="6" v-for="item in logos" key="logos">
                <div class="parent">
                  <div class="list_icon">
                    <div><img :src="getImg(item)" alt="" style="width: 13rem;"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="qingke_footer">
          <el-row>
          <el-col :span="16" :push="4">
            <el-row>
              <el-col :span="24"><div class="grid-content">
              <div>
                  <img src="../assets/images/logo.png" alt="" style="height: 5rem;width:rem;padding-top: 2rem">
               </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :push="4">
            <el-row type="flex" justify="space-around">
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>
              <span><img src="" alt=""></span>
              <span class="convention_bottom">175 66666 666</span>
              </p>
              <p>
              <span><img src="" alt=""></span>
              <span class="convention_bottom">上海市 长宁区</span>
              </p>
              <p>
              <span><img src="" alt=""></span>
              <span class="convention_bottom">GHRLIB@XX.COM</span>
              </p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>旗下品牌：</p>
              <p>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
              </p>
              <p>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
              </p>
              <p>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
                <span><img src="../assets/images/weiXin.png" alt="" style="height: 2rem;width:3rem;"></span>
              </p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>在线学习：</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              </div></el-col>
              <el-col :span="24"><div class="grid-content qingke_footer_word constant">
              <p>联系电话：</p>
              <p>培训业务</p>
              <p>微咨询</p>
              <p>在线学习</p>
              <p>广告合作</p>
              <p>市场合作</p>
              <p>加入我们</p>
              </div></el-col>
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>市场合作：</p>
              <p>市场合作：</p>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'school',
    data (){
      return{
        logos: [
          'ali.png',
          'tencent.png',
          'qs.png',
          'bayer-01.png',
          'flp.png',
          'ft.png',
          'parker-01.png',
          'liNing.png',
          'nh.png',
          'lianTong.png',
          'meiDi.png',
          'jh.png',
          'sq.png',
          'wangYi.png',
          'kpmg-01.png',
          'tcl-01.png'
        ]
      }
    },
    methods:{
      jumpClickRead(){
        this.$router.push('/clickRead')
      },
      getImg(url) {
        // console.log(url)'../assets/images/'+
        return require(`../assets/images/${url}`)
      }
    }
  }
</script>

<style lang="css" scoped>
  .school_top{
    height:100vh;
    width:100%;
    background-image: url("../assets/images/QXT.jpg");
    background-size: 100% 100%;
  }
  .school_top>p:nth-child(1){
    font-size: 6rem;
    color: #ffffff;
    position: absolute;
    top:30%;
    left: 30%;
  }
  .school_top>p:nth-child(2){
    font-size: 2rem;
    width:25%;
    position: absolute;
    color: orangered;
    top:45%;
    left: 30%;
  }
  .school_top>p:nth-child(3){
    color: #ffffff;
    font-size: 3rem;
    position: absolute;
    top:70%;
    left: 30%;
    left: 30%;
    vertical-align: top;
  }
  .qingKe_top{
    position: relative;
    background-color: #f4f4f4;
    height: 6rem;
    line-height: 6rem;
    border-bottom: 0.1rem solid gray;
    top:95%;
    z-index: 666;
  }
  .qingKe_top_left{
    font-size: 3rem;
    font-weight: 600;
  }
  .qingKe_top_right{
    display: flex;
    margin-top: 2rem;
  }
  .qingKe_top_right>div{
    text-align: center;
    width:25%;
    line-height: 2rem;
    font-size: 1.4rem;
    height: 2rem;
    border-right: 0.1rem solid gray;
    justify-content: space-around;
  }
  .school_top_top{
    width:100%;
    background-color: #ffffff;
    text-align: center;
  }
  .school_top_top>p:nth-child(1){
    font-size: 3rem;
    padding-top: 1%;
    font-weight: 600;
  }
  .qingKe_list{
    height:30rem;
    width:50rem;
    margin: 0 auto;
    background-color: #f4f4f4;
  }
  .qingKe_list>img{
    height:10rem;
    width:15rem;
    border:0.1rem solid gray;
  }
  .qingKe_list>p:nth-child(2){
    font-size: 2rem;
    margin-top: 5%;
  }
  .qingKe_list>p:nth-child(3){
    margin-top: 5%;
  }

  .school_list>span{
    display: inline-block;
  }
  .school_list>span:nth-child(1){
    position: absolute;
  }
  .school_list>span:nth-child(2)>p:nth-child(1){
    font-size: 2.5rem;
    font-weight: 600;
    width:30%;
    margin-top: 10%;
    margin-left: 5%;
  }
  .school_list>span:nth-child(2)>p:nth-child(2){
    /*position: absolute;*/
    top:10%;
    font-size: 1.2rem;
    margin-left: 6%;
    width:60%;
  }
  .school_list>span:nth-child(2)>span:nth-child(3){
    background-color: #595959;
    color: #ffffff;
    padding:0.3rem 0.8rem;
    font-size: 1.2rem;
    position: relative;
    top:5rem;
  }
  .school_list>span:nth-child(1){
    height:100%;
    width:0.8rem;
    background-color: #595959;
  }

  .qingke_footer{
    background-color: #222222;
  }
  .qingke_footer_word>p:nth-child(1){
    font-size: 1.4rem;
    color: #ffffff;
  }
  .qingke_footer_word>p{
    color: #ffffff;
  }
  .convention_bottom{
    font-size: 1.4rem;
  }
  .constant>p{
    margin-top: 0.5rem;
  }
  .school_car_second{
    background-color: #222222;
    box-sizing: border-box;
    padding-top: 3%;
    text-align: center;
    padding-bottom: 3%;
    margin: 0 auto;
  }
  .school_car_second>p:nth-child(1){
    color: #ffffff;
    font-size: 6rem;
  }
  .school_car_second>p:nth-child(2){
    color: #ffffff;
    font-size: 6rem;
  }
  .school_car_second>p:nth-child(3){
    font-size: 3rem;
    color: #ffffff;
    margin-left: 25%;
    margin-right: 25%;
    color: #FCD281;
    margin-bottom: 5%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
/*.min .el-carousel__container .el-carousel__item:nth-child(2n){*/
  /*background-color: transparent;*/
/*}*/
/*.min .el-carousel__container .el-carousel__item:nth-child(2n+1){*/
  /*background-color: transparent;*/
/*}*/
  .el-carousel__container .el-carousel__item:nth-child(2n) {
    background-color: #FDC02C;
  }

  .el-carousel__container .el-carousel__item:nth-child(2n+1) {
    background-color:#FDC02C;
  }
  .qingKe_list{
    height:30rem;
    width:50rem;
    margin: 0 auto;
    background-color: #FCD281;
  }
  .qingKe_list span div{
    font-size: 6rem;

  }
  .qingKe_list span ul{
    height: 20rem;
    width:33rem;
    text-align: right;

  }
.qingKe_list span ul li{
  display: inline-block;
  vertical-align: top;
  font-size: 1.4rem;
  margin-top: 0.1rem;
}

  .qingKe_list span{
    vertical-align: top;
    position: absolute;
    left: 3rem;

  }
  .a{
    height:30rem;
    width:2rem;
    background-color: #565656;
    z-index:777;
    vertical-align: top;
    position: absolute;
  }
  .school_car_third{
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding-top: 3%;
    text-align: center;
    padding-bottom: 3%;
    margin: 0 auto;
  }
  .school_car_third>p:nth-child(1){
    color: #000000;
    font-size: 6rem;
  }
  .school_car_third>p:nth-child(2){
    color: #000000;
    font-size: 6rem;
  }
  .school_car_third>p:nth-child(3){
    color:#565656;
    font-size: 3rem;
  }
  .el-carousel__container .el-carousel__arrow {
    background-color: #565656;
  }
  .el-carousel__container [class*=" el-icon-"], [class^=el-icon-]{
    font-weight: 600;
  }
  .lunBo>span{
    background-color: #565656;
    color: #ffffff;
    padding:0 2rem;
    font-size: 2rem;
  }
  .lunBo>div{
    font-size: 1.6rem;
  }
  .school_car_second>div:nth-child(2){
    color: #FCD281;
    font-size: 3rem;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .school_card{
    height:32rem;
    width:50rem;
    background-color: #ffbc08;
    margin: 0 auto;
    position: relative;
  }
  .school_card>span:nth-child(1){
    display: inline-block;
    height:32rem;
    width:1.8rem;
    background-color: #565656;
    position: absolute;
  }
  .school_card>span:nth-child(2)>ul{
    display: inline-block;
    font-size: 1.6rem;
    margin-left: 4rem;
    color: #565656;
    padding:2% 5%;
  }
  .school_card>span:nth-child(2)>ul>li{
    margin-top: 1rem;
  }
  .card_third{
    background-color: #ffffff;
  }
  .card_third>p{
    font-size: 6rem;
    text-align: center;
    color: #222222;
    margin-bottom: 2%;
    margin-top: 2%;
  }
  .school_list{
    height:18rem;
    width:25rem;
    background-color: #ffbc08;
  }
  .school_list>span{
    display: inline-block;
  }
  .school_list>span:nth-child(1){
    position: absolute;
  }
  .school_list>span:nth-child(2)>p:nth-child(1){
    font-size: 2.5rem;
    font-weight: 600;
    width:30%;
    margin-top: 10%;
    margin-left: 5%;
  }
  .school_list>span:nth-child(2)>p:nth-child(2){
    /*position: absolute;*/
    top:10%;
    margin-left: 6%;
    width:60%;
  }
  .school_list>span:nth-child(2)>p:nth-child(3){
    height:2rem;
    width:10rem;
    background-color:#565656;
    color: #ffffff;
    font-size: 1.2rem;
    margin-left: 7rem;
    margin-top: 8.4rem;
  }
  .school_list>span:nth-child(1){
    height:100%;
    width:0.8rem;
    background-color: #565656;
  }
  .school_list>span:nth-child(3){
    height:12rem;
    width: 12rem;
    background-color: #ffffff;
    border:0.1rem solid gray;
    position: absolute;
    top:2.8rem;
    margin-left: 6rem;
  }
</style>
