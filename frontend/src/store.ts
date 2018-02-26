import Vue from 'vue';
import Vuex from 'vuex';
import { Credentials } from './models/credentials.interface';
import { authService } from './services/auth.service';
import { profileService } from './services/profile.service';
import { EventBus } from './event-bus';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth: {
      namespaced: true,
      state: {
        token: localStorage.getItem('auth-token') || '',
        status: '',
      },
      mutations: {
        AUTH_REQUEST: (state) => {
          state.status = 'attempting authentication request';
        },
        AUTH_SUCCESS: (state, authToken) => {
          state.status = 'authentication succeeded';
          state.token = authToken;
        },
        AUTH_ERROR: (state) => {
          state.status = 'error';
        },
        AUTH_LOGOUT: (state) => {
          state.token = '';
        },
      },
      getters: {
        isAuthenticated: (state: any) => !!state.token,
        authStatus: (state: any) => state.status,
        authToken: (state: any) => state.token,
      },
      actions: {
      AUTH_REQUEST: ({commit, dispatch}: {commit: any, dispatch: any} , credentials: Credentials) => {

        return new Promise((resolve, reject) => {
          commit('AUTH_REQUEST');
          authService.login(credentials)
          .subscribe((result: any) => {
            localStorage.setItem('auth-token', result); // stash the auth token in localStorage
            commit('AUTH_SUCCESS', result);
            EventBus.$emit('logged-in', null);
            dispatch('user/USER_REQUEST', null, { root: true });
            resolve(result);
          },
          (errors: any) => {
            commit('AUTH_ERROR', errors);
            localStorage.removeItem('auth-token');
            reject(errors);
          });
        });
      },
      FACEBOOK_AUTH_REQUEST: ({commit, dispatch}: {commit: any, dispatch: any} , accessToken: string) => {
        return new Promise((resolve, reject) => {
          commit('AUTH_REQUEST');
          authService.facebookLogin(accessToken)
          .subscribe((result: any) => {
            localStorage.setItem('auth-token', result); // stash the auth token in localStorage
            commit('AUTH_SUCCESS', result);
            EventBus.$emit('logged-in', null);
            dispatch('user/USER_REQUEST', null, { root: true });
            resolve(result);
          },
          (errors: any) => {
            commit('AUTH_ERROR', errors);
            localStorage.removeItem('auth-token');
            reject(errors);
          });
        });
    },
    AUTH_LOGOUT: ({commit, dispatch}: {commit: any, dispatch: any}) => {
        return new Promise((resolve, reject) => {
          commit('AUTH_LOGOUT');
          localStorage.removeItem('auth-token');
          resolve();
        });
    },
   },
 },
    user: {
      namespaced: true,
      state: {
        profile: {},
        status: '',
      },
      actions: {
        USER_REQUEST: ({commit, dispatch}) => {
          commit('USER_REQUEST');
          profileService.get()
          .subscribe((result: any) => {
            commit('USER_SUCCESS', result);
          },
        (errors: any) => {
          commit('USER_ERROR');
          dispatch('auth/AUTH_LOGOUT', null, { root: true });
        });
      },
    },
    mutations: {
        USER_REQUEST: (state: any) => {
          state.status = 'attempting request for user profile data';
        },
        USER_SUCCESS: (state: any, resp: any) => {
          state.status = 'success';
          Vue.set(state, 'profile', resp);
        },
        USER_ERROR: (state) => {
          state.status = 'error';
        },
      },
    getters: {
        profile: (state: any) => state.profile,
      },
  },
},
});
