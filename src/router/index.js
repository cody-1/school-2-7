//引入vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutAdmin from '@/layout/admin/Test.vue'
//白名单
const whiteList = [
    "/",
    "/login"
]
import { useUserStore } from '../store/user'

//路由表
const routes = [
    { path: '/', redirect: '/login' }, 
   
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/admin/login.vue')
      },
    {
        path: '/Test', name: 'Test', component: () => import('../layout/admin/Test.vue') //懒加载 
    },
    
    
   
    
    {
        path: '/Test',
        name: 'Test',
        component: LayoutAdmin,
        children: [
            {
                path: '',
                name: 'main',
                component: () => import('@/layout/admin/main.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('@/views/static/user.vue')
            },
            {
                path: '/school',
                name: 'school',
                component: () => import('@/views/static/school.vue')
            },

            {
                path: '/student',
                name: 'student',
                component: () => import('@/views/static/student.vue')
            },

            {
                path: '/survey-assembly',
                name: 'survey-assembly',
                component: () => import('@/views/static/assembly.vue')
            },

            {
                path: '/question',
                name: 'question',
                component: () => import('@/views/static/question.vue')
            },
            {
                path: '/item',
                name: 'item',
                component: () => import('@/views/static/item.vue')
            },
            {
                path: '/cate',
                name: 'cate',
                component: () => import('@/views/static/cate.vue')
            },
             {
                path: '/results',
                name: 'results',
                component: () => import('@/views/static/results.vue')
            },
            {
                path: '/assembly',
                name: 'assembly',
                component: () => import('@/views/static/assembly.vue')
            },
        ]
    },

    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')// 懒加载  
    }

]
const router = createRouter({
    //模式
    history: createWebHashHistory(),
    routes
})
//前置路由守卫
//用户状态 user.js
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (whiteList.includes(to.path)) {
        next();
    }
    else {

        if (userStore.token && userStore.token.length > 0) {
            next()
        }
        else {
            next({ name: "login" })
        }

    }


})
export default router;