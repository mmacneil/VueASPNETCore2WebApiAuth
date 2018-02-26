<template>  
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-8 is-offset-2">
          <div class="content">
          <h1 class="title has-text-grey">{{ msg }}</h1>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
</style>
 