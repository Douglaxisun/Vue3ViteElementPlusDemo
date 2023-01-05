import { createRouter,createWebHistory } from "vue-router";
import routes from "~pages"

// const router = createRouter({
//     routes:[
//         {
//             name:"主页",
//             component: () => import('../pages/home.vue')
//         },
//         {
//             name:"欢迎",
//             path:"/hello",
//             component:() => import('../pages/hello.vue')
//         }
//     ],
//     history:createWebHistory()
// })

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router