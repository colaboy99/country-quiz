<template>
  <div id="homepage">
    <button class="button-type" @click="TypeSelect('CapitalType')">
      <span>Capital</span>
    </button>
    <button class="button-type" @click="TypeSelect('FlagType')">
      <span>Flag</span>
    </button>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Homepage",
  components: {},
  methods: {
    TypeSelect: function (type) {
      store.commit("SET_QUESTIONTYPE", type);
    },
  },
};
</script>

<style lang="scss" scoped>
#homepage {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 36px;

  .button-type {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: $warning;
    color: $tertiary;
    font-size: 28px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.3s ease all;
    border-radius: 6px;
    overflow: hidden;

    span {
      z-index: 2;
    }

    &::after {
      content: "";
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: calc(-100% - 80px);
      border-right: 80px solid transparent;
      border-bottom: 80px solid $purple-primary;
      transition: 0.4s ease-in-out all;
    }

    &:hover {
      &::after {
        left: 0;
      }
    }
  }
}
</style>