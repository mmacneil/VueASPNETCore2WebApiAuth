<template>  
<div class="columns">
  <div class="column is-10 hello"> 
   
       <h1 class="title">
        {{ msg }}
      </h1> 
       <p>This demo shows local and facebook user registration and login flow using Vue.js v2.5.13, ASP.NET Core 2.0 WebApi and Facebook api</p>        
  </div>
</div>
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
.hello {background:#f0f0f0}
</style>
 