<template>
  <div class="input-group">
    <validation-provider :name="placeholder" :rules="rules" v-slot="{ errors }">
      <input
        :placeholder="placeholder"
        :class="styleName"
        :disabled="disabled"
        :type="inputType"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <label v-show="label" class="input-label" for="id">{{ label }}</label>
      <label v-show="shouldShowCheckMarkLabel" class="checkmark-label" />
      <button
        v-show="shouldShowVisibility"
        @click="changePasswordVisibilityStatus"
        class="password-visibility-indicator"
      >{{ inputType === 'password'? 'show': 'hide' }}</button>
      <span class="error-text">{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<style lang="scss" scoped>
@import "./TextInput.scss";
</style>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { ValidationProvider } from "vee-validate";

const TextInput = Vue.extend({
  components: { ValidationProvider },

  data() {
    return {};
  },

  props: {
    disabled: Boolean,
    isValid: Boolean,
    inputDidChange: Boolean,
    label: String,
    inputType: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    shouldShowVisibility: Boolean,
    changePasswordVisibilityStatus: {
      type: Function,
      default: () => {}
    },
    rules: {
      type: String,
      default: ""
    }
  },
  methods: {},
  computed: {
    styleName(): string {
      return `input-${this.inputType}`;
    },

    shouldShowCheckMarkLabel(): boolean {
      return this.isValid && this.inputDidChange && this.value.length > 0;
    }
  }
});

export default TextInput;
</script>
