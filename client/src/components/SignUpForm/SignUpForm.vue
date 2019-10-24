<template>
  <div class="sign-up-form">
    <h5 class="main-header">Create an account</h5>
    <div v-if="step === 1" class="form-group">
      <label class="control-label">Gender</label>
      <div class="radio-group">
        <div class="radio-wrapper">
          <input type="radio" id="female" value="female" v-model="formData.gender" />
          <label for="female">Female</label>
        </div>

        <div class="radio-wrapper">
          <input type="radio" id="male" value="male" v-model="formData.gender" />
          <label for="male">Male</label>
        </div>
      </div>
    </div>

    <div v-if="step === 2" class="form-group">
      <text-input rules="required" placeholder="City" v-model="formData.city" label="City" />
      <text-input
        rules="required"
        placeholder="Country"
        v-model="formData.country"
        label="Country"
      />
      <date-pick
        :inputAttributes="{ readonly: true }"
        :format="'YYYY-MM-DD'"
        v-model="formData.dateOfBirth"
        :editable="true"
      ></date-pick>
    </div>

    <div v-if="step === 3" class="form-group">
      <text-input
        rules="required"
        placeholder="Username"
        v-model="formData.username"
        label="Username"
      />
      <text-input
        rules="required|min:8"
        v-model="formData.password"
        :shouldShowVisibility="true"
        :inputType="passwordVisible ? 'text' : 'password'"
        label="Password"
        placeholder="Password"
        :changePasswordVisibilityStatus="changePasswordVisibilityStatus"
      />
    </div>
    <span class="error-label">{{ signUpErrorMessage }}</span>
    <div class="button-wrapper">
      <Button v-if="step > 1" value="Back" :onClick="handlePreviousStep" />
      <Button
        :value="step !== 3 ? 'Continue' : 'Sign up'"
        :onClick="step !== 3 ? handleNextStep : handleRegister"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./SignUpForm.scss";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import DatePick from "vue-date-pick";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

import { UserForRegister } from "../../store/modules/signUp/types";
import { Prop } from "vue-property-decorator";
import TextInput from "../TextInput/TextInput.vue";
import Button from "../Button/Button.vue";

import "vue-date-pick/dist/vueDatePick.css";

// Add the required rule
extend("required", required);
extend("min", {
  validate: value => value.length >= 8,
  message: "Password should be at least 8 charcters"
});

const SignUpForm = Vue.extend({
  components: { Button, TextInput, DatePick },

  data() {
    return {
      formData: {
        username: "",
        city: "",
        country: "",
        password: "",
        gender: "",
        dateOfBirth: "2019-01-01"
      },
      step: 1,
      passwordVisible: false
    };
  },

  props: {
    register: Function,
    clearServerError: Function,
    signUpErrorMessage: String
  },
  methods: {
    handleRegister() {
      if (!this.formData.username || !this.formData.password) {
        return false;
      }
      if (this.signUpErrorMessage) {
        this.clearServerError();
      }
      this.register(this.formData);
    },
    handleNextStep() {
      if (this.step === 1 && this.formData.gender === "") {
        return false;
      }
      if (
        this.step === 2 &&
        (!this.formData.country ||
          !this.formData.city ||
          !this.formData.dateOfBirth)
      ) {
        return false;
      }
      this.step += 1;
    },
    handlePreviousStep() {
      this.step -= 1;
    },

    changePasswordVisibilityStatus() {
      this.passwordVisible = !this.passwordVisible;
    }
  },
  computed: {}
});

export default SignUpForm;
</script>
