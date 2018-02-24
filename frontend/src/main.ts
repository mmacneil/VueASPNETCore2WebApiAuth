import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/sass/main.scss';
import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

axios.interceptors.request.use((config) => {

  const authToken = store.getters['auth/authToken'];
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});

