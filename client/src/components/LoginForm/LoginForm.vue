<template>
  <div class="form">
    <h2 class="text-center text-primary">Login</h2>
    <hr />
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step></v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="form-group">
            <v-text-field :rules="[rules.required]" v-model="formData.username" label="Username"></v-text-field>
          </div>
          <div class="form-group">
            <v-text-field
              v-model="formData.password"
              :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
              :type="passwordVisible ? 'text' : 'password'"
              label="Password"
              @click:append="passwordVisible = !passwordVisible"
            ></v-text-field>
          </div>
          <span class="error-label">{{ loginErrorMessage }}</span>
          <div class="form-group">
            <v-btn
              :disabled="
                !(formData.password.length > 0 && formData.username.length > 0)
              "
              color="primary"
              @click="handleLogin"
            >Login</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<style lang="scss" scoped>
@import "./LoginForm.scss";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

import { Prop } from "vue-property-decorator";
import { UserForLogin } from "../../store/modules/login/types";

@Component
export default class SignUpForm extends Vue {
  @Prop() login!: (formData: UserForLogin) => void;

  @Prop() clearServerError!: () => void;

  @Prop() loginErrorMessage!: string;

  formData: UserForLogin = {
    username: "",
    password: ""
  };

  passwordVisible: boolean = false;
  datePickerVisible: boolean = false;
  e1: number = 0;
  rules = {
    required: (value: string) => !!value || "Required.",
    min: (value: string) => value.length >= 8 || "Min 8 characters"
  };

  handleLogin = () => {
    if (this.loginErrorMessage) {
      this.clearServerError();
    }
    this.login(this.formData);
  };
}
</script>
