<template>
  <div id="app">

    <div class="top hidden-sm-and-down">
      <div class="grid-content bg-purple-light">
        <el-row class="ghr-header-cont">
          <el-col :span="2">
            <!-- <el-dropdown> -->
            <img src="./assets/images/logo.png" alt="" style="height: 5rem;width: 5rem;margin-top: 0.5rem">
            <!-- </el-dropdown> -->
          </el-col>
          <el-col :span="22">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" class="static" v-bind:class="{ 'class-a' : isA}" @click="shouYe">首页</el-menu-item>
              <el-submenu index="2">
                <span slot="title" class="static" v-bind:class="{ 'class-a' : isA}" @click="jumpBusinessSchool">关于氢云</span>
                <el-menu-item index="2-1" @click="jumpBusinessSchool">氢云商学院</el-menu-item>
                <el-menu-item index="2-2" @click="jumpQingKe">氢课</el-menu-item>
                <el-menu-item index="2-3" @click="jumpNewMedia">氢云新媒体</el-menu-item>
                <el-menu-item index="2-4" @click="jumpSchool">氢学堂</el-menu-item>
                <el-menu-item index="2-5" @click="jumpconvention">氢云会展</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <span slot="title" class="static" v-bind:class="{ 'class-a' : isA}">在线学习</span>
                <el-menu-item index="3-1">HR课程</el-menu-item>
                <el-menu-item index="3-2">领导力</el-menu-item>
                <el-menu-item index="3-3">华为课程</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <span slot="title" @click="jumpPublicClass" class="static" v-bind:class="{ 'class-a' : isA}">培训与咨询</span>
                <el-menu-item index="4-1" @click="jumpPublicClass">全国公开课</el-menu-item>
                <el-menu-item index="4-2" @click="jumpAsk">内训与咨询</el-menu-item>
                <el-menu-item index="4-3" @click="jumpBenchmarking">标杆游学</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <span slot="title" @click="jumpMedia" class="static" v-bind:class="{ 'class-a' : isA}">新媒体</span>
                <el-menu-item index="5-1" @click="jumpMedia">自媒体矩阵</el-menu-item>
                <el-menu-item index="5-2" @click="jumpMedia">特约撰稿人</el-menu-item>
                <el-menu-item index="5-3" @click="jumpMedia">广告合作</el-menu-item>
              </el-submenu>
              <el-submenu index="6">
                <span slot="title" @click="jumpactivity" class="static" v-bind:class="{ 'class-a' : isA}">展会活动</span>
                <el-menu-item index="6-1" @click="jumpactivity">线上展会</el-menu-item>
                <el-menu-item index="6-2" @click="jumpactivity">大型展会</el-menu-item>
                <el-menu-item index="6-3" @click="jumpactivity">沙龙活动</el-menu-item>
                <el-menu-item index="6-4" @click="jumpactivity">会展合作</el-menu-item>
              </el-submenu>
              <el-menu-item index="7" class="static" v-bind:class="{ 'class-a' : isA}" >环球人力资源智库</el-menu-item>
              <el-submenu index="8">
                <span slot="title" @click="jumpSuccessExample" class="static" v-bind:class="{ 'class-a' : isA, 'class-b': !isA}">成功案例</span>
                <el-menu-item index="8-1" @click="jumpSuccessExample">成功案例</el-menu-item>
                <el-menu-item index="8-2" @click="jumpSuccessExample">开课报道</el-menu-item>
                <el-menu-item index="8-3" @click="jumpSuccessExample">客户墙</el-menu-item>
              </el-submenu>
              <el-submenu index="9">
                <span slot="title" class="static" v-bind:class="{ 'class-a' : isA}" @click="jumpcontact">联系我们</span>
                <el-menu-item index="9-1" @click="jumpcontact">培训业务</el-menu-item>
                <el-menu-item index="9-2" @click="jumpcontact">微咨询</el-menu-item>
                <el-menu-item index="9-3" @click="jumpcontact">在线学习</el-menu-item>
                <el-menu-item index="9-4" @click="jumpcontact">广告合作</el-menu-item>
                <el-menu-item index="9-5" @click="jumpcontact">市场合作</el-menu-item>
                <el-menu-item index="9-6" @click="jumpcontact">招聘</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  (function(doc, win) {
    let docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        clientWidth = (clientWidth > 1600) ? 1600 : clientWidth;
        docEl.style.fontSize = 10 * (clientWidth / 1600) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
  })(document, window);
export default {
  name: 'app',
  data() {
    return {
      show2: false,
      activeIndex: '1',
      activeIndex2: '1',
      isA: false
    }
  },
  methods: {
    handleSelect(i) {
      console.log(i)
    },
    shouYe(){
      this.$router.push('/shouye')
    },
    jumpQingKe() {
      this.$router.push('/qingKe')
    },
    jumpconvention(){
      this.$router.push('/convention')
      this.isA = true;
    },
    jumpSchool(){
      this.$router.push('/school')
    },
    jumpBusinessSchool(){
      this.$router.push('/businessSchool')
      this.isA = true;
    },
    jumpNewMedia(){
      this.$router.push('/newMedia')
    },
    jumpcontact(){
      this.$router.push('/contact')
    },
    jumpSuccessExample(){
      this.$router.push('/successExample')
    },
    jumpMedia(){
      this.$router.push('/media')
      this.isA = true;
    },
    jumpactivity(){
      this.$router.push('/activity')
      this.isA = true;
    },
    jumpAsk(){
      this.$router.push('/ask')
    },
    jumpBenchmarking(){
      this.$router.push('/benchmarking')
    },
    jumpPublicClass(){
      this.$router.push('/publicClass')
    }

  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
