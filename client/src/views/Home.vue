<template>
  <div class="main-container">
    <div v-if="userList.length > 0" class="user-gallery">
      <profile-card
        v-for="item in userList"
        :age="item.age"
        :username="item.username"
        :key="item.id"
        :city="item.city"
        :country="item.country"
        :gender="item.gender"
        :photoUrl="item.photoUrl || undefined"
      />
    </div>
    <pagination :totalRecord="totalPages" :onPageChanged="getUsers" />
  </div>
</template>

<style lang="scss">
.main-container {
  display: grid;
  justify-items: center;
  justify-content: center;
}
.user-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8.3rem, auto));
  gap: 1rem;
  padding: 1rem;
}
</style>

<script lang="ts">
import Vue from "vue";
import ProfileCard from "../components/ProfileCard/ProfileCard.vue";
import { Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

import Pagination from "../components/Pagination/Pagination.vue";

@Component({
  components: { ProfileCard, Pagination }
})
export default class HomePage extends Vue {
  value: string = "";
  @Action("getUsers") getUsers!: () => void;
  @Getter("userList") userList!: [];
  @Getter("totalPages") totalPages!: 1;

  mounted() {
    this.getUsers();
  }
}
</script>
