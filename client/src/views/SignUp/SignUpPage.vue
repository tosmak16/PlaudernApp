<template>
  <div class="sign-up-container">
    <sign-up-form
      :register="register"
      :clear-server-error="clearServerError"
      :sign-up-error-message="signUpErrorMessage"
    />
  </div>
</template>

<script lang="ts">
import SignUpForm from "../../components/SignUpForm/SignUpForm.vue";
import { Action, Getter } from "vuex-class";
import { Component, Vue, Watch } from "vue-property-decorator";
import { UserForRegister } from "../../store/modules/signUp/types";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  components: {
    SignUpForm
  }
})
export default class SignUpPage extends Vue {
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

<style lang="scss" scoped>
@import "./SignUpPage.scss";
</style>
