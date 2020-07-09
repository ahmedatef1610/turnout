import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        user:{},
        events:[],
    },
    mutations:{
        sign_in(state,user_payload){
            state.user=user_payload;
        },
        sign_out(state){
            state.user={};
        },
        set_events(state,events_payload){
            state.events=events_payload;
        }
    },
    actions:{
        signIn({commit},user_payload){
            commit('sign_in',user_payload);
        },
        signOut({commit}){
            commit('sign_out');
        },
        setEvents({commit},events_payload){
            commit('set_events',events_payload);
        }
    },
});