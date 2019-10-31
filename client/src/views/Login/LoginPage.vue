<template>
  <div class="login-container">
    <div class="side-content"></div>

    <div class="login-form-wrapper">
      <login-form
        :login="login"
        :clear-server-error="clearServerError"
        :login-error-message="loginErrorMessage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./LoginPage.scss";
</style>

<script lang="ts">
import { Action, Getter } from "vuex-class";
import { Component, Vue, Watch } from "vue-property-decorator";
import { UserForLogin } from "../../store/modules/login/types";

import LoginForm from "../../components/LoginForm/LoginForm.vue";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  components: { LoginForm }
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

  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/");
    }
  }
}
</script>
