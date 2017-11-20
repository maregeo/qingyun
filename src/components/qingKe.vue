<template lang="html">
    <div class="qingKe">
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">
            <p class="qingKe-top-first">关于氢课</p>
            <p class="qingKe-top-second">氢课（上海）教育科技有限公司旗下 氢课qker.com，HR与管理者的在线 商学院！</p>
            <img src="../assets/images/QK.jpg" alt="" style="width:100%;">

          </div></el-col>
        </el-row>
        <el-row class="qingKe_top">
          <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="qingKe_top_left" style="text-align:center">氢课</div></el-col>
          <el-col :span="12"><div class="qingKe_top_right">
            <div>产品介绍</div>
            <div>在线学习</div>
            <div >联系方式</div>
          </div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark" >
            <div class="sy_car_third">
              <p style="margin-top: -4%">关于氢课</p>
              <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
            </div>
            <el-col :span="24">
            <div class="grid-content">
              <div class="btn_more"><a href="https://www.qker.com/mobile/index.html#/tab/home">点击此处进入氢课</a></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="grid-content qingKePhone" style="text-align: center ">
              <img src="../assets/images/qingKePhone.png" style="width:40%;" alt="">
            </div>
          </el-col>
          </div></el-col>
        </el-row>
        <div class="school_top_top">
          <p>在线学习</p>
          <el-row>
            <el-col :span="24">
              <el-row >

            </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :push="6">
              <el-row >
              <el-col :span="24" :ms="24"><div class="grid-content" style="text-align: center">
                <div class="qingKe_list" style="margin: 2rem auto" @click="jumpPublicClass">
                <img src="../assets/images/women.png" alt="">
                   <p>单课</p>
                   <p>长期专注于HR专业能力的发展和提升 以解决问题为出发点和立足点，注重实战</p>
                </div>
              </div></el-col>
              <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12"><div class="grid-content">
                <div class="qingKe_list" @click="jumpAsk" >
                <img src="../assets/images/man.png" alt="">
                   <p>系列课</p>
                   <p>全国丰富的学习资源在线听课是足不出户，立享精选好课</p>
                </div>
              </div></el-col>
              <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12"><div class="grid-content">
                <div class="qingKe_list" @click="jumpBenchmarking" style="margin-top: 2%">
                <img src="../assets/images/artical.png" alt="">
                    <p>文章</p>
                   <p>海量优质HR专业文章 立即阅读学习</p>
                </div>
              </div></el-col>
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
                  <img src="../assets/images/qingke.png" alt="" class="qingke-icon">
               </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :push="4">
            <el-row>
              <el-col :span="4" :xs="12"><div class="grid-content qingke_footer_word">
              <p>运营机构 : </p>
              <p>氢课（上海）教育科技有限公司</p>
              </div></el-col>

              <el-col :span="4" :xs="12"><div class="grid-content qingke_footer_word">
              <p>售前售后 :</p>
              <p><img src="../assets/images/chat.png" alt=""></p>
              <p>GHRVIP13</p>
              <p><img src="../assets/images/sale.png" alt=""></p>
              </div></el-col>

              <el-col :span="4" :xs="12"><div class="grid-content qingke_footer_word">
              <p>市场合作：</p>
              <p><img src="../assets/images/chat.png" alt=""></p>
              <p>GHRVIP25</p>
              <p><img src="../assets/images/email.png" alt=""></p>
              <p>marketing@ghrlib.com</p>
              <p><img src="../assets/images/cooperation.png" alt=""></p>
              </div></el-col>

              <el-col :span="4" :xs="12"><div class="grid-content qingke_footer_word">
              <p>讲师合作：</p>
              <p><img src="../assets/images/chat.png" alt=""></p>
              <p>GHRVIP1</p>
              <img src="../assets/images/teacher.png" alt="">
              </div></el-col>
              <el-col :span="4" :xs="12"><div class="grid-content qingke_footer_word">
              <p>热线电话：</p>
              <p><img src="../assets/images/tel.png" alt=""></p>
              <p>400-696-2298</p>
              <p></p>
              </div></el-col>
              <el-col :span="4" :xs="12"><div class="grid-content qingke_footer_word">
              <p>官方微信：</p>
              <p><img src="../assets/images/chat.png" alt=""></p>
              <p>Qkercom</p>
              <p><img src="../assets/images/chat2.png" alt=""></p>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        </div>

    </div>
</template>

<script>
export default {}
</script>

<style scoped>
  img{
    vertical-align: top;
  }
.el-row{
    margin:0;
  }
  .qingKe_top{
    position: relative;
    background-color: #f4f4f4;
    position: relative;
    height: 6rem;
    line-height: 6rem;
    border-bottom: 0.1rem solid gray;
    top:-6rem;
    z-index: 666;
  }
  .qingke-icon{
    height:3rem;
    width:3rem;
  }
  .qingKe-top-first{
    position: absolute;top:30%;
    left:30%;
    font-size: 6rem;
    color: orangered;
    z-index: 9999;
  }
  .qingKe-top-second{
    position: absolute;
    color: #FCD281;
    font-size: 2rem;
    width:20%;
    top:40%;
    left:30%;
    z-index: 9999;
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
    width:30%;
    line-height: 2rem;
    font-size: 1.4rem;
    height: 2rem;
    border-right: 0.1rem solid gray;
    justify-content: space-around;
  }
  .btn_more{
    border:0.1rem solid #00ec03;
    color: #ffffff;
    box-shadow: 0 0 0.1rem #00ec03;
    background: repeating-linear-gradient(to right, #00d7f6 , #00ec03 100%);
    /*background: linear-gradient(to right, #00d7f6 , #00ec03); !* 标准的语法 *!*/
  }
  .btn_more>a{
    color: #ffffff;
  }
  div.btn_more:hover{
    box-shadow: 0 0 0.4rem #00ec03;
    color: #ffffff;
  }
  .qingKePhone>img{
    /*height:20rem;*/
    /*width:30rem;*/
    margin-top: 1%;
    margin-bottom: 2%;
  }
  .qingke_footer{
    background-color: #222222;
    padding-top: 1%;
  }
  .qingke_footer p{
    margin-top: 1%;
  }
  .qingke_footer_word img{
    padding-top: 1%;
  }
  .qingke_footer_word>p:nth-child(1){
    font-size: 1.4rem;
    color: #ffffff;
  }
  .qingke_footer_word>p{
    color: #ffffff;
  }
  .school_top_top{
    text-align: center;
    background-color: #222222;
  }
  .school_top_top>p:first-child{
    font-size: 6rem;
    color: #ffffff;
    padding-top: 3%;
  }
  .qingKe_list{
    height:30rem;
    width:30rem;
    margin: 0 auto;
    background-color: #f4f4f4;
  }
  .qingKe_list>img{
    padding:1rem 2rem;
  }
  .qingKe_list>p:nth-child(2){
    font-size: 3rem;
    margin-top: 1%;
    font-weight: 600;
  }
  .qingKe_list>p:nth-child(3){
    margin-top: 2%;
    font-size: 1.2rem;
    padding:0 15%;
  }
</style>
