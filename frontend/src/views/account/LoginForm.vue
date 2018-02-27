<template>
    <section class="section">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed</p>         
          <article class="message is-success" v-if="$route.query.new">
          <div class="message-body">
            <strong>You're all set {{$route.query.firstName}}!</strong> Login with your password to continue.
          </div>
          </article>
          <div class="box">          
            <form @submit.prevent="handleSubmit">
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Email" autofocus="" v-model="credentials.userName">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Password" v-model="credentials.password">
                </div>
              </div>
              <Spinner v-bind:show="isBusy" />
              <button class="button is-block is-info is-large is-fullwidth" type="submit">Login</button>
              <div class="errors-container" v-if="errors">
                 {{errors}}
              </div>
            </form>
          </div>
          <p class="has-text-grey">
             <router-link to="/register">Sign Up</router-link>
          </p>
        </div>
      </div>  
  </section> 
</template>

<script lang="ts">
import Spinner from '@/components/Spinner.vue'; // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { Credentials } from '../../models/credentials.interface';
// this.$route.query.page

@Component({
  components: {
    Spinner,
  },
})
export default class RegistrationForm extends Vue {

private isBusy: boolean = false;
private errors: string = '';
private credentials = {} as Credentials;

private created() {
  if (this.$route.query.new) {
    this.credentials.userName = this.$route.query.email;
  }
}

private handleSubmit() {
     this.isBusy = true;
     this.$store.dispatch('auth/authRequest', this.credentials).then((result) => {
     this.$router.push('/dashboard/home');
    })
   .catch((err) => {
    this.errors = err;
  })
  .then(() => {
    this.isBusy = false;
  });
 }
}
</script>

<style lang="scss" scoped> 

</style>
 