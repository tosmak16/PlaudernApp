<template>
  <button :class="styleName" @click="onClick" :disabled="disabled">
    {{ icon && icon }}
    <loading-spinner v-show="showLoader" :show="true" />
    {{ showLoader ? "" : value }}
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.vue";

const Button = Vue.extend({
  components: { LoadingSpinner },
  data() {
    return {};
  },

  props: {
    icon: Object,
    showLoader: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    value: String,
    onClick: Function,
    buttonType: {
      type: String,
      default: "standard"
    }
  },
  methods: {},
  computed: {
    styleName(): string {
      return `button--${this.buttonType}`;
    }
  }
});

export default Button;
</script>
