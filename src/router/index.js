import Vue from 'vue';
import views from '@/views';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/login',
        name: 'Login',
        component: views.Login
    }
];
Vue.use(Router);
// 路由初始化
const router = new Router({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.path === '/login' || to.path === '/') {
        next();
    } else {
        next('/login');
    }
});
export default router;