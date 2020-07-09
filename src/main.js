import Vue from 'vue';
import App from './App.vue';

import store from './store.js';
import router from './router.js';

import {firebaseApp} from './firebaseApp.js';

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    store.dispatch('signIn',user);
    router.push('/dashboard');
  }else{
    router.replace('/signin');
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
