<template lang="html">
    <div class="bussinessSchool">
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">
           <img src="../assets/images/SXY.jpg" class="v-success-img"/>
            <!--<img src="../assets/images/a1.jpg" alt="" style="width:100%; height: 100vh;">-->
            <div class="v-convention-wrapp">
			        <div class="v-convention-auto">
                <p>氢云商学院</p>
                <p>氢云商学院是HR行业在线教育的领先者， 自创立以来，为企管人员及HR从业者提 供优质专业教育，包括公开课、内训、 微咨询等教育服务。</p>
             </div>
            </div>
            <el-row class="qingKe_top">
          <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="qingKe_top_left">氢云商学
          </div></el-col>
          <el-col :span="16"><div class="qingKe_top_right">
            <div>产品介绍</div>
            <div>成功案例</div>
            <div >百万客户选择</div>
          </div></el-col>

        </el-row>
          </div></el-col>
        </el-row>
        <div class="school_top_top">
          <p>产品介绍</p>
          <el-row>
            <el-col :span="24">
              <el-row type="flex" justify="space-between">
              <el-col :span="24" :ms="24"><div class="grid-content" style="text-align: center">
                <div class="qingKe_list qingKe_list_new" style="margin: 2rem auto" @click="jumpPublicClass">
                <img src="../assets/images/public.png" alt="">
                   <p>公开课</p>
                   <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                </div>
              </div></el-col>

            </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :push="6" class="v-business-items">
              <el-row type="flex" justify="space-between">
              <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12"><div class="grid-content">
                <div class="qingKe_list" @click="jumpAsk">
                <img src="../assets/images/school.png" alt="">
                   <p>内训与咨询</p>
                   <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                </div>
              </div></el-col>
              <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12"><div class="grid-content">
                <div class="qingKe_list" @click="jumpBenchmarking">
                <img src="../assets/images/priectice.png" alt="">
                    <p>标杆游学</p>
                   <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                </div>
              </div></el-col>

            </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="sy_car_second">
        <p>成功案例</p>
        <p>环球人力资源智库（GHR/GHRlib）——  最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
            <el-col :span="12" :push="6" class="v-new-medias">
              	<el-row type="flex" justify="space-between">
					<el-col :span="12" :ms="24">
						<div class="grid-content ">
							<div class="school_list">
								<span></span>
								<span>
									<p>环球人力 资源智库(GHR) </p>
									<p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
									<span class="click-more" style="position: relative;top: 2.5rem;">
										<el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
										<el-dialog title="" :visible.sync="centerDialogVisible" fullscreen="true" center>
											<span style="display:inline-block;margin-top: 8%">
												<el-row>
													<el-col :span="8" :push="8">
														<el-row>
															<el-col :span="24">
																<div class="grid-content">
																	<img src="../assets/images/sleep.png" alt="" class="sleep">
																	<div class="sleep-word">睡前学管理</div>
																	<div class="word-min">
																		氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台
																	</div>
																	<div class="sleep-footer">
																		<div class="sleep-left">
																			<img src="../assets/images/manage_sign.jpg" alt="">
																		</div>
																		<div class="sleep-right">
																			<p>扫描识别二维码</p>
																			<p>关注睡前学管理</p>
																			<img src="../assets/images/weiXin.png" alt="">
																		</div>
																	</div>
																</div>
															</el-col>
														</el-row>
													</el-col>
												</el-row>
											</span>
										</el-dialog>
									</span>
								</span>
								<span><img src="../assets/images/red_logo.png" alt="" style="width: 100%;"></span>
							</div>
						</div>
					</el-col>
					<el-col :span="12" :ms="24"><div class="grid-content">
						<div class="school_list">
							<span></span>
							<span>
								<p>每天学点HR </p>
								<p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
								<span class="click-more" style="position: relative;top: 5.5rem;">
									<el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
									<el-dialog  title=""  :visible.sync="centerDialogVisible"  fullscreen="true" center>
										<span style="display:inline-block;margin-top: 8%">
											<el-row>
												<el-col :span="8" :push="8">
													<el-row>
														<el-col :span="24">
															<div class="grid-content">
																<img src="../assets/images/sleep.png" alt="" class="sleep">
																<div class="sleep-word">睡前学管理</div>
																<div class="word-min">
																	氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台
																</div>
																<div class="sleep-footer">
																	<div class="sleep-left">
																		<img src="../assets/images/manage_sign.jpg" alt="">
																	</div>
																	<div class="sleep-right">
																		<p>扫描识别二维码</p>
																		<p>关注睡前学管理</p>
																		<img src="../assets/images/weiXin.png" alt="">
																	</div>
																</div>
															</div>
														</el-col>
													</el-row>
												</el-col>
											</el-row>
										</span>
									</el-dialog>
								</span>
							</span>
							<span  style="display: inline-block"><img src="../assets/images/study.png" class="m-img" alt="" style="width: 100%;"></span>
						</div>
					</div>
				</el-col>
            </el-row>
     	</el-col>
    </el-row>

    <el-row>
            <el-col :span="12" :push="6" class="v-new-medias">
              	<el-row type="flex" justify="space-between">
					<el-col :span="12" :ms="24">
						<div class="grid-content ">
							<div class="school_list">
								<span></span>
								<span>
									<p>环球人力 资源智库(GHR) </p>
									<p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
									<span class="click-more" style="position: relative;top: 2.5rem;">
										<el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
										<el-dialog title="" :visible.sync="centerDialogVisible" fullscreen="true" center>
											<span style="display:inline-block;margin-top: 8%">
												<el-row>
													<el-col :span="8" :push="8">
														<el-row>
															<el-col :span="24">
																<div class="grid-content">
																	<img src="../assets/images/sleep.png" alt="" class="sleep">
																	<div class="sleep-word">睡前学管理</div>
																	<div class="word-min">
																		氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台
																	</div>
																	<div class="sleep-footer">
																		<div class="sleep-left">
																			<img src="../assets/images/manage_sign.jpg" alt="">
																		</div>
																		<div class="sleep-right">
																			<p>扫描识别二维码</p>
																			<p>关注睡前学管理</p>
																			<img src="../assets/images/weiXin.png" alt="">
																		</div>
																	</div>
																</div>
															</el-col>
														</el-row>
													</el-col>
												</el-row>
											</span>
										</el-dialog>
									</span>
								</span>
								<span><img src="../assets/images/red_logo.png" alt="" style="width: 100%;"></span>
							</div>
						</div>
					</el-col>
					<el-col :span="12" :ms="24"><div class="grid-content">
						<div class="school_list">
							<span></span>
							<span>
								<p>每天学点HR </p>
								<p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
								<span class="click-more" style="position: relative;top: 5.5rem;">
									<el-button type="text" @click="centerDialogVisible = true">点击了解更多</el-button>
									<el-dialog  title=""  :visible.sync="centerDialogVisible"  fullscreen="true" center>
										<span style="display:inline-block;margin-top: 8%">
											<el-row>
												<el-col :span="8" :push="8">
													<el-row>
														<el-col :span="24">
															<div class="grid-content">
																<img src="../assets/images/sleep.png" alt="" class="sleep">
																<div class="sleep-word">睡前学管理</div>
																<div class="word-min">
																	氢云新媒体矩阵包括环球人力资源智库、解读标杆、每天学点HR、 管理定见等优质微信公众号，各具特色，功能互补，错位发展。 我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台
																</div>
																<div class="sleep-footer">
																	<div class="sleep-left">
																		<img src="../assets/images/manage_sign.jpg" alt="">
																	</div>
																	<div class="sleep-right">
																		<p>扫描识别二维码</p>
																		<p>关注睡前学管理</p>
																		<img src="../assets/images/weiXin.png" alt="">
																	</div>
																</div>
															</div>
														</el-col>
													</el-row>
												</el-col>
											</el-row>
										</span>
									</el-dialog>
								</span>
							</span>
							<span  style="display: inline-block"><img src="../assets/images/study.png" class="m-img" alt="" style="width: 100%;"></span>
						</div>
					</div>
				</el-col>
            </el-row>
     	</el-col>
    </el-row>
    <!--
        <el-row>
            <el-col :span="12" :push="6"  class="v-new-media-item">
              <el-row type="flex" justify="space-between">
              <el-col :span="12" :ms="24"><div class="grid-content" style="margin-top: 2%">
                <div class="school_list">
                   <span style="height: 97%;"></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span><img src="../assets/images/lianTong.png" alt="" style="width: 12rem;"></span>
                </div>
              </div></el-col>
              <el-col :span="12" :ms="24"><div class="grid-content" style="margin-top: 2%">
                <div class="school_list">
                   <span style="height: 97%;"></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span style="display: inline-block"><img src="../assets/images/lianTong.png" alt="" style="width:12rem;background-color: #ffffff"></span>
                </div>
              </div></el-col>
            </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :push="6"  class="v-new-media-item">
              <el-row type="flex" justify="space-between">
              <el-col :span="12" :ms="24" ><div class="grid-content">
                <div class="school_list">
                   <span></span>
                   <span>
                     <p>标题</p>
                     <p>环球人力资源智库（GHR/GHRlib ——  最具影响力人力资源新媒体， 最好的HR学习地盘；</p>
                     <span @click="jumpClickRead">点击了解更多</span>
                   </span>
                   <span><img src="../assets/images/lianTong.png" alt="" style="width: 12rem;"></span>
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
                   <span><img src="../assets/images/lianTong.png" alt="" style="width: 12rem;"></span>
                </div>
              </div></el-col>
            </el-row>
            </el-col>
          </el-row>
          -->
      </div>
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
        <!--
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
        -->
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
    jumpAsk(){
      this.$router.push('/ask')
    },
    jumpClickRead(){
      this.$router.push('/clickRead')
    },
    jumpBenchmarking(){
      this.$router.push('/benchmarking')
    },
    jumpPublicClass(){
      this.$router.push('/publicClass')
    },
    getImg(url) {
      // console.log(url)'../assets/images/'+
      return require(`../assets/images/${url}`)
    }
  }
}
</script>

<style lang="css" scoped>
.m-img{
  width:12rem;
  height:12rem;
}
.v-success-img{
		width:100%;
	}
	.v-convention-wrapp{
		position: absolute;
		top:0;
		left:0;
		bottom:0;
		width:100%;
	}
	.v-convention-auto{
		width:30%;
		margin:20%  auto 0;
	}
  .v-convention-auto p:first-child{
		font-size: 6rem;
    	color: #ffffff;
   	}
	.v-convention-auto  p:nth-child(2){
		font-size: 2rem;
   		color: red;
	}
  .school_top{
    height:100vh;
    width:100%;
    background-image: url("../assets/images/SXY.jpg");
    background-size: 100% 100%;
  }
  .school_top>p:nth-child(1){
    font-size: 6rem;
    color: orangered;
    position: absolute;
    top:30%;
    left: 30%;
  }
  .school_top>p:nth-child(2){
    font-size: 2rem;
    width:25%;
    position: absolute;
    color: black;
    top:40%;
    left: 30%;
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
    width:30%;
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
    padding-top: 2%;
    font-weight: 600;
  }
  .qingKe_list{
    height:33rem;
    width:33rem;
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
  .school_list{
    height:18rem;
    width:25rem;
    padding-bottom:20px;
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
  .school_list>span:nth-child(2)>span:nth-child(3){
    padding:0.2rem 0.6rem;
    line-height: 2rem;
    background-color:#565656;
    position: relative;
    top:7rem;
    color: #ffffff;
    font-size: 1.2rem;
  }
  .school_list>span:nth-child(1){
    height:100%;
    width:0.8rem;
    background-color: #565656;
  }
  .school_list>span:nth-child(3){
    height:12rem;
    width: 12rem;
    line-height: 14rem;
    background-color: #ffffff;
    border:0.1rem solid gray;
    position: absolute;
    top:2.8rem;
    margin-left: 6rem;
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

  @media screen and (max-width:640px){

		.v-test{
			margin-left:0;
			margin-top:0;
		}
       	.v-convention-wrapp{
			display:none;
       	}
		.sy_car_third>p:nth-child(2){
			width:80%;
			margin:0 auto;
			line-height:18px;
		}
		.sy_car_second>p:nth-child(2){
			width:80%;
			margin:0 auto;
			line-height:18px;
		}
		.v-vonvention-list{
			padding:0 10px;
			width:100%;
			left:0;
		}
		.v-vonvention-list table{
			margin-bottom:0px;
		}
		.v-cont-item{
			width:90%;
			left:0;
			margin:0 auto;
			float:none;
		}
		.v-cont-item span{
			display:block;
			line-height:15px;
		}
		.v-cont-item span:first-child{
			float:left;
		}
		.v-cont-item span:nth-child(2){
			padding-left:30px;
		}
		.v-cont-item img{
			width:15px;

		}
		.good img{
			width:80px!important;
		}
    .bg-purple-light{
      padding-bottom:10px;
    }


    .v-new-medias{
      width:100%;
      left:0;
      padding:0 10px;
      float:none;
    }
    .school_list{
      width:100%;
      height:180px;
      padding-bottom:0px;
    }
    .school_list>span:nth-child(1){

    }
    .click-more{
      top:1.5rem!important;
    }
    .school_list>span:nth-child(2)>p:nth-child(1){
      height:25px;
      line-height:25px;
      overflow:hidden;
    }
    .school_list>span:nth-child(2)>p:nth-child(2){
      height:80px;
    }
    .school_list>span:nth-child(3){
      height:6rem;
      width:6rem;
      background-color: #ffffff;
      border: 0.1rem solid gray;
      position: absolute;
      top: 2.8rem;
      margin-left:2.5rem;
    }
    .school_list>span:nth-child(3)>img{
      width:100%;
      height:auto;
      vertical-align:top;
    }
    .media_car_third p:nth-child(2){
      width:80%;
      margin:0 auto;
      line-height:20px;
    }
    .v-new-media-item{
      width:100%;
      left:0;
      float:none;
      padding:0 10px;
    }
    .v-new-media-item .el-col-12{
      width:50%;
      padding:0 5px 0 0;
    }
    .expert[data-v-2de593d8] {
        height:10rem;
        background: url(/static/img/manage.0bdd0e4.png) no-repeat;
        background-size:100% 100%;
    }
    .v-new-media-item .el-col-12 .expert {
      margin-left:0;
    }
    .media-top{
      width:100%;
      margin-left:0;
    }
    .media-top>ul{
      margin-left:0;
      margin-bottom:0;
    }
    .media-top ul li p,.media-bottom ul li p{
      height:16px;
      overflow:hidden;
    }
    .media_3{
      margin-top:3%;
    }
    .sy_car_second >p{
        padding-bottom:10px;
    }
    .v-mew-table{
      width:100%;
      left:0;
      float:none;
      padding:0 10px;
    }
    .first{
      width:60px;

    }
    .v-mew-table table tr td:first-child img{
      width:20px;
      margin-right:5px;


    }

    .qingKe_list{
      height:auto;
      padding:10px;
      width:auto;
      margin:0!important;

    }
    .school_top_top{
      padding-bottom:10px;
    }

  .v-business-items{
     width:100%;
      left:0;
      float:none;
      padding:0 10px;
  }
  .v-business-items .el-col-xs-24{
      width:50%;
      padding:0  5px;
  }
  .qingKe_list img{
    width:100%;
    padding:0;
  }
  .qingKe_list>p:nth-child(2){
    height:25px;
    line-height:25px;
    font-size:14px;
  }
  .grid-content {
    padding-bottom:10px;
  }
  .bg-purple-dark{
    padding-bottom:0;
  }

  .school_top_top>p:nth-child(1){
      height:45px;
      line-height:45px;
      font-size:16px;
  }
  .qingKe_list_new img{
    width:40%;

  }
}
</style>
