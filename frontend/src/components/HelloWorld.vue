<template>  
<div class="columns">
  <div class="column is-6" style="background:#f0f0f0">    
    <div class="content">
       <h1 class="title">
        {{ msg }}
      </h1>      
    </div>    
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
 