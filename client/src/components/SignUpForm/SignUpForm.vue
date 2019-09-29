<template>
  <div>
    <h2 class="text-center text-primary">Sign Up</h2>
    <hr />

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Gender</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Location</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3">DOB</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 4" step="4">Login Details</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="form-group">
            <label class="control-label">I am a:</label>
            <v-radio-group v-model="formData.gender">
              <div class="radio-group">
                <v-radio label="Male" value="Male"></v-radio>
                <v-radio label="Female" value="Female"></v-radio>
              </div>
            </v-radio-group>
            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <div class="form-group">
            <v-text-field :rules="[rules.required]" v-model="formData.city" label="City"></v-text-field>
          </div>

          <div class="form-group">
            <v-text-field :rules="[rules.required]" v-model="formData.country" label="Country"></v-text-field>
          </div>
          <div class="form-group">
            <v-btn
              :disabled="!formData.city.length || !formData.country.length"
              color="primary"
              @click="e1 = 3"
            >Continue</v-btn>
            <v-btn @click="e1 = 1" text>Back</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <div class="form-group">
            <v-text-field
              @focus="datePickerVisible = true"
              :rules="[rules.required]"
              v-model="formData.dateOfBirth"
              label="DOB"
              :disabled="datePickerVisible"
            ></v-text-field>
            <v-date-picker
              @change="datePickerVisible = false"
              v-show="datePickerVisible"
              show-current
              v-model="formData.dateOfBirth"
            ></v-date-picker>
          </div>
          <div class="form-group">
            <v-btn :disabled="!formData.dateOfBirth.length" color="primary" @click="e1 = 4">Continue</v-btn>
            <v-btn @click="e1 = 2" text>Back</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="4">
          <div class="form-group">
            <v-text-field :rules="[rules.required]" v-model="formData.username" label="Username"></v-text-field>
          </div>
          <div class="form-group">
            <v-text-field
              v-model="formData.password"
              :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
              :type="passwordVisible ? 'text' : 'password'"
              label="Password"
              @click:append="passwordVisible = !passwordVisible"
              hint="At least 8 characters"
              :rules="[rules.required, rules.min]"
            ></v-text-field>
          </div>
          <span class="error-label">{{ signUpErrorMessage }}</span>
          <div class="form-group">
            <v-btn
              :disabled="
                !(formData.password.length > 7 && formData.username.length > 0)
              "
              color="primary"
              @click="handleRegister"
            >Continue</v-btn>
            <v-btn @click="e1 = 3" text>Back</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<style lang="scss" scoped>
@import "./SignUpForm.scss";

.error-label {
  display: flex;
  color: red;
  font-size: 0.7rem;
}

form {
  width: 300px;
  overflow-y: scroll;
}

.form-group {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  width: 100%;

  > div {
    margin: 0;
  }
}

.control-label {
  justify-self: start;
}

.radio-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  align-content: center;

  & div {
    margin: 0;
    margin-bottom: 0 !important;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

import { UserForRegister } from "../../store/modules/signUp/types";
import { Prop } from "vue-property-decorator";

@Component
export default class SignUpForm extends Vue {
  @Prop() register!: (formData: UserForRegister) => void;

  @Prop() clearServerError!: () => void;

  @Prop() signUpErrorMessage!: string;

  formData: UserForRegister = {
    username: "",
    city: "",
    country: "",
    password: "",
    gender: "Male",
    dateOfBirth: ""
  };

  passwordVisible: boolean = false;
  datePickerVisible: boolean = false;
  e1: number = 0;
  rules = {
    required: (value: string) => !!value || "Required.",
    min: (value: string) => value.length >= 8 || "Min 8 characters"
  };

  handleRegister = () => {
    if (this.signUpErrorMessage) {
      this.clearServerError();
    }
    this.register(this.formData);
  };
}
</script>
