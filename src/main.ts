import { createApp } from 'vue'
import  App from "./App.vue"
import './index.css';
import {createWebHashHistory,createRouter} from 'vue-router'
import Xiao from "./components/Xiao.vue";
import Demo2 from "./components/Demo2.vue";


const history = createWebHashHistory()
const router=createRouter({
    history: history,
    routes: [
        {path:'/', component: Xiao},
        {path:'/xxx', component: Demo2},
    ]
})
const app=createApp(App);
app.use(router)
app.mount('#app')
