<template>
  <div>
    <div id="question" class="relative">
      <QuestionBox
        :questionText="questionBox[0].questionText"
        :answers="questionBox[0].answers"
        v-if="questionNumber === 1"
        @select="selectAnswer($event, 0)"
      />
      <QuestionBox
        :questionText="questionBox[1].questionText"
        :answers="questionBox[1].answers"
        v-if="questionNumber === 2"
        @select="selectAnswer($event, 1)"
      />
      <QuestionBox
        :questionText="questionBox[2].questionText"
        :answers="questionBox[2].answers"
        v-if="questionNumber === 3"
        @select="selectAnswer($event, 2)"
      />
      <!-- 以下、数字を変えて8個つくる -->
    </div>

    <div class="switching_btn flex flex-col justify-center">
      <div
        class="question_next flex test-center my-8"
        v-if="questionNumber <= 6"
      >
        <button
          class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4"
          @click="next"
        >
          次へ
        </button>
      </div>
      <div
        class="question_prev absolute top-10 left-10 test-center my-8"
        v-if="questionNumber >= 2"
      >
        <button class="btn text-md p-3" @click="back">←前へ</button>
      </div>
    </div>
    <div class="submit flex" v-if="questionNumber === 7">
      <button
        type="submit"
        class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4"
      >
        入力を完了する
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "question",
  data() {
    return {
      questionBox: [
        {
          questionText: "トレーニングの目的はなんですか？",
          answers: [
            "引き締めたい",
            "減量したい",
            "運動不足を解消したい",
            "不調を改善したい",
            "健康維持がしたい",
          ],
        },
        {
          questionText: "運動は苦手ですか？",
          answers: [
            "健康維持がしたい",
            "健康維持がしたい",
            "健康維持がしたい",
            "健康維持がしたい",
            "健康維持がしたい",
          ],
        },
        {
          questionText: "トレーニング時間はどれくらいですか？",
          answers: [
            "減量したい",
            "減量したい",
            "減量したい",
            "減量したい",
            "減量したい",
          ],
        },
      ],
      selects: [],
      questionNumber: 1,
      buttonState: false,
    };
  },
  methods: {
    selectAnswer($event, index) {
      this.selects[index] = $event;
      console.log(this.selects);
    },
    next() {
      // 必須入力の処理 if or returnで制限をする ボタンの上にアラートする
      this.questionNumber += 1;
    },
    back() {
      this.questionNumber -= 1;
    },
    changeState: function () {
      this.buttonState = !this.buttonState;
    },
    submit() {
      //microCMSにデータを渡す
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>
