<template>
  <div>
    <profile-card />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProfileCard from "../components/ProfileCard/ProfileCard.vue";
import NavBar from "../components/NavBar/NavBar.vue";

export default Vue.extend({
  components: { ProfileCard },
  data: () => ({})
});
</script>
