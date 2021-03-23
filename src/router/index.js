import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Profile = () => import('../views/profile/profile.vue')
const ShopCart = () => import('../views/shopcart/shopcart.vue')
const detail=()=>import('../views/detail/detail.vue')
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/profile',
        component: Profile
    },
    {
        path:'/shopcart',
        component: ShopCart
    },
    {
        path:'/detail/:iid',
        component: detail,
    }
]
const router = new VueRouter({
    routes
})
export default router