import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    QuizType: "CapitalType",
    QuizScreen: "Homepage",
    AllCountry: [],
    Question: {
      capital: "",
      flag: "",
    },
    Answer: {
      name: "",
      position: null,
    },
    QuizCountry: [],
    AnswerSelected: false,
    CorrectCount: 0,
    GameOver: false,
  },
  mutations: {
    SET_COUNTRY(state, CountryData) {
      state.AllCountry = CountryData;
    },
    SET_QUESTIONTYPE(state, type) {
      state.QuizType = type;
      state.QuizScreen = "Quiz";
      this.commit("GetQuestionAnswer");
    },
    GetQuestionAnswer(state) {
      let number = Math.floor(Math.random() * state.AllCountry.length);
      state.Question.capital = state.AllCountry[number].capital[0];
      state.Question.flag = state.AllCountry[number].flags.svg;
      state.Answer.name = state.AllCountry[number].name.common;
      state.QuizCountry[0] = { name: state.AllCountry[number].name.common };

      for (let i = 1; i < 4; i++) {
        while (
          state.QuizCountry.some(
            (country) => country.name === state.AllCountry[number].name.common
          )
        ) {
          number = Math.floor(Math.random() * state.AllCountry.length);
        }
        state.QuizCountry[i] = { name: state.AllCountry[number].name.common };
      }
      this.commit("SortAnswer");
    },
    SortAnswer(state) {
      let marker = ["A", "B", "C", "D"];
      state.QuizCountry.sort(() => Math.random() - 0.5);
      for (let i = 0; i < 4; i++) {
        state.QuizCountry[i].marker = marker[i];
        state.QuizCountry[i].correct = false;
        state.QuizCountry[i].incorrect = false;
      }

      state.Answer.position = state.QuizCountry.map(function (country) {
        return country.name;
      }).indexOf(state.Answer.name);
    },
    CheckAnswer(state, solution) {
      if (solution == state.Answer.position) {
        state.QuizCountry[solution].correct = true;
        state.AnswerSelected = true;
        state.CorrectCount += 1;
      } else {
        state.QuizCountry[state.Answer.position].correct = true;
        state.QuizCountry[solution].incorrect = true;
        state.AnswerSelected = true;
        state.GameOver = true;
      }
    },
    NextQuestion(state) {
      if (state.GameOver) {
        state.QuizScreen = "Result";
      } else {
        state.AnswerSelected = false;
        this.commit("GetQuestionAnswer");
      }
    },
    Restart(state) {
      state.AnswerSelected = false;
      state.CorrectCount = 0;
      state.GameOver = false;
      state.QuizScreen = "Homepage";
    },
  },
  actions: {
    GetAllCountry({ commit }) {
      axios
        .get(
          "https://api.allorigins.win/raw?url=https://restcountries.com/v3.1/all"
        )
        .then((response) => {
          let result = response.data.filter(item => item.region == "Europe")
          commit("SET_COUNTRY", result);
        });
    },
  },
  modules: {},
});
