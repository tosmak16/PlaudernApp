<template>
  <div>
    <v-app>
      <v-app-bar>
        <div>hello</div>
      </v-app-bar>
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
@import "./styles/base.scss";
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  })
});
</script>
