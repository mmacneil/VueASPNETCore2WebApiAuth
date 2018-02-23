<template>
    <section class="section">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>  
  </section> 
</template>

<script lang="ts">
import Spinner from '@/components/Spinner.vue'; // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { accountService } from '../../services/account.service';

@Component({
  components: {
    Spinner,
  },
})
export default class RegistrationForm extends Vue {

private isBusy: boolean = false;
private errors: string;

private handleSubmit() {
    alert('here');
}
}
</script>

<style lang="scss" scoped> 

</style>
 