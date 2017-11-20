<template lang="html">
    <div class="test">
		<div style="background:#f1f1f1;">
			<el-row class="v-activity-hidden">
				<el-col :span="14" :push="5">
					<p class="all-class-top">展会活动</p>
				</el-col>
			</el-row>
		</div>
		<el-row>
          	<el-col :span="14" :push="5" class="v-m-items">
            	<el-row>
                	<el-col :span="6" class="v-activity-lists">
                  		<div class="example-report-card" @click="jumpStartReport">
                    		<img src="../assets/images/green.png" alt="a">
                    		<p class="v-activity-title">sadf</p>
                     		<p>sadf</p>
                   		</div>
                	</el-col>
                	<el-col :span="6" class="v-activity-lists">
                  		<div class="example-report-card" @click="jumpStartReport">
                    		<img src="../assets/images/green.png" alt="a">
                    		<p class="v-activity-title">sadf</p>
                     		<p>sadf</p>
                   		</div>
                	</el-col>
                	<el-col :span="6" class="v-activity-lists">
						<div class="example-report-card" @click="jumpStartReport">
							<img src="../assets/images/green.png" alt="a">
							<p class="v-activity-title">sadf</p>
							<p>sadf</p>
						</div>
               		</el-col>
					<el-col :span="6" class="v-activity-lists">
						<div class="example-report-card" @click="jumpStartReport">
							<img src="../assets/images/green.png" alt="a">
							<p class="v-activity-title">sadf</p>
							<p>sadf</p>
						</div>
					</el-col>
              	</el-row>
              	<p class="example-more" @click="jumpMoreExample">了解更多展会活动</p>
          	</el-col>
        </el-row>
      	<div style="background:#f1f1f1;">
			<el-row class="v-activity-hidden">
          	<el-col :span="14" :push="5">
            	<p class="all-class-top">高端峰会</p>
          	</el-col>
        </el-row></div>
		<div class="fenghui">
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
            <el-row  class="v-te-pading">
				<el-col :span="12" :xs="{span:20,push:2}" class="v-a-50">
                <div class="grid-content " >
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
        </el-row><el-row>
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
                <div class="grid-content " >
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
          <el-col  class="v-avtive-50" :span="14" :push="5" :lg="{span:14,push:5}" :md="{span:16,push:4}" :sm="{span:20,push:2}" :xs="{span:22,push:1}">
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
      	</div>
    </div>
</template>

<script>
export default {
  methods:{
    jumpClickRead(){
      this.$router.push('/clickRead')
    },
    jumpStartReport(){
    this.$router.push('/startReport')
  },
    jumpMoreExample(){
      this.$router.push('/moreExample')
    }
  }
}
</script>

<style lang="css" scoped>
	.fenghui{
		padding:50px 0;
	}
	.el-row{
		margin:0;
	}
	.v-activity-hidden{
		overflow:hidden;
	}
	
	.v-activity-lists{
		
	}
  	.all-class-top{
		font-size: 2.5rem;
		font-weight:600;
		height:6rem;
		line-height:6rem;
		margin-top:80px;
	}
  	.example-report-card{
		margin: 0 auto;
		width:180px;
		background:#f2f2f2;
		padding-bottom:10px;
	}
	.example-report-card>img{
    	width:180px;
		height:120px;
    	margin: 0 auto;
  	}
	.example-report-card>p{
		width:150px;
		margin:0 auto;
		padding-left:20px;
  	}
	.v-activity-title{
		height:30px;
		line-height:30px;
		font-size:20px;
	}
	.example-more{
		font-size: 1.6rem;
		color: #ffffff;
		margin-top: 1rem;
		margin-bottom: 2rem;
		width:13.5rem;
		padding: 0.8rem 1rem;
		background-color: #595959;
		border-radius: 1.6rem;
		font-weight: 600;
		text-align:center;
		margin:20px auto;
	}
 	 p .example-more:hover{
			background-color: #ffffff;
			box-shadow:0 0 0.5rem #ffffff;
			color: #222222;
			font-weight: 600;
  	}
  	.fenghui{
    	background-color: #222222;
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
    margin-top: 3rem;

  }

  .expert>div:nth-child(1)>div:nth-child(1){
    display: inline-block;
    font-size: 5rem;
    font-family: "Californian FB";
    vertical-align: top;
    background-color: transparent;
    margin-top: 2rem;
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
    color: #ffffff;
  }
  .media-bottom{
    margin-left: 2rem;

  }
  .media-bottom>p{
    font-size: 1.3rem;
  }
  .media-bottom>p:nth-child(1){
    height:0.2rem;
    width:3rem;
    background-color: #ffffff;
    margin: 2% 0;
  }
  .media-bottom>p:nth-child(2){
    color: #FCD281;
    font-weight: 300;
    padding-right: 3rem;
  }
  .media-bottom-bottom{
    font-size: 1.6rem;
    color: #ffffff;
    width:10rem;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    background-color: #595959;
    border-radius: 1.3rem;
    font-weight: 600;
	text-align:center;
  }
  div .media-bottom-bottom:hover{
    background-color: #222222;
    box-shadow:0 0 0.5rem #222222;
    font-weight: 600;
  }
  p .example-more:hover{
    background-color: #222222;
    box-shadow:0 0 0.5rem #222222;
    font-weight: 600;
  }
  	.example-report{
    	background-color: #222222;
  	}
	.succ-mid-img {
		width: 100%;
	}
	.grid-content{
		position: relative;
	}
	.grid-content{
		position: relative;
		padding-top:60px;
	}


	.v-m-items{
		padding-top:20px;
	}
	@media screen and (max-width:640px){
		.fenghui{
			padding:10px 0;
		}
		.v-activity-hidden .el-col{
			left:10px;
			font-size:16px;
		}
		.all-class-top{
			height:45px;
			line-height:45px;
			margin:0;
			font-size:16px;
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



		.v-m-items{
			width:100%;
			left:0;
			padding:0 10px;
		}
		.v-m-items .v-activity-lists{
			width:50%;
			padding-right:10px;
			margin-top:10px;
		}
		.example-report-card{
			width:100%;
			padding:0 10px;
			box-sizing: border-box;
			padding-bottom:10px;
		}
		.example-report-card img{
			width:100%;
		}
		.example-report-card p{
			width:100%;
			
			box-sizing: border-box;
		}
	}
</style>
