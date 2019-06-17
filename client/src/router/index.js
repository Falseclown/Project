import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
        meta: {
            title: '登陆'
        }
    }, {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: {
            title: '加班/休假'
        }
    },{
        path:'/',
        redirect:'/index'
    },{
        path:'/search',
        name:'search',
        component:()=>import('../views/search'),
        meta:{
            title:'搜索'
        }
    },{
        path:'/detail/:type/:id',
        name:'detail',
        component:()=>import('../views/home/detail'),
        meta:{
            title:'详情'
        },
        props:true
    },
    {
        path:'/history/:type/:id',
        name:'history',
        component:()=>import('../views/home/history'),
        props: true,
        meta:{
            title:'审批历史'
        },
        
    },{
        path:'/commit/:type',
        name:'/commit',
        component:()=>import('../views/commit/index'),
        props:true,
        meta:{
            title:'申请表'
        }
    }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router 
