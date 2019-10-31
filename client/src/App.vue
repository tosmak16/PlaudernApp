<template>
  <div>
    <nav-bar v-if="shouldShowNavBar" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/base.scss";
</style>

<script lang="ts">
import Vue from "vue";

import NavBar from "./components/NavBar/NavBar.vue";

export default Vue.extend({
  components: { NavBar },
  name: "App",
  computed: {
    shouldShowNavBar() {
      return this.$route.path !== "/register" && this.$route.path !== "/login";
    }
  }
});
</script>
