import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const authModule = {
  state: {
    token: localStorage.getItem('auth-token') || '',
    status: '',
   },
  mutations: { },
  actions: {
    AUTH_REQUEST: ({commit, dispatch}: {commit: any, dispatch: any} , user: any) => {
      alert('auth_request');
    },
   },
  getters: {
    isAuthenticated: (state: any) => !!state.token,
    authStatus: (state: any) => state.status,
  },
};

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth: authModule,
  },
});
