<template lang="html">
  	<div class="footer-bar">
    	<el-row>
        	<el-col :span='12' :push='6' :lg="{span:12,push:6}" :md="{span:14,push:5}" :sm="{span:22,push:4}" :xs="{span:22,push:1}">
            <div class="logo-box">
                <img src="../assets/images/logo.png" alt="" style="height: 5rem;width:rem;padding-top: 2rem">
            </div>
            <el-row>
              <el-col :span="4" :lg="{span:4,push:0}" :xs="{span:24,push:0}" class="ft-about ft-item v-new-ft-about">
                <div class="ft-space"></div>
                <div class="ft-tit">
                  关于我们
                </div>
                <ul class="ft-col-list">
                  <li>公司介绍</li>
                  <li>联系方式</li>
                  <li>加入我们</li>
                  <li>可能还有</li>
                </ul>
              </el-col>

              <el-col :span="4" :lg="{span:4,push:0}" :xs="{span:24,push:0}" class="ft-about ft-item v-new-ft-about">
                <div class="ft-space"></div>
                <div class="ft-tit">
                  商务合作
                </div>
                <ul class="ft-col-list">
                  <li>商务合作</li>
                  <li>广告合作</li>
                  <li>加入我们</li>
                  <li>可能还有</li>
                </ul>
              </el-col>
              <el-col :span="5" :lg="{span:5,push:0}" :xs="{span:24,push:0}" class="ft-item v-new-ft-about">
                <div class="ft-space"></div>
                <div class="ft-tit">
                  公司地址
                </div>
                <ul class="ft-col-list ft-add">
                  <li>中国上海市长宁区</li>
                  <li>金钟路658号</li>
                  <li>东华大学科技园</li>
                  <li>11号楼氢云商学</li>
                </ul>
              </el-col>
			  	<el-col :span="5" :lg="{span:5,push:0}" :xs="{span:24,push:0}" class="ft-item">
                	<div class="ft-space"></div>
                	<div class="ft-tit">关注我们</div>
                	<ul class="ft-col-list ft-add">
                  		<li>免费服务热线: 400-696-2298</li>
                  		<li>电子邮箱": marketing@ghrlib.com</li>
                	</ul>
              	</el-col>
			<!--
              <el-col :span="8" :lg="{span:8,push:4}" :xs="{span:24,push:0}"  :md="{span:8,push:2}" class="ft-item v-new-ft-about">
                <div class="ft-top-box">
                  <div class="ft-contact ft-contact2">
                     <img src="assets/images/icon-ft-tel.png" alt="" class="contact-left">
                     <div class="contacr-right">
                        <div class="">
                           免费服务热线
                        </div>
                        <div class="">
                           400-696-2298
                        </div>
                     </div>
                  </div>
                  <div class="ft-contact ft-contact2">
                     <img src="assets/images/icon-ft-email.png" alt="" class="contact-left">
                     <div class="contacr-right">
                        <div class="">
                           电子邮箱
                        </div>
                        <div class="">
                           marketing@ghrlib.com
                        </div>
                     </div>
                  </div>
                </div>

                <div class="ft-contact">
                   <div class="ft-get">
                     关注我们
                   </div>
                   <div class="ft-contact-chat">
                    	<img src="assets/images/icon-ft-wx.png" alt="">
                      	<img src="assets/images/icon-ft-weibo.png" alt="">
					</div>
                </div>
              </el-col>
			  -->
            </el-row>
        </el-col>
     </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
  .footer-bar{
    background: #000;
    padding:20px 0 30px 0;
    /*height: 240px;*/
    color:#fff;
  }
  .logo-box{
    margin-bottom: 16px;
  }
  .ft-about{
    margin-right: 5px;
  }
  .ft-tit{
    font-size: 20px;
    font-style: bold;

  }
  .ft-space{
    width: 20px;
    height: 4px;
    background: #fff;
    margin-bottom: 10px;
    display: inline-block;
  }
  .ft-col-list{
    list-style: none;
    font-size: 14px;
  }
  .ft-col-list li{
    padding: 5px 0;

  }
  .ft-add li{
    color:#f4d361;
    padding: 0;
  }
  .ft-add{
    padding-top: 5px;
  }
  .contact-left{
    vertical-align: middle;
    width: 44px;
    margin-right: 13px;
  }
  .contacr-right{
    display: inline-block;
    vertical-align: middle;
  }
  .contacr-right div:nth-child(1){
    font-weight: bold;
    font-size: 12px;
  }
  .ft-contact{
    margin-top: 10px;
  }
  .ft-get{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .ft-contact-chat img{
    width: 30px;
    margin-right: 5px;
  }

  @media only screen and (max-width:768px) {
    .footer-bar{
      	text-align: center;
    }
    .ft-contact2{
      	text-align: left;
    }
    .ft-top-box{
      margin: 0 auto;
      display: inline-block;
    }
    .ft-item{
      margin: 20px 0;
    }
	.logo-box{
    width:20%;
    margin-left:10px;
  }
  .logo-box img{
    width:100%;
  }
	.v-new-ft-about{
		width:33.3333333%;
		float:left;
		height:159px;
	}
  }

</style>
