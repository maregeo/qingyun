<template lang="html">
    <div class="public">
       <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark v-pub-main">
		  	<img src="../assets/images/public.jpg" class="v-success-img"/>
            <!--<xuetangimg src="../assets/images/a1.jpg" alt="" style="width:100%;  school_top height: 100vh;">-->
			<div class="v-pub-wrapp">
				<div class="v-pub-pos">
					<p>标杆游学 </p>
					<p>氢云商学连接全国十几万名培训管理者，云集华为、阿里、腾讯、百度、GE、IBM 等众多国内外知名标杆企业，以“行业对标， 量身定制”为特色，根据企业不同发展阶段 和实际需求，制订符合其发展要求的内训与 咨询方案。服务形式包括内训、微咨询、入 企咨询辅导、常年顾问服务四大类。</p>
				</div>
			</div>
          </div></el-col>
        </el-row>
        <el-row class="v-statr-row">
          <el-col :span="14" :push="5" class="v-statr-col">
            <el-row>
              <el-col :span="24"><div class="grid-content" style="text-align: center">
                <p class="produce">产品分类</p>
                <span class="bottom-right" @click="jumpzhuanxing"><img src="../assets/images/zhuanxing.png" alt="">
                  <p>前沿转型系列</p>
                </span>
              </div></el-col>
             <el-col :span="12"><div class="grid-content" style="text-align: center">
                <span class="bottom-left" @click="jumpshizhan"><img src="../assets/images/shizhan.png" alt="">
                <p>落地实战系列</p>
                </span>
              </div></el-col>
             <el-col :span="12"><div class="grid-content" style="text-align: center;font-size: 3rem">
                <span class=" study" @click="jumpyanxiu"><img src="../assets/images/yanxiu.png" alt="">
                <p>高管研修班</p>
                </span>
             </div></el-col>
            </el-row>
         </el-col>
        </el-row>
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
          <el-col :span="16">
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
    </div>
</template>

<script>
export default {
  methods:{
    jumpzhuanxing(){
      this.$router.push('/zhuanxing')
    },
    jumpshizhan(){
      this.$router.push('/shizhan')
    },
    jumpyanxiu(){
      this.$router.push('/yanxiu')
    }
  }
}
</script>

<style lang="css" scoped>
	.v-success-img{
		width:100%;
	}
	.v-pub-wrapp{
		position: absolute;
		left:0;
		top:0;
		width:100%;
		bottom:0;
	}
	.v-pub-pos{
		width:60%;
		margin:25% auto 0;
		font-size:6rem;
    	color:#ff5027;
	}
	.v-pub-pos p:last-child{
		font-size:3rem;
		color:#333;
		margin-top:10px;
	}
  .school_top{
    height:100vh;
    width:100%;
    background-image: url("../assets/images/public.jpg");
    background-size: 100% 100%;
  }
  .school_top>p:nth-child(1){
    font-size: 6rem;
    color:#ff5027;
    position: absolute;
    top:35%;
    left: 30%;
  }
  .school_top>p:nth-child(2){
    font-size: 2rem;
    width:25%;
    position: absolute;
    color: #ffffff;
    top:45%;
    left: 30%;
  }

  .produce{
    font-size: 3rem;
    text-align: center;
  }
  .bottom-left{
    display: inline-block;
    padding:3rem;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    background-color: #f2f2f2;
  }

  .bottom-right{
    display: inline-block;
    padding:5rem;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    background-color: #f2f2f2;
  }
.study{
  padding:3rem 8rem;
  display: inline-block;
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
  background-color: #f2f2f2;
}
  .bottom-right,.bottom-left>p{
    font-size: 3rem;
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
  	@media screen and (max-width:640px){
		.v-pub-main p{
			display:none;
		}
		.v-pub-wrapp{
			display:none;
		}
		.v-statr-row{
			padding:0 10px;
			margin-bottom:10px;
		}
		.v-statr-col{
			width:100%;
			left:0;
			
		}
		.v-statr-col .el-col-24{
			width:80%;
			margin:0 auto;
			float:none;
		}
		.v-statr-col .el-col-12{
			width:50%
		}
		.v-statr-col .el-col-12 .study,.v-statr-col .el-col-12 .bottom-left{
			padding:20px;
		}
		.produce{
			height:35px;
			line-height:35px;
			font-size:16px;
		}
		.v-statr-col .el-col-24 .bottom-right{
			padding:20px;
			margin-top:0;
		}	
		.v-statr-col .el-col-24 img{
			width:100%;
		}
		.v-statr-col .el-col-12 img{
			width:133px;
			height:133px;
		}
		.bottom-left>p,.study p {
			height:30px;
			line-height:30px;
			
		}
	}
</style>
