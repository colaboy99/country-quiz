<template>
  <div id="result">
    <img src="../assets/image/undraw_winners_ao2o.svg" alt="" />
    <h2>Results</h2>
    <p>
      You got <span class="result-count">{{ CorrectCount }}</span> correct
      answers
    </p>
    <button class="result-button" @click="Restart">Try again</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Result",
  methods: {
    Restart: function () {
      this.$store.commit("Restart");
    },
  },
  computed: mapState(["CorrectCount"]),
};
</script>

<style scoped lang="scss">
#result {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 238px;
    margin-bottom: 70px;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    color: $primary;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: $primary;
    margin-bottom: 70px;

    .result-count {
      font-size: 36px;
      font-weight: 700;
      line-height: 54px;
      color: $success;
    }
  }

  .result-button {
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    color: $primary;
    padding: 18px 60px;
    background-color: #fff;
    border: 2px solid $primary;
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>
