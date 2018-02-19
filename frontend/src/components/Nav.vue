<template>
 <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">    
    <router-link to="/" class="navbar-item">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </router-link>   
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
    <router-link to="/register"  class="navbar-item">Email signup</router-link>     
    </div>
  </div>
</nav>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: #42b983 !important;
}
</style>


