<template>
  <div id="container">
    <h1 class="container-title">country quiz</h1>
    <img
      :class="[QuizScreen==='Result' ? 'display-none' : '', 'container-img']"
      src="@/assets/image/undraw_adventure_4hum.svg"
      alt="Adventure"
    />
    <div class="container-content">
      <component :is="QuizScreen" />
    </div>
  </div>
</template>

<script>
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Homepage from "./components/Homepage";
import { mapState } from "vuex";
import store from "@/store/index.js";

export default {
  name: "App",
  data: function () {
    return {};
  },
  created() {
    store.dispatch("GetAllCountry");
  },
  components: {
    Quiz,
    Result,
    Homepage,
  },
  computed: mapState(["QuizScreen"]),
};
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url("./assets/image/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  #container {
    width: 100%;
    max-width: 464px;
    margin: 30px 10px;
    position: relative;

    .container-title {
      font-size: 30px;
      font-weight: 700;
      line-height: 54px;
      color: $tertiary;
      text-transform: uppercase;
      margin-bottom: 10px;

      @media screen and (min-width: 464px) {
        font-size: 36px;
      }
    }

    .container-img {
      display: none;
      width: 120px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;

      &.display-none {
        display: none;
      }

      @media screen and (min-width: 375px) {
        display: block;
      }

      @media screen and (min-width: 464px) {
        top: -20px;
        width: 162px;
      }
    }

    .container-content {
      background-color: #fff;
      border-radius: 24px;
      position: relative;
      padding: 68px 32px 32px 32px;
      box-sizing: border-box;
    }
  }
}
</style>
