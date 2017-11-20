import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test.vue'
import QingKe from '@/components/qingKe.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Convention from '@/components/convention.vue'
import School from '@/components/school.vue'
import BusinessSchool from '@/components/businessSchool.vue'
import NewMedia from '@/components/newMedia.vue'
import Contact from '@/components/contact.vue'
import SuccessExample from '@/components/successExample.vue'
import ClickRead from '@/components/clickRead.vue'
import MoreExample from '@/components/moreExample.vue'
import StartReport from '@/components/startReport.vue'
import AllClass from '@/components/allClass.vue'
import Detail from '@/components/detail.vue'
import Media from '@/components/media.vue'
import Activity from '@/components/activity.vue'
import Ask from '@/components/ask.vue'
import Benchmarking from '@/components/benchmarking.vue'
import PublicClass from '@/components/publicClass.vue'
import Zhuanxing from '@/components/zhuanxing.vue'
import Shizhan from '@/components/shizhan.vue'
import Yanxiu from '@/components/yanxiu.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: HelloWorld
    },
    {
      path: '/qingKe',
      name: 'qingKe',
      component: QingKe
    },{
      path: '/convention',
      name: 'convention',
      component: Convention
    },{
      path: '/school',
      name: 'school',
      component: School
    },{
      path: '/businessSchool',
      name: 'businessSchool',
      component: BusinessSchool
    },{
      path: '/newMedia',
      name: 'newMedia',
      component: NewMedia
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/successExample',
      name: 'successExample',
      component: SuccessExample
    },{
      path: '/clickRead',
      name: 'clickRead',
      component: ClickRead
    },{
      path: '/moreExample',
      name: 'moreExample',
      component: MoreExample
    },{
      path: '/startReport',
      name: 'startReport',
      component: StartReport
    },{
      path: '/allClass',
      name: 'allClass',
      component: AllClass
    },{
      path: '/detail',
      name: 'detail',
      component: Detail
    },{
      path: '/media',
      name: 'media',
      component: Media
    },{
      path: '/activity',
      name: 'activity',
      component: Activity
    },{
      path: '/ask',
      name: 'ask',
      component: Ask
    },{
      path: '/benchmarking',
      name: 'benchmarking',
      component: Benchmarking
    },{
      path: '/publicClass',
      name: 'publicClass',
      component: PublicClass
    },{
      path: '/zhuanxing',
      name: 'zhuanxing',
      component: Zhuanxing
    },{
      path: '/shizhan',
      name: 'shizhan',
      component: Shizhan
    },{
      path: '/yanxiu',
      name: 'yanxiu',
      component: Yanxiu
    }
  ]
})
