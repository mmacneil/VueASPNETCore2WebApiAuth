<template>
 <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">    
    <router-link to="/" class="navbar-item">
    <img src="../assets/logo.png" alt="Fullstack Mark: Vue2/ASPNET Core 2 Authentication" width="136" height="26">
    </router-link>   
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
    <a class="navbar-item" href="javascript:void(0)" v-on:click="logoff" v-show="isAuthenticated">Logoff {{profile.firstName}}</a>
    <router-link to="/register"  class="navbar-item" v-show="!isAuthenticated">Email signup</router-link>     
    <router-link to="/login"  class="navbar-item"  v-show="!isAuthenticated">Email login</router-link>
    <router-link to="/facebook-login" class="navbar-item" v-show="!isAuthenticated">Facebook signup/login</router-link>
    <router-link to="/dashboard/home"  class="navbar-item"  v-show="isAuthenticated">Dashboard</router-link>   
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EventBus } from '.././event-bus';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters({
    isAuthenticated: 'auth/isAuthenticated',
    profile: 'user/profile',
  }),
})
export default class Nav extends Vue {

  private logoff() {
     this.$store.dispatch('auth/authLogout').then(() => {
        this.$router.push('/');
     });
  }
  private created() {
   EventBus.$on('logged-in', (payLoad: any) => {
      // this doesn't currently do anything in this demo but does get fired on successful login.
      // leaving it here to show how to allow communication between unrelated components - ie. Store -> Component
      console.log('logged-in message received...');
    });
  }

  private destroyed() {
    EventBus.$off('logged-in');
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: #209cee !important;
}
</style>


