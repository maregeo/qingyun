<style>
	.succ-head{
		position: relative;
	}
	.el-row{
		margin:0;
	}
	.v-succ-head{
		left:0;
		top:0;
		width:100%;
		position:absolute;
  	}
	.v-succ-head-child{
		width:60%;
		margin:20% auto 0;
		float:none;
	}
	.succ-box {
    	margin-top: 36px;
  	}
	.succ-mid-img {
		width: 100%;
	}
	.succ-hr {
		margin-top: 20px;
	}
	.grid-content{
		position: relative;
		/*
		padding-top:60px;
		*/
	}
	.v-succ-head-child{

	}
	.v-success-img{
		width:100%;
	}
</style>

<template lang="html">
    <div class="successExample">
        <el-row>
         	<el-col :span="24">
				<div class=" bg-purple-dark">
					<img src="../assets/images/successExample.png" class="v-success-img"/>
					<el-row class="succ-head v-succ-head">
						<el-col class="succ-head v-succ-head-child"  :span="12"  :xs="{span:24,push:0}">
							<div class="succ-head  in-bk-center">
								<div class="center-box succ-box">
									<p class="title">成功案例</p>
									<p  class="con">氢云新媒体矩阵包括环球人力资源智库、 解读标杆、每天学点HR、管理定见等优 质微信公众号，各具特色，功能互补， 错位发展。</p>
									<p  class="name">
									<img src="../assets/images/logo.png" alt="" class="name-logo">
									<span style="">氢云商学</span>
									</p>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
				<el-row class="qingKe_top">
					<el-col :span="12" :push="6" :xs="{span:23,push:1}">
						<el-row>
							<el-col :span="12" :push="0">
								<div class="qingKe_top_left">氢云新媒体</div>
							</el-col>
							<el-col :span="12" :push="0">
								<div class="qingKe_top_right">
									<div >成功案例</div>
									<div >开课报道</div>
									<div >客户端</div>
								</div>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</el-col>
        </el-row>
        <el-row style="margin-top:-10%">
          	<el-col :span="24">
			  	<div class="grid-content bg-purple-dark" >
					<div class="sy_car_third">
						<p class="bus-tit">成功案例 </p>
						<p class="bus-con">我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台。</p>
					</div>
          		</div>
			</el-col>
        </el-row>
        <el-row>
          <el-col class="v-avtive-50" :span="14" :push="5" :lg="{span:14,push:5}" :md="{span:16,push:4}" :sm="{span:20,push:2}" :xs="{span:22,push:1}">
            <el-row class="v-te-pading">
              <el-col :span="12" :xs="{span:20,push:2}" class="v-a-50">
                <img src="../assets/images/manage.png" alt="" class="succ-mid-img">
              </el-col>
              <el-col :span="12" :xs="{span:20,push:2}" class="v-b-50">
                <div class="grid-content ">
                  <div class="media-top">
                    <p>氢云</p>
                    <p>氢云新媒体</p>
                  </div>
                  <div class="media-bottom">
                    <p></p>
                    <p>我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， </p>
                  </div>
                  <div class="media-bottom-bottom" @click="jumpClickRead">点击此处阅读</div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="v-avtive-50" :span="14" :push="5" :lg="{span:14,push:5}" :md="{span:16,push:4}" :sm="{span:20,push:2}" :xs="{span:22,push:1}">
            <el-row class="v-te-pading">

              <el-col :span="12" :xs="{span:20,push:2}" class="v-a-50">
                <div class="grid-content">
                  <div class="media-top">
                    <p>氢云</p>
                    <p>氢云新媒体</p>
                  </div>
                  <div class="media-bottom">
                    <p></p>
                    <p>我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， </p>
                  </div>
                  <div class="media-bottom-bottom" @click="jumpClickRead">点击此处阅读</div>
              </div></el-col>
              <el-col :span="12" :xs="{span:20,push:2}" class="v-b-50">
                <img src="../assets/images/manage.png" alt="" class="succ-mid-img">
              </el-col>
            </el-row>
          </el-col>
          <el-col class="v-avtive-50" :span="14" :push="5" :lg="{span:14,push:5}" :md="{span:16,push:4}" :sm="{span:20,push:2}" :xs="{span:22,push:1}">
            <el-row class="v-te-pading">
              <el-col :span="12" :xs="{span:20,push:2}" class="v-success-bg v-a-50">
                <img src="../assets/images/manage.png" alt="" class="succ-mid-img">
              </el-col>
              <el-col :span="12" :xs="{span:20,push:2}" class="v-b-50">
                <div class="grid-content ">
                  <div class="media-top">
                    <p>氢云</p>
                    <p>氢云新媒体</p>
                  </div>
                  <div class="media-bottom">
                    <p></p>
                    <p>我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， </p>
                  </div>
                  <div class="media-bottom-bottom" @click="jumpClickRead">点击此处阅读</div>
              </div></el-col>
            </el-row>
          </el-col>
          <el-col class="v-avtive-50" :span="14" :push="5" :lg="{span:14,push:5}" :md="{span:16,push:4}" :sm="{span:20,push:2}" :xs="{span:22,push:1}">
            <el-row class="v-te-pading">

              <el-col :span="12" :xs="{span:20,push:2}" class="v-a-50">
                <div class="grid-content " >
                  <div class="media-top">
                    <p>氢云</p>
                    <p>氢云新媒体</p>
                  </div>
                  <div class="media-bottom" >
                    <p></p>
                    <p>我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， </p>
                  </div>
                  <div class="media-bottom-bottom"  @click="jumpClickRead">点击此处阅读</div>
              </div></el-col>
              <el-col :span="12" :xs="{span:20,push:2}" class="v-b-50">
                <img src="../assets/images/manage.png" alt="" class="succ-mid-img">
              </el-col>
            </el-row>
            <p class="example-more" @click="jumpMoreExample">了解更多成功案例</p>
          </el-col>
        </el-row>
        <div class="example-report">
          <el-row>
            <el-col :span="14" :push="5" class="v-success-items">
            <p class="report">开课报告</p>
              <el-row>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
                <el-col :span="6" class="v-success-list">
                  <div class="example-report-card" @click="jumpStartReport">
                    <img src="../assets/images/green.png" alt="a">
                    <p>sadf</p>
                   </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <!--
        <el-row>
          <el-col class="succ-head" :span="12" :push="6" :xs="{span:22,push:1}">
            <div class="sy_car_third">
              <p class="bus-tit">百万HR的</br> 共同选择 </p>
              <p class="bus-con succ-con">环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
              <el-row class="succ-hr">
                <el-col :span="24" :xs="{span:14,push:5}">
                  <el-row :gutter="20">
                    <el-col :span="6" :xs="12" :sm="8" :lg="6" v-for="item in logos" key="logos">
                      <div class="parent">
                        <div class="list_icon">
                          <img :src="getImg(item)" alt="" class="list-icon-img">
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>

        </el-col>
      </el-row>
      -->
      <div class="sy_car_third">
        <p>百万HR的 共同选择 </p>
        <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
          <el-col :span="12" :push="6" class="v-hr">
            <el-row class="v-hello-row">
              <el-col :span="6" :xs="12" :ms="14" :md="12" :lg="6" v-for="item in logos" key="logos" class="v-hr-list">
                <div class="parent">
                  <div class="list_icon">
                    <div><img :src="getImg(item)" alt="" class="v-hr-imgs"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from './footer_bar' //导入组件

export default {
  name: 'bussinessSchool',
  components: {
    footerBar: footerBar //注册组件
  },
  data() {
    return {
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
  methods: {
    getImg(url) {
      // console.log(url)'../assets/images/'+
      return require(`../assets/images/${url}`)
    },
    jumpClickRead() {
      this.$router.push('/clickRead')
    },
    jumpMoreExample() {
      this.$router.push('/moreExample')
    },
    jumpStartReport() {
      this.$router.push('/startReport')
    }
  }
}
</script>

<style lang="css" scoped>
  .succ-con{
    margin: 0!important;

  }
  .v-success-bg{
	  background:#fff;
  }
  .school_top{
    height:100vh;
    width:100%;
    background-image: url("../assets/images/successExample.png");
    background-size: 100% 100%;
  }
  .school_top .title,.title{
    font-size:6rem;
    color: #ffbc08;
    /*position: absolute;
    top:30%;
    left: 30%;*/
  }
  .school_top .con,.con{
    font-size:2rem;
    width:45%;
    /*position: absolute;*/
    color: #ffffff;
    /*top:45%;
    left: 30%;*/
  }
  .school_top .name,.name{
    color: #ffffff;
    font-size: 3rem;
    margin-top: 10px;

    vertical-align: middle;
  }
  .name-logo{
    width: 5rem;
    height: 5rem;
    vertical-align: middle;
  }
  .qingKe_top{
    position: relative;
    background-color: #f4f4f4;
    height: 6rem;
    line-height: 6rem;
    border-bottom: 0.1rem solid gray;
    /*top:95%;*/
    z-index: 666;
  }
  .qingKe_top_left{
    font-size: 3rem;
    font-weight: 600;
	text-align:center;
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
  .expert>div{
    display: inline-block;
    vertical-align: middle;
  }
  .expert{
    height: 35rem;
    background-image: url("../assets/images/manage.png");
    background-size: 40rem 40rem;
    background-repeat: no-repeat;

  }
  .el-col-12 .expert{
    margin-left: 34%;
  }
  .expert>div:nth-child(1)>div:nth-child(1){
    display: inline-block;
    font-size: 5rem;
    font-family: "Californian FB";
    vertical-align: top;
    background-color: transparent;
  }
  .expert>div:nth-child(1)>div:nth-child(2){
    display: inline-block;
    background-color: transparent;
    height:16rem;
    border:0.1rem solid #222222;
    position: absolute;
    top:-3rem;
    left: 30%;
  }
  .media-top{
    width:80%;
    margin-left: 2rem;
  }
  .media-top>p{
    font-size: 5rem;
  }
  .media-bottom{
    margin-left: 2rem;
    /*width:60%;*/
  }
  .media-bottom>p{
    font-size:1.3rem;
	line-height:18px;
  }
  .media-bottom>p:nth-child(1){
    height:0.5rem;
    width:3rem;
    background-color: #565656;
    margin: 2% 0;
  }
  .media-bottom-bottom{
    font-size: 1.6rem;
    color: #ffffff;
    width:8rem;
	text-align:center;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    background-color: #595959;
    border-radius: 1.3rem;
    font-weight: 600;
  }
  div .media-bottom-bottom:hover{
    background-color: #222222;
    box-shadow:0 0 0.5rem #222222;
    font-weight: 600;
  }
  .example-more{
    font-size: 1.6rem;
    color: #ffffff;
    margin-top: 1rem;
    width:13.5rem;
	text-align:center;
    padding: 0.8rem 1rem;
    background-color: #595959;
    border-radius: 1.6rem;
    font-weight: 600;
    margin:20px auto;
  }
  p .example-more:hover{
    background-color: #222222;
    box-shadow:0 0 0.5rem #222222;
    font-weight: 600;
  }
  .example-report{
    background-color: #222222;
  }
  .report{
    color: #ffffff;
    font-size: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .example-report-card{
    width:90%;
    text-align: center;
    margin: 0 auto;
    border:0.1rem solid black;
    background-color: #ffffff;
	padding:10px 0;
  }
  .example-report-card>img{
    	margin: 0 auto;
  }
  .example-report-card>p{
    font-size: 1.2rem;
  }
  .qingke_footer{
    background-color: #222222;
  }
  .qingke_footer_word>p:nth-child(1){
    font-size: 1.4rem;
    color: #fff;
  }
  .qingke_footer_word>p{
    color: #fff;
  }
  .convention_bottom{
    font-size: 1.4rem;
  }
  .constant>p{
    margin-top: 0.5rem;
  }

 	@media screen and (max-width:640px){
		.v-succ-head {
			display:none;
		}
		.example-more{
			margin:10px auto;
		}
		.report{
			font-size:15px;
		}
		.v-success-list{
			width:50%;
			margin-bottom:10px;
		}
		.v-success-items{
			width:83%;
			margin:0 auto;
			left:auto;
			float:none;
		}
		.v-success-list .example-report-card{
			padding:10px 0;
			width:100%;
		}
		.v-success-list .example-report-card img{
			width:100px;
			height:100px;
		}
		.example-report-card>p{
			height:30px;
			line-height:30px;
		}


		.v-avtive-50{
			width:100%;
			left:0;
		}
		.v-a-50{
			width:50%;
			left:0%;
		}
		
		.v-a-50 .media-top{
			margin-left:0px;
			width:100%;
			
		}
		.v-b-50{
			right:0%;
			left:0;
			width:50%;
		}
		.v-te-pading{
			padding:0 10px;
			margin-bottom:10px;
		}
		.v-a-50 .grid-content,.v-b-50 .grid-content {
			padding-top:8px;
		}
		.media-top{
			margin-left:10px;
		}
		.media-bottom p:nth-child(2){
			padding-right:0;
			line-height:18px;
			max-height:170px;
			overflow:hidden;
			height:54px;  
      		display: -webkit-box;  
			display: -moz-box;  
			overflow: hidden;  
			text-overflow: ellipsis;  
			word-break: break-all;  
			-webkit-box-orient: vertical;  
			-webkit-line-clamp:3;  
		}
		.media-bottom{
			margin-left:0px;
			width:100%;
			padding-left:10px;
			padding-right:10px;
			box-sizing: border-box;
		}
		.v-a-50 .media-bottom{
			padding-left:0;
		}
		.media-bottom-bottom{
			width:8rem;
			margin:10px auto 0;
			
		 
		}
	}
</style>
