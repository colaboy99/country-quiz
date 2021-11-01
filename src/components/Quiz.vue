<template>
  <div id="quiz">
    <component :is="QuizType" />
  </div>
</template>

<script>
import CapitalType from "./CapitalType";
import FlagType from "./FlagType";
import { mapState } from "vuex";

export default {
  name: "Quiz",
  components: {
    CapitalType,
    FlagType,
  },
  computed: mapState(["QuizType"]),
};
</script>

<style lang="scss" scoped>
#quiz {
  width: 100%;
}
</style>