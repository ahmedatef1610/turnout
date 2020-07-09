import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';

const routes=[
    {path:'/dashboard',component:Dashboard},
    {path:'/signin',component:Signin},
    {path:'/Signup',component:Signup},
];



export default new VueRouter({mode:'history',routes});