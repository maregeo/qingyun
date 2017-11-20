<template lang="html">
	<div class="moreExample">
        <div class="search">
          <div><input type="text" placeholder="您可以键入关键词搜索我们的成功案例"></div>
          <div><img src="../assets/images/search.png" alt=""></div>
        </div>
        <el-row >
          <el-col :span="24"><div class="grid-content bg-purple-dark" >
            <div class="sy_car_third">
              <p>成功案例 </p>
              <p>我们坚持重视新媒体、用好新媒体，发挥新媒体力量， 为广大读者和提供更专业、更有效、更有力的传播服务， 海量信息和深度资讯充分融通，打造优质新媒体联合传播平台。</p>
            </div>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="14" :push="5" class="v-more-lists">
            <el-row>
              <el-col :span="12" :xs="24" :ms="24" :md="24" :lg="12"><div class="grid-content   ">
                <div class="example-left-left">
                  <div><img src="../assets/images/readMin.jpg" alt=""></div>
                  <div>
                    <p>氢云</p>
                    <p>氢云新媒体</p>
                    <p></p>
                    <p>合作时间：2017-11-06</p>
                    <p>合作单位：吉林省一汽集团</p>
                    <p>编辑：GHRLIB</p>
                    <p @click="jumpClickRead">点击此处阅读</p>
                    <p @click="jumpcontact">点击了解合作</p>
                  </div>
                </div>
              </div></el-col>
              <el-col :span="12" :xs="24" :ms="24" :md="24" :lg="12"><div class="grid-content ">
                <div class="example-left-left">
                  <div><img src="../assets/images/readMin.jpg" alt=""></div>
                  <div>
                    <p>氢云</p>
                    <p>氢云新媒体</p>
                    <p></p>
                    <p>合作时间：2017-11-06</p>
                    <p>合作单位：吉林省一汽集团</p>
                    <p>编辑：GHRLIB</p>
                    <p @click="jumpClickRead">点击此处阅读</p>
                    <p @click="jumpcontact">点击了解合作</p>
                  </div>
                </div>
              </div></el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="block">
          	<el-pagination
            	@size-change="handleSizeChange"
            	@current-change="handleCurrentChange"
            	:current-page="currentPage4"
            	:page-sizes="[100, 200, 300, 400]"
            	:page-size="100"
            	layout="total, sizes, prev, pager, next, jumper"
            	:total="400">
          </el-pagination>
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
    methods: {
      jumpcontact(){
        this.$router.push('/contact')
      },
      jumpClickRead(){
        this.$router.push('/clickRead')
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<style lang="css">
	.el-row{
		margin:0;
	}
  .search{
   	padding-top: 10rem;
    text-align:center;
  }
  .search>div{
    display: inline-block;
    vertical-align: bottom;
  }
  .search>div>img{
    height:3rem;
    width:3rem;
  }
  .search>div>input{
    padding:0.5rem;
    font-size: 1.6rem;
	width:300px;
	height:30px;
  }
  .sy_car_third>p:nth-child(2){
    
  }
  .example-left-left{
    
  }
  .example-left-left>div{
    float: left;
  }
  .example-left-left>div:nth-child(1){
    width:50%;
  }
  .example-left-left>div>img{
    width:100%;
  }
  .example-left-left>div:nth-child(2){
    width:49%;
    margin-left: 1%;

  }
  .example-left-left>div:nth-child(2)>p:nth-child(1){
    font-size:3rem ;
  }
  .example-left-left>div:nth-child(2)>p:nth-child(2){
     font-size: 3rem;
   }
  .example-left-left>div:nth-child(2)>p:nth-child(3){
    height:0.5rem;
    width:2rem;
    background-color: #565656;
  }
  .example-left-left>div:nth-child(2)>p:nth-child(4){
    font-size: 1.2rem;
    margin-top: 2%;
  }
  .example-left-left>div:nth-child(2)>p:nth-child(5){
    font-size: 1.2rem;
    margin-top: 2%;
  }
  .example-left-left>div:nth-child(2)>p:nth-child(6){
    font-size: 1.2rem;
    margin-top: 2%;
  }
  .example-left-left>div:nth-child(2)>p:nth-child(7){
    font-size: 1.4rem;
    color: #ffffff;
    margin-top: 5%;
    padding:0.2rem;
    text-align: center;
    width:10rem;
    background-color: #565656;
    border-radius: 0.8rem;
  }
  .example-left-left>div:nth-child(2)>p:nth-child(8){
    font-size: 1.4rem;
    color: #ffffff;
    margin-top: 5%;
    padding:0.2rem;
    text-align: center;
    width:10rem;
    background-color: #565656;
    border-radius: 0.8rem;
  }
  .block{
    text-align: center;
  }
  .qingke_footer{
    background-color: #222222;
    margin-top: 1%;
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
	  	.search{
		  	padding-top:20px;
	  	}
		  .el-pagination__sizes{
			  display:none!important;
		}
		
	  	.search>div>input{
		  	width:200px;
		  	height:18px;
		  	padding:5px 0;
		  	font-size:12px;
	  	}
	  	.search>div>img{
		  	width:25px;
		 	height:25px;
	  	}
	  	.sy_car_third>p:nth-child(2){
		  	width:80%;
		  	margin:0 auto;
		  	line-height:20px;
	  	}
	  	.v-more-lists{
		  	width:100%;
		  	left:0;
			float:none;
			padding:0 10px;
	 	}
	  	.example-left-left>div:nth-child(2){
			width:45%;
			margin-left:5%;
	  	}
	}
</style>
