<template lang="html">
    <div class="zhuanxing">
      <div class="zhuanxing-top">
          <div><img src="../assets/images/minyanxiu.png" alt=""></div>
          <div>高管研修班</div>
        </div>
       <div class="content">
          <table width="400" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <th class="left">主题</th>
              <th>天数</th>
              <th class="right">上榜理由</th>
            </tr>
            <tr>
              <td class="main-head">治愈移动互联网焦虑症胜宴私人董事会</td>
              <td></td>
              <td class="lastCol">“互联网+”已经成为现代商业的底层逻辑，未来的商业运作基于互联网开展已经是不争的事实。眼见互联网企业高歌猛进，蚕食鲸吞原有的商业版图，传统企业老板们如何淡定？正当大家放下自己的骄傲，开始学习“互联网思维”，商业格局却转眼进入“移动互联网时代”，原有在PC端的投入几乎全部沉没……<br>
这个时代，传统企业老板们大多都患上了“移动互联网焦虑症”，生死存亡之际，不解此症，犹如黑夜前行，难逃被“互联网的野蛮人”颠覆的命运。<br>
于是，决定运用私人董事会（以下简称“私董会”）这样一个有效的学习工具，为他们搭建治愈互联网焦虑症的道场。我们的私董会不同于传统讨论领导力的私董会，而是打破“私董会不解决具体问题”的陈规陋习，升级到“私董会2.0”。<br>
我们将运用企业家相互的智慧，运用总裁教练和运营团队的移动互联网专业知识，为企业家寻找移动互联网时代的专业解决方案（方向性），为传统观企业家们在移动互联网的寒冬中带来一丝暖意，并守望春天！</td>
            </tr>
            <tr>
              <td class="main-head">中国人民大学 <br>美国康奈尔大学：<br>首席人才官（CHO）高级管理课程</td>
              <td></td>
              <td class="lastCol" >国际知名院校：康奈尔大学，常春藤联盟名校，人力资源管理专业全美首屈一指；中国人民大学，企业家的摇篮，立足中国国情，洞察本土实践。<br>
师资阵容强大：由中国人民大学及康奈尔大学著名教授与企业界高管联合执教，所有师资均为国内外一流的人力资源管理专家。
教学模式先进：融合课堂讲授、案例教学、沙盘模拟、反思学习、参访跨界学习、友好咨询多种学习方式。<br>
课程内容实用：为人力资源中高管量身定制，立足企业人力资源面临的实际问题，配合丰富的实战案例分析与演练。<br>
最佳交流平台：学员将自动成为中国人力资源理论与实践联盟会员，加入学习社群，线上线下互动，促进学员智慧碰撞，资源共享。</td>
            </tr>
          </table>
        </div>
		 <footer-bar></footer-bar>
		 <!--
        <div class="qingke_footer">
          <el-row>
          <el-col :span="16" :push="4">
            <el-row>
              <el-col :span="24"><div class="grid-content">
              <div>
                  <img src="../assets/images/qingke.png" alt="">
               </div>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        <el-row>
          <el-col :span="16" :push="4">
            <el-row type="flex" justify="space-around">
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>运营机构 : </p>
              <p>氢课（上海）教育科技有限公司</p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>售前售后 :</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p>GHRVIP13</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p>TV@Ghrlib.com</p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>市场合作：</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p>Marketing@ghrlib.com</p>
              </div></el-col>

              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>讲师合作：</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p>GHRVIP1</p>
              </div></el-col>
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>热线电话：</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p>400-696-2298</p>
              <p></p>
              </div></el-col>
              <el-col :span="24"><div class="grid-content qingke_footer_word">
              <p>官方微信：</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              <p>Qkercom</p>
              <p><img src="../assets/images/weiXin.png" alt=""></p>
              </div></el-col>
            </el-row>
           </el-col>
        </el-row>
        </div>
		-->
    </div>
</template>

<script>
import footerBar from './footer_bar' //导入组件
export default {
	components: {
    	footerBar: footerBar //注册组件
  	},
}
</script>

<style lang="css" scoped>
  .zhuanxing-top{
    font-size: 3rem;
    padding-top: 8%;
    text-align: center;
  }
  .zhuanxing-top>div{
    display: inline-block;
    vertical-align: middle;
  }
  .content{
    text-align: center;
    width:50%;
    margin: 0 auto;
    padding-bottom: 10rem;
    box-shadow: 0.5rem 0.5rem 1rem #f2f2f2;
  }

  .content>p:nth-child(1){
    font-size: 3rem;
  }
  table {
    border-collapse: collapse;
    width:100%;
    margin: 0 auto;
    margin-top: 3%;
    border: 0px solid #999;
  }
  table td {
    border-top: 0;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    border-left: 0;
  }

  .content table{
    border-left:none;
    border-right:none;
    border: none;
  }
  th{
    border: 1px solid #565656;
    border-top:none;
    background-color: #f2f2f2;
    font-size: 2.5rem;
  }
  .left{
    border-left: none;
  }
  .right{
    border-right: none;
  }
  table tr td.lastCol {
    border-right: 0;
    text-align: left;
  }
  .left-center{
    text-align: left;
  }
  .main-head{
    font-size: 1.8rem;
    padding:1rem 2rem;
    width:37%;
  }
  tr,td{
    min-height:6rem;
    font-size: 1.2rem;
    padding:1rem 2rem;
  }
  .qingke_footer{
    background-color: #222222;
    margin-top: 5%;
  }
  .qingke_footer_word>p:nth-child(1){
    font-size: 1.4rem;
    color: #ffffff;
  }
  .qingke_footer_word>p{
    color: #ffffff;
  }
   @media screen and (max-width:640px){
	  .zhuanxing-top{
			padding-top:0;
	  }
    .content{
      width:100%;
      box-sizing:border-box;
	  padding:10px;
    }
    .content table tr{
      padding:0;
    }
    .content table th{
        height:30px;
        line-height:30px;
    }
    .content table td{
     	  padding:0 3px;
    }
    .content table tr td:nth-child(1){
        width:100px;
     }
     .content table tr td:nth-child(2){
        width:10%;
     }
    .main-head{
      width:100%;
     
    }
   }	
 
</style>
