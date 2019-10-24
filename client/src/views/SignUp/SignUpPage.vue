<template>
  <div class="sign-up-container">
    <div class="side-content"></div>

    <div class="sign-up-form-wrapper">
      <sign-up-form
        :register="register"
        :clear-server-error="clearServerError"
        :sign-up-error-message="signUpErrorMessage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./SignUpPage.scss";
</style>

<script lang="ts">
import TextInput from "../../components/TextInput/TextInput.vue";
import Button from "../../components/Button/Button.vue";
import SignUpForm from "../../components/SignUpForm/SignUpForm.vue";

import { Action, Getter } from "vuex-class";
import { Component, Vue, Watch } from "vue-property-decorator";
import { UserForRegister } from "../../store/modules/signUp/types";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  components: { TextInput, Button, SignUpForm }
})
export default class SignUpPage extends Vue {
  value: string = "";

  click() {
    console.log(this.value);
  }
  @Action("register") register!: (formData: UserForRegister) => void;
  @Action("clearServerError") clearServerError!: () => void;
  @Getter("signUpErrorMessage") signUpErrorMessage!: string;
  @Getter("isSignUpSuccess") isSignUpSuccess!: boolean;
  @Watch("isSignUpSuccess")
  onIsSignUpSuccess(newValue: boolean, oldValue: boolean) {
    if (newValue === true && newValue !== oldValue) {
      this.$router.push("/");
    }
  }
  beforeRouteEnter(to: string, from: string, next: (path?: string) => void) {
    const token = localStorage.getItem("token");
    if (token) {
      next("/");
    }
    next();
  }
}
</script>


