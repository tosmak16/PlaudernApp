<template>
  <div class="nav-bar">
    <li class="nav-bar-item nav-bar-selected">
      <a href="#!" class="nav-bar-link">Plaudern</a>
    </li>
    <ul class="nav-bar-list">
      <li class="nav-bar-item nav-bar-item--active">
        <a href="#" class="nav-bar-link">Selected</a>
      </li>
      <li class="nav-bar-item">
        <a href="#" class="nav-bar-link">Normal</a>
      </li>
      <li class="nav-bar-item nav-bar-has-children nav-bar-allow-hover">
        <span id="menuLink1" class="nav-bar-link">Contact</span>
        <ul class="nav-bar-children">
          <li class="nav-bar-item">
            <a href="#" class="nav-bar-child-link">Profile</a>
          </li>
          <li class="nav-bar-item">
            <a href="#" class="nav-bar-child-link">Log Out</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "./NavBar.scss";
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

const NavBar = Vue.extend({});

export default NavBar;
</script>
