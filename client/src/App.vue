<template>
  <div>
    <router-view />
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
