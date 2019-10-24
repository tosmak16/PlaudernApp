<template>
  <div v-show="show" class="loading-ring">
    <div />
    <div />
    <div />
  </div>
</template>

<style lang="scss" scoped>
@import "./LoadingSpinner.scss";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

const LoadingSpinner = Vue.extend({
  data() {
    return {};
  },

  props: {
    color: {
      type: String,
      default: "blue"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  computed: {}
});

export default LoadingSpinner;
</script>
