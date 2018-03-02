<template>
  <div class="home">
    <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-8 is-offset-2">
          <div class="content">
          <h1 class="title has-text-grey">JWT Auth Demo</h1>
          <p>This demo shows local and facebook user registration and login flow using Vue.js v2.5.13, ASP.NET Core 2.0 WebApi and Facebook api</p> 
          </div>         
         <div class="box">   
           <router-link to="/register" class="button is-link">Signup with email</router-link>
           <router-link to="/login" class="button is-link">Login with email</router-link>  
           <router-link to="/facebook-login" class="button is-link">Signup/login with facebook</router-link>        
         </div>
        </div>         
      </div>     
    </div>
   </section>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped> 
.box > .button {margin-right:8px}
</style>