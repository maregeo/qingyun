<template lang="html">
    <div class="clickRead">
        <el-row>
          	<el-col :span="24">
			  	<div class="grid-content bg-purple-dark" style="position: relative;">
					<img src="../assets/images/readMax.jpg" class="v-success-img"/>
				<!--<xuetangimg src="../assets/images/a1.jpg" alt="" style="width:100%; school_top height: 100vh;">-->
					<div class="read_title">
						<p>GMTC全球移动大会</p>
					</div>
					<el-row class="qingKe_top">
						<el-col :span="5">
							<div class="grid-content bg-purple-light"></div>
						</el-col>
						<el-col :span="14">
							<div class="qingKe_top_left">
								<div class="v-y-back">
									<img src="../assets/images/back.png" alt=""><span>点击返回上一页</span>
								</div>
							</div>
						</el-col>
						<el-col :span="5"><div class="grid-content bg-purple-light"></div></el-col>
					</el-row>
          		</div>
			</el-col>
        </el-row>
        <el-row>
          <el-col :span="14" :push="5">
            <el-row>
              	<el-col :span="12">
			  		<div class="grid-content">
						<img src="../assets/images/manage.png" class="v-read-left"/>
					</div>
				</el-col>
              	<el-col :span="12">
				  	<div class="grid-content ">
                  		<div class="media-top">
                    		<p>GMTC</p>
                    		<p>全球移动大会</p>
                    		<p>2017/11/06 </p>
                    		<p>编辑 : GHRLIB</p>
                  		</div>
            	  	</div>
				</el-col>
              	<el-col :span="24"><div class="grid-content" style="color: #565656;font-size: 2rem">
                	<div class="v-raed-p">我们坚持重视新媒体、用好新媒体，发挥新媒体力量，为广大读者和提 供更专业、更有效、更有力的传播服务，海量信息和深度资讯充分融通， 打造优质新媒体联合传播平台。
                </div>
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
export default {}
</script>

<style lang="css" scoped>
	.v-raed-p{
		padding-bottom:50px;
		line-height:30px;
	}
  .school_top{
    height:100vh;
    width:100%;
    background-image: url("../assets/images/readMax.jpg");
    background-size: 100% 100%;
    position: relative;
  }
  .school_top>p:nth-child(1){
    font-size: 6rem;
    color: #ffbc08;
    width: 100%;
    position: absolute;
    top: 50%;
    margin-top: -3rem;
    text-align: center;

  }
  .school_top>p:nth-child(2){
    font-size: 2rem;
    width:25%;
    position: absolute;
    color: #ffffff;

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
    background-color: #ffffff;
    height: 8rem;
    line-height: 8rem;
    top:95%;
    z-index: 666;
  }
  .qingKe_top_left>div>div{
    font-size: 3rem;
    padding: 0.5rem;
    color: #565656;
    display: inline-block;
    vertical-align: top;
  }
  .expert>div{
    display: inline-block;
    vertical-align: middle;
    margin-top: 5%;
  }
  	.expert{
		height: 35rem;
		background-image: url("../assets/images/manage.png");
		background-size: 40rem 40rem;
		background-repeat: no-repeat;
	}
	.media-top{
		margin-top:70px;
	}
    .media-top>p{
	  text-align:center;
  }
  .media-top>p:nth-child(1){
    margin-top: 4rem;
    font-size:5rem ;
    color: #ffbc08;
  }
  .media-top>p:nth-child(2){
    font-size:5rem ;
    color: #ffbc08;
  }
  .media-top>p:nth-child(3){
    font-size: 3rem;
    color: #565656;
  }
  .media-top>p:nth-child(4){
    font-size: 3rem;
    color: #565656;
  }
  .el-col-12 .expert{
	  /* 
    	margin-left: 34%;
	*/
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
    left: 31%;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
  }

  .media_car_third>p:nth-child(1){
    color: #000000;
    text-align: center;
    font-size: 6rem;
    margin-bottom: 5%;
  }

  .media_car_third>p:nth-child(2){
    font-size: 2rem;
    color: #ffffff;
    margin-left: 25%;
    margin-right: 25%;
    color: #595959;
    margin-bottom: 5%;
  }

  .media-bottom{
    margin-left: 0rem;
  }
  .media-bottom>p{
    font-size: 1.6rem;
    margin-top: 2%;
    font-weight: 600;
  }
  .media-bottom>ul{
    font-size: 1.2rem;
    color: #565656;
    margin-top: 2%;
    margin-left: 2rem;
  }
  .media-bottom>ul>li{
    margin-top: 2%;
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
  	.v-success-img{
		width:100%;
	}
	.v-read-left{
		width:80%;
		vertical-align:top;
	}
	.v-y-back img{
		vertical-align:middle;
		width:45px;
		height:45px;
	}
	.v-y-back span{
		vertical-align:middle;
		font-size:2rem;
		margin-left:20px;
	}
	.el-row{
		margin:0;
	}
	.read_title{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		
	}
	.read_title p{
		width:60%;
		margin:20% auto 0;
		font-size:6rem;
		color:#ffbc08;
		text-align:center;

	}
	@media screen and (max-width:640px){
		.v-succ-head {
			display:none;
		}
		.read_title{
			display:none;
		}
		.v-y-back img{
			width:25px;
			height:25px;
		}
		.qingKe_top{
			height:auto;
		}
		.media-top{
			margin-top:10px;
		}
		.media-top>p[data-v-63a6827e]:nth-child(1){
			margin-top:0;
		}
		.grid-content{
			padding-top:10px;
		}
		.v-raed-p{
			padding-bottom:10px;
			line-height:18px;
		}
		.v-y-back{
			padding:10px 0;
			line-height:25px;
		}
		.v-y-back span{
			display:inile-block;
			vertical-align:middle;
			margin-left:10px;
		}
	}
</style>
