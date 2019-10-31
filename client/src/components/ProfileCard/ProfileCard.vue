<template>
  <div class="card">
    <div class="card-image">
      <img :src="photoUrl" alt="profile one" />
    </div>
    <h3 class="profile-name">
      <i v-if="gender === 'Male'" class="fas fa-male"></i>
      <i v-else class="fas fa-female"></i>
      {{ username }}
    </h3>
    <ul class="social-icons">
      <li>
        <i class="fas fa-envelope"></i>
      </li>
      <li>
        <i class="fas fa-heart"></i>
      </li>
      <li>
        <i class="fas fa-user"></i>
      </li>
    </ul>

    <div class="details">
      <h2>
        {{ username }},
        {{ age }}
        <br />
        <span class="job-title">{{ city }}, {{ country }}</span>
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./ProfileCard.scss";
</style>

<script lang="ts">
import Vue from "vue";
import { validate } from "vee-validate";

const ProfileCard = Vue.extend({
  props: {
    username: {
      type: String,
      default: "Joe"
    },
    age: {
      type: Number,
      default: 18
    },
    city: {
      type: String,
      default: "Lagos"
    },
    country: {
      type: String,
      default: "Nigeria"
    },
    gender: {
      type: String,
      default: "Male"
    },
    photoUrl: {
      type: String,
      default: "https://image.ibb.co/dUTfmJ/profile_img.jpg"
    }
  }
});

export default ProfileCard;
</script>
