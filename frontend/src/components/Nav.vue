<template>
 <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">    
    <router-link to="/" class="navbar-item">
    <img src="../assets/logo.png" alt="Fullstack Mark: Vue2/ASPNET Core 2 Authentication" width="136" height="26">
    </router-link>   
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
    <router-link to="/register"  class="navbar-item">Email signup</router-link>     
    <router-link to="/login"  class="navbar-item">Email login</router-link>   
    </div>
  </div>
</nav>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: #209cee !important;
}
</style>


