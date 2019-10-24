<template>
  <div class="form">
    <h4 class="header-small">Login</h4>
    <div class="form-group">
      <text-input placeholder="Username" v-model="formData.username" label="Username" />
      <text-input
        v-model="formData.password"
        :shouldShowVisibility="true"
        :inputType="passwordVisible ? 'text' : 'password'"
        label="Password"
        placeholder="Password"
        :changePasswordVisibilityStatus="changePasswordVisibilityStatus"
      />
    </div>
    <span class="error-label">{{ loginErrorMessage }}</span>
    <div class="button-wrapper">
      <Button value="Login In" :onClick="handleLogin" />
    </div>
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
import TextInput from "../TextInput/TextInput.vue";
import Button from "../Button/Button.vue";

@Component({
  components: { Button, TextInput }
})
export default class LoginForm extends Vue {
  @Prop() login!: (formData: UserForLogin) => void;

  @Prop() clearServerError!: () => void;

  @Prop() loginErrorMessage!: string;

  formData: UserForLogin = {
    username: "",
    password: ""
  };

  passwordVisible: boolean = false;
  datePickerVisible: boolean = false;

  handleLogin = () => {
    if (this.loginErrorMessage) {
      this.clearServerError();
    }
    this.login(this.formData);
  };

  changePasswordVisibilityStatus() {
    this.passwordVisible = !this.passwordVisible;
  }
}
</script>
