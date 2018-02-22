<template>
  <section class="section">    
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please enter your information</p>
          <div class="box">     
             <!-- @submit handles any form of submission. -->
             <!-- .prevent keeps the event from bubbling around and doing anything else. -->  
            <form @submit.prevent="handleSubmit">
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" placeholder="First name" v-model="user.firstName" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" placeholder="Last name" v-model="user.lastName">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Email" v-model="user.email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Password" v-model="user.password">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="text" placeholder="Location" v-model="user.location">
                </div>
              </div>          
           
              <button class="button is-block is-info is-large is-fullwidth" type="submit">Submit</button>
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
import { Component, Vue } from 'vue-property-decorator';
import { HTTP } from '@/http-common';
import axios from 'axios';
import { UserRegistration } from '../../models/user.registration.interface';
import {accountService} from '../../services/account.service';

@Component
export default class RegistrationForm extends Vue {

private user = {} as UserRegistration;

private handleSubmit() {
  alert(this.user.firstName + ' ' + this.user.lastName + ' ' + this.user.email + ' ' + this.user.password);
  accountService.register(this.user);
  
}
}
</script>
 