<template>
<div class="ghr-home-container">
  <div class="hidden-md-and-up mobil-top">
    <el-button @click="show2 = !show2" class="btn"><img src="../assets/images/icon_line.png" alt="" style="width: 3rem;height: 3rem;"></el-button>
    <div style="display: flex; margin-top: -5rem;">
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">
          <p>首页</p>
          <p>关于氢云</p>
          <p>在线学习</p>
          <p>培训与咨询</p>
          <p>新媒体</p>
          <p>展会活动</p>
          <p>环球人力资源智库</p>
          <p>成功案例</p>
        </div>
      </transition>
    </div>
  </div>

  <el-main>
    <div class="grid-content">

      <el-carousel class="v_main" :interval="3000000" arrow="always" :height="vHeight">
        <el-carousel-item>
          <img src="../assets/images/main_first.jpg" alt="" class="carousel-img" ref="carouselimg"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/main_second.jpg" alt="" class="carousel-img"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/main_third.jpg" alt="" class="carousel-img"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/main_four.jpg" alt="" class="carousel-img"/>
        </el-carousel-item>
      </el-carousel>
      <!--<swiper :options="swiperOption" ref="mySwiper">-->
      <!--&lt;!&ndash; slides &ndash;&gt;-->
      <!--<swiper-slide class="swiper-item">-->
      <!--<img src="../assets/images/a1.jpg" alt="" class="w100">-->
      <!--</swiper-slide>-->
      <!--<swiper-slide class="swiper-item">-->
      <!--<img src="../assets/images/a2.jpg" alt="" class="w100">-->
      <!--</swiper-slide>-->
      <!--<swiper-slide class="swiper-item">-->
      <!--<img src="../assets/images/a3.jpg" alt="" class="w100">-->
      <!--</swiper-slide>-->
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div>
         <div class="swiper-button-prev" slot="button-prev"></div>
         <div class="swiper-button-next" slot="button-next"></div>
         <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      <!--</swiper>-->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
      <div class="sy_bus">
        <p class="bus-tit">旗下业务模块</p>
        <p class="bus-con">环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
          	<el-col :span="24">
            	<div class="grid-content" style="margin-top: 3rem">
              		<div class="btn_more">点击此处了解更多</div>
            	</div>
        	</el-col>
        </el-row>
        <el-row  class="v-top">
          	<el-col :span="24">
            	<div class="grid-content" style="text-align: center">
              		<div style="font-size:6rem;color: #ffffff;" class="bus-tit bus-tit2">氢云商学</div>
            	</div>
          	</el-col>
        </el-row>
        <div class="sy_car">
          	<el-row>
            	<el-col :span="18" :push="3" class="v-school">
          			<el-row>
            			<el-col :span="4" :xs="24" :sm="12" :lg="5" class="v-el">
							<div class="grid-content">
								<div class="model_car">
									<div><img src="../assets/images/qingke.png" alt="" style="height: 5rem;width:5rem;"></div>
									<div class="model_car_top">
										<p>氢课</p>
										<p>碎片时代的，</p>
										<p>氢课即日起正式开讲！</p>
										<p class="xiangQing"><a href="#">了解详情</a></p>
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xs="24" :sm="12" :lg="5"  class="v-el">
							<div class="grid-content">
								<div class="model_car">
									<div><img src="../assets/images/qingXueTang1.png" alt="" ></div>
									<div class="model_car_top">
										<p>氢学堂</p>
										<p style="padding-top: 0.5rem">碎片时代的，</p>
										<p style="margin-top: 0.5rem">氢课即日起正式开讲！</p>
										<p class="xiangQing"><a href="#">了解详情</a></p>
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xs="24" :sm="12" :lg="5"  class="v-el">
							<div class="grid-content">
								<div class="model_car">
									<div><img src="../assets/images/shangXueYuan1.png" alt="" ></div>
									<div class="model_car_top">
										<p>氢云商学院</p>
										<p style="padding-top: 0.5rem">碎片时代的，</p>
										<p style="margin-top: 0.5rem">氢课即日起正式开讲！</p>
										<p class="xiangQing"><a href="#">了解详情</a></p>
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xs="24" :sm="12" :lg="5"  class="v-el">
							<div class="grid-content">
								<div class="model_car">
									<div><img src="../assets/images/xinMeiTi1.png" alt="" ></div>
									<div class="model_car_top">
										<p>氢云新媒体</p>
										<p style="padding-top: 0.5rem">碎片时代的，</p>
										<p style="margin-top: 0.5rem">氢课即日起正式开讲！</p>
										<p class="xiangQing"><a href="#">了解详情</a></p>
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="4" :xs="24" :sm="24" :lg="5" class="v-el">
							<div class="grid-content">
								<div class="model_car">
									<div><img src="../assets/images/huiZhan1.png" alt="" ></div>
									<div class="model_car_top">
										<p>氢云会展</p>
										<p style="padding-top: 0.5rem">碎片时代的，</p>
										<p style="margin-top: 0.5rem">氢课即日起正式开讲！</p>
										<p class="xiangQing"><a href="#">了解详情</a></p>
									</div>
								</div>
							</div>
						</el-col>
            		</el-row>
            	</el-col>
          	</el-row>
        </div>
      </div>
      <!--
	  <div class="sy_subject"></div>
	  -->
      	<div class="sy_car_second">
        	<p>在线精品课程</p>
        	<p></p>
        <el-row>
          	<el-col :span="12" :push="6" class="v_push">
            	<el-row :gutter="20" >
              		<el-col :span="12" :xs="24" :sm="12">
                		<div class="grid-content">
                  			<div class="line-course-item clearfix">
                    			<div class="cousre-left">
									<h4>标题</h4>
									<h5>副标题</h5>
									<div class="course-info">
										<div class="course-time">
											<p class="teacher">2017.10.15</p>
											<p>星期日</p>
											<p>19:30</p>
										</div>
										<div class="course-teacher">
											<p class="teacher">主讲人</p>
											<p>xxx&xxx</p>
											<p><img src="../assets/images/qingkemin1.png" alt="" class="v-img" ></p>
										</div>
                     				</div>
                    			</div>
								<div class="course-right">
									<div class="table-box">
										<div class="table-cell">
											<p>已有888位</p>
											<p>参加报名</p>
											<a href="#">立即报名</a>
										</div>
									</div>
								</div>
                  			</div>
                		</div>
             		</el-col>
              <el-col :span="12" :xs="24" :sm="12">
                <div class="grid-content ">
                  <div class="line-course-item clearfix" style="background-color: #FDC02C;color: #222222" >
                    <div class="cousre-left">
                      <h4>标题</h4>
                      <h5>副标题</h5>
                      <div class="course-info">
                        <div class="course-time">
                          <p>2017.10.15</p>
                          <p>星期日</p>
                          <p>19:30</p>
                        </div>
                        <div class="course-teacher">
                          <p class="teacher">主讲人</p>
                          <p>xxx&xxx</p>
                          <p><img src="../assets/images/qingkemin.png" alt="" class="v-img"></p>
                        </div>
                      </div>
                    </div>
                    <div class="course-right">
                      <div class="table-box">
                        <div class="table-cell">
                          <p>已有888位</p>
                          <p>参加报名</p>
                          <a href="">立即报名</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :xs="24" :sm="12">
                <div class="grid-content ">
                  <div class="line-course-item clearfix">
                    <div class="cousre-left">
                      <h4>标题</h4>
                      <h5>副标题</h5>
                      <div class="course-info">
                        <div class="course-time">
                          <p>2017.10.15</p>
                          <p>星期日</p>
                          <p>19:30</p>
                        </div>
                        <div class="course-teacher">
                          <p class="teacher">主讲人</p>
                          <p>xxx&xxx</p>
                          <p><img src="../assets/images/qingkemin1.png" alt=""  class="v-img"/></p>
                        </div>
                      </div>
                    </div>
                    <div class="course-right">
                      <div class="table-box">
                        <div class="table-cell">
                          <p>已有888位</p>
                          <p>参加报名</p>
                          <a href="">立即报名</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" :xs="24" :sm="12">
                <div class="grid-content ">
                  <div class="line-course-item clearfix" style="background-color: #FDC02C;color: #222222">
                    <div class="cousre-left">
                      <h4>标题</h4>
                      <h5>副标题</h5>
                      <div class="course-info">
                        <div class="course-time">
                          <p>2017.10.15</p>
                          <p>星期日</p>
                          <p>19:30</p>
                        </div>
                        <div class="course-teacher">
                          <p class="teacher">主讲人</p>
                          <p>xxx&xxx</p>
                          <p><img src="../assets/images/qingkemin.png" alt="" class="v-img"/></p>
                        </div>
                      </div>
                    </div>
                    <div class="course-right">
                      <div class="table-box">
                        <div class="table-cell">
                          <p>已有888位</p>
                          <p>参加报名</p>
                          <a href="">立即报名</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :xs="24" :sm="12">
                <div class="grid-content ">
                  <div class="line-course-item clearfix">
                    <div class="cousre-left">
                      <h4>标题</h4>
                      <h5>副标题</h5>
                      <div class="course-info">
                        <div class="course-time">
                          <p>2017.10.15</p>
                          <p>星期日</p>
                          <p>19:30</p>
                        </div>
                        <div class="course-teacher">
                          <p class="teacher">主讲人</p>
                          <p>xxx&xxx</p>
                          <p><img src="../assets/images/qingkemin1.png" alt="" class="v-img"/></p>
                        </div>
                      </div>
                    </div>
                    <div class="course-right">
                      <div class="table-box">
                        <div class="table-cell">
                          <p>已有888位</p>
                          <p>参加报名</p>
                          <a href="">立即报名</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12" :xs="24" :sm="12">
                <div class="grid-content ">
                  <div class="line-course-item clearfix" style="background-color: #FDC02C;color: #222222">
                    <div class="cousre-left">
                      <h4>标题</h4>
                      <h5>副标题</h5>
                      <div class="course-info">
                        <div class="course-time">
                          <p>2017.10.15</p>
                          <p>星期日</p>
                          <p>19:30</p>
                        </div>
                        <div class="course-teacher">
                          <p class="teacher">主讲人</p>
                          <p>xxx&xxx</p>
                          <p><img src="../assets/images/qingkemin.png" alt="" class="v-img"/></p>
                        </div>
                      </div>
                    </div>
                    <div class="course-right">
                      <div class="table-box">
                        <div class="table-cell">
                          <p>已有888位</p>
                          <p>参加报名</p>
                          <a href="">立即报名</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      	<div class="sy_car_third">
        	<p>近期课程</p>
        	<p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        	<el-row class="v-books">
				<el-col :span="12" :push="6" class="v-books-list">
					<el-row :gutter="20">
						<el-col :span="12" :xs="24" :sm="12">
							<div class="grid-content ">
								<div class="line-course-item clearfix" style="background-color:#fa5f5;color:#fff">
									<div class="cousre-left">
										<h4>标题</h4>
										<h5>副标题</h5>
										<div class="course-info">
											<div class="course-time">
												<p>2017.10.15</p>
												<p>星期日</p>
												<p>19:30</p>
											</div>
											<div class="course-teacher">
												<p class="teacher">主讲人</p>
												<p>xxx&xxx</p>
												<p><img src="../assets/images/qingkemin.png" alt="" class="v-img"/></p>
											</div>
										</div>
									</div>
									<div class="course-right">
										<div class="table-box">
											<div class="table-cell">
											<p>已有888位</p>
											<p>参加报名</p>
											<a href="">立即报名</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="12" :xs="24" :sm="12">
							<div class="grid-content ">
								<div class="line-course-item clearfix" style="background-color: #FDC02C;color: #222222">
									<div class="cousre-left">
										<h4>标题</h4>
										<h5>副标题</h5>
										<div class="course-info">
											<div class="course-time">
												<p>2017.10.15</p>
												<p>星期日</p>
												<p>19:30</p>
											</div>
											<div class="course-teacher">
												<p class="teacher">主讲人</p>
												<p>xxx&xxx</p>
												<p><img src="../assets/images/qingkemin.png" alt="" class="v-img"/></p>
											</div>
										</div>
									</div>
									<div class="course-right">
										<div class="table-box">
											<div class="table-cell">
												<p>已有888位</p>
												<p>参加报名</p>
												<a href="">立即报名</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</el-col>
					</el-row>
				</el-col>
			</el-row>		
      	</div>
      <div class="sy_car_second v-newmt">
        <p>百万HR的共同选择</p>
        <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <el-row>
          	<el-col :span="12" :push="6" class="v-hr">
            	<el-row class="v-hello-row">
              		<el-col :span="6" :xs="12" :sm="12" :md="12" :lg="6" v-for="item in logos" key="logos" class="v-hr-list">
                		<div class="parent">
							<div class="list_icon">
								<div><img :src="getImg(item)" alt=""  class="v-hr-imgs"></div>
							</div>
               			</div>
              		</el-col>
           	 	</el-row>
          	</el-col>
        </el-row>
      </div>
      <div class="sy_car_third">
        <p>关注我们</p>
        <p>环球人力资源智库（GHR/GHRlib）—— 最具影响力人力资源新媒体， 最好的HR学习地盘；组织学习与人才培养专家，致力于推动中国企业 人力资源效能提升与组织转型。</p>
        <div>
          	<el-row>
            	<el-col :span="12" :push="6" class="v_about">
					<el-row >
						<el-col :span="6" :xs="12" :sm="12" :lg="6">
							<div class="chat">
								<p><img src="../assets/images/red_logo.png" alt="" style="height: 20%;width: 20%;"></p>
								<p><img src="../assets/images/red_sign.jpg" alt="" style="height: 40%;width: 40%;"></p>
								<p><img src="../assets/images/weiXin.png" alt=""></p>
								<div>
								<p>微信公众平台</p>
								<p>每天学点HR</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6" :xs="12" :sm="12" :lg="6">
							<div class="chat">
								<p><img src="../assets/images/study.png" alt="" style="height: 20%;width: 20%;"></p>
								<p><img src="../assets/images/study_sign.jpeg" alt="" style="height: 40%;width: 40%;"></p>
								<p><img src="../assets/images/weiXin.png" alt=""></p>
								<div>
								<p>微信公众平台</p>
								<p>每天学点HR</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6" :xs="12" :sm="12" :lg="6">
							<div class="chat">
								<p><img src="../assets/images/read.png" alt="" style="height: 20%;width: 20%;"></p>
								<p><img src="../assets/images/read_sign.jpg" alt="" style="height: 40%;width: 40%;"></p>
								<p><img src="../assets/images/weiXin.png" alt=""></p>
								<div>
								<p>微信公众平台</p>
								<p>每天学点HR</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6" :xs="12" :sm="12" :lg="6">
							<div class="chat">
								<p><img src="../assets/images/manage.png" alt="" style="height: 20%;width: 20%;"></p>
								<p><img src="../assets/images/manage_sign.jpg" alt="" style="height: 40%;width: 40%;"></p>
								<p><img src="../assets/images/weiXin.png" alt=""></p>
								<div>
								<p>微信公众平台</p>
								<p>每天学点HR</p>
								</div>
							</div>
						</el-col>
					</el-row>
            	</el-col>
          	</el-row>
        </div>
      	</div>
    </div>
  </el-main>
  <div class="sy_car_second" >aaa</div>
</div>
</template>
<script>

//  import { swiper, swiperSlide } from 'vue-awesome-swiper'
//  require('swiper/dist/css/swiper.css')
//  var mySwiper = new Swiper('.swiper-container', {
//
//  })

//var swiper = new Swiper('.swiper-container');



export default {
  name: 'HelloWorld',
  components: {
    //    swiper,
    //    swiperSlide
  },
  data() {
    return {
      vHeight:'100vh',
      show2: false,
      activeIndex: '1',
      activeIndex2: '1',
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
        'lianTong.png',
        'meiDi.png',
      ]
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      //      notNextTick: true,
      //      swiperOption: {
      //        notNextTick: true,
      //        loop:true,
      //        initialSlide:0,
      //        autoplay: 3000,
      //        direction : 'horizontal',
      //        grabCursor : true,
      //        pagination : '.swiper-pagination',
      //        paginationClickable :true,
      //        onSlideChangeEnd: swiper => {}
      //      }
    }
  },
  	mounted(){
		let self=this;
		function pub(){
			console.log(111);
			if(document.body.clientWidth<=640){
				setTimeout(function(){
					var h=self.$refs.carouselimg.clientHeight;
					self.vHeight=h+"px";
				});
			}else{
				self.vHeight="100vh";
			}
		}
		window.onresize=function(){
			pub();
		}
		pub();
    },
  methods: {
    handleSelect(i) {
      console.log(i)
    },
    jump() {
      this.$router.push('/test')
    },
    getImg(url) {
      // console.log(url)'../assets/images/'+
      return require(`../assets/images/${url}`)
    },
    jumpQingKe() {
      this.$router.push('/qingKe')
    },
    getImg(url) {
      // console.log(url)'../assets/images/'+
      return require(`../assets/images/${url}`)
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
