import { profileService } from '../../services/profile.service';
import { EventBus } from '../../event-bus';
import Vue from 'vue';

const state = { profile: {}, status: '' };

const getters = {
    profile: (userState: any) => userState.profile,
};

const actions = {
    userRequest: ({commit, dispatch}: {commit: any, dispatch: any}) => {
        commit('userRequest');
        profileService.get()
        .subscribe((result: any) => {
          commit('userSuccess', result);
        },
      (errors: any) => {
        commit('userError');
        dispatch('auth/authLogout', null, { root: true });
      });
    },
};

const mutations = {
    userRequest: (userState: any) => {
        userState.status = 'attempting request for user profile data';
    },
    userSuccess: (userState: any, userResp: any) => {
      userState.status = 'success';
      Vue.set(userState, 'profile', userResp);
    },
    userError: (userState: any) => {
      userState.status = 'error';
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

