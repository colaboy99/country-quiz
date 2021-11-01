<template>
  <div id="flagtype">
    <img :src="Question.flag" alt="Flags" />
    <h4 class="quiz-question">Which country does this flag belong to?</h4>
    <ul class="quiz-answers">
      <li
        :class="[
          { 'quiz-answer-success': quiz.correct },
          { 'quiz-answer-error': quiz.incorrect },
          { 'quiz-answer-selected': AnswerSelected },
          'quiz-answers-item',
        ]"
        v-for="(quiz, index) in QuizCountry"
        :key="index"
        @click="Check(index)"
      >
        <span class="quiz-marker">{{ quiz.marker }}</span
        ><span class="quiz-answer">{{ quiz.name }}</span>
        <span class="material-icons-round correct"> check_circle_outline </span>
        <span class="material-icons-round incorrect"> highlight_off </span>
      </li>
    </ul>
    <button
      :class="[{ 'quiz-answer-selected': AnswerSelected }, 'button-next']"
      @click="Next"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FlagType",
  data: function () {
    return {};
  },
  methods: {
    Check: function (answerPosition) {
      console.log(answerPosition);
      this.$store.commit("CheckAnswer", answerPosition);
    },
    Next: function () {
      this.$store.commit("NextQuestion");
    },
  },
  computed: mapState(["Question", "QuizCountry", "AnswerSelected"]),
};
</script>

<style lang="scss" scoped>
#flagtype {
  width: 100%;
  height: 100%;

  > img {
    width: 84px;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
    border-radius: 4px;
    margin-bottom: 18px;
  }

  .quiz-question {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: $secondary;
  }

  .quiz-answers {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    .quiz-answers-item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      margin: 24px 0;
      color: $purple-primary;
      border: 2px solid $purple-secondary;
      border-radius: 12px;
      cursor: pointer;

      &.quiz-answer-selected {
        pointer-events: none;
      }

      .quiz-marker {
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
      }

      .quiz-answer {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        margin-left: 46px;
      }

      .material-icons-round {
        font-family: "Material Icons";
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        display: none;
        text-align: right;
        margin-left: auto;
      }

      &:hover {
        color: #fff;
        background-color: $warning;
        border: 2px solid $warning;
      }

      &.quiz-answer-success {
        color: #fff;
        background-color: $success;
        border: 2px solid $success;
        .correct {
          display: block;
        }
      }

      &.quiz-answer-error {
        color: #fff;
        background-color: $error;
        border: 2px solid $error;
        .incorrect {
          display: block;
        }
      }
    }
  }

  .button-next {
    display: none;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #fff;
    padding: 15px 35px;
    margin-left: calc(100% - 113px);
    border: none;
    background-color: $warning;
    box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
    border-radius: 12px;
    cursor: pointer;

    &.quiz-answer-selected {
      display: block;
    }
  }
}
</style>