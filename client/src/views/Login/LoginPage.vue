<template>
  <div class="login-container">
    <login-form
      :login="login"
      :clear-server-error="clearServerError"
      :login-error-message="loginErrorMessage"
    />
  </div>
</template>

<script lang="ts">
import LoginForm from "../../components/LoginForm/LoginForm.vue";
import { Action, Getter } from "vuex-class";
import { Component, Vue, Watch } from "vue-property-decorator";
import { UserForLogin } from "../../store/modules/login/types";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  components: {
    LoginForm
  }
})
export default class LoginPage extends Vue {
  @Action("login") login!: (formData: UserForLogin) => void;

  @Action("clearServerError") clearServerError!: () => void;

  @Getter("loginErrorMessage") loginErrorMessage!: string;
  @Getter("isLoggedInSuccess") isLoggedInSuccess!: boolean;

  @Watch("isLoggedInSuccess")
  onIsLoggedInSuccess(newValue: boolean, oldValue: boolean) {
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
@import "./LoginPage.scss";
</style>
