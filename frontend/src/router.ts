import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RegistrationForm from './views/account/RegistrationForm.vue';
import LoginForm from './views/account/LoginForm.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'registrationForm',
      component: RegistrationForm,
    },
    {
      path: '/login',
      name: 'loginForm',
      component: LoginForm,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
