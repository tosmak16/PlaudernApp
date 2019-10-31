<template>
  <div class="pagination">
    <ul>
      <li
        class="pagination__item"
        :class="{ 'pagination__item--fade': currentPage === 1 }"
        @click="() => handleChangePage(currentPage - 1)"
      >
        <i class="fas fa-angle-left"></i>
      </li>

      <li
        class="pagination__item"
        :class="{ 'pagination__item--active': currentPage === 1 }"
        @click="() => handleChangePage(1)"
      >{{ 1 }}</li>

      <li
        v-if="currentPage > 5"
        class="pagination__item backward-period"
        @click="() => handleChangePage(currentPage - 5)"
      >...</li>

      <li
        v-for="item in getPageList()"
        :key="item"
        class="pagination__item"
        :class="{ 'pagination__item--active': currentPage === item }"
        @click="() => handleChangePage(item)"
      >{{ item }}</li>

      <li
        v-if="totalRecord - currentPage > 4"
        class="pagination__item forward-period"
        @click="() => handleChangePage(currentPage + 5)"
      >...</li>

      <li
        class="pagination__item"
        :class="{ 'pagination__item--active': currentPage === totalRecord }"
        @click="() => handleChangePage(totalRecord)"
      >{{ totalRecord }}</li>
      <li
        class="pagination__item"
        :class="{ 'pagination__item--fade': currentPage === totalRecord }"
        @click="() => handleChangePage(currentPage + 1)"
      >
        <i class="fas fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "./Pagination.scss";
</style>

<script lang="ts">
import Vue from "vue";
import { validate } from "vee-validate";
import { getPaginationList } from "../../utils";

const Pagination = Vue.extend({
  props: {
    onPageChanged: {
      type: Function,
      default: () => {}
    },
    totalRecord: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },

  methods: {
    setSelectedPage(selectedNumber: number) {
      this.currentPage = selectedNumber;
    },
    handleChangePage(selectedPageNumber: number) {
      const pageNumber = selectedPageNumber <= 1 ? 1 : selectedPageNumber;

      if (pageNumber >= this.totalRecord) {
        this.setSelectedPage(this.totalRecord);
        return this.onPageChanged(this.totalRecord);
      }
      this.setSelectedPage(pageNumber);
      return this.onPageChanged(pageNumber);
    },

    getPageList() {
      return getPaginationList(this.currentPage, this.totalRecord);
    }
  }
});

export default Pagination;
</script>
