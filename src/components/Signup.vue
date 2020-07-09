<template>
  <div>
    <h1 class="display-4 text-center mb-5">Sign Up</h1>
    <div class="row">
      <div class="col-12">
        <div class="form-inline justify-content-center">
          <input
            type="text"
            class="form-control mr-2 mb-2 mb-sm-0"
            placeholder="email"
            v-model="email"
          >

          <input
            type="password"
            class="form-control mr-2 mb-2 mb-sm-0"
            placeholder="password"
            v-model="password"
          >

          <button class="btn btn-success" @click="signUp">Sign Up</button>
        </div>
        <p class="text-center mt-3">{{error.message}}</p>
        <div class="text-center">
          <router-link to="/signin">Already a user ? Sign In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: { message: "" }
    };
  },
  methods: {
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
