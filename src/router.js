import {
    createWebHistory,
    createRouter
} from "vue-router"
import MainMenu from './views/MainMenu.vue'
import SubMenu1 from './views/SubMenu1.vue'
import SubMenu2 from './views/SubMenu2.vue'
import SubMenu3 from './views/SubMenu3.vue'
import SubMenu4 from './views/SubMenu4.vue'
import Login from './views/Login.vue'

const routes = [{
        path: '/', //경로
        name: 'home',
        component: MainMenu //import해온 컴포넌트,
    },
    {
        path: '/submenu1', //경로
        name: 'SubMenu1',
        component: SubMenu1 //import해온 컴포넌트,
    },
    {
        path: '/submenu2', //경로
        name: 'SubMenu2',
        component: SubMenu2 //import해온 컴포넌트,
    },
    {
        path: '/submenu3', //경로
        name: 'SubMenu3',
        component: SubMenu3 //import해온 컴포넌트,
    },
    {
        path: '/submenu4', //경로
        name: 'SubMenu4',
        component: SubMenu4 //import해온 컴포넌트,
    },
    {
        path: '/login', //경로
        name: 'Lgoin',
        component: Login //import해온 컴포넌트,
    },


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router; //위에서 import한 파일들을 내보내기