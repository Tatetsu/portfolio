<template>
  <div id="question" class="relative">
    <div>
      <QuestionBox
        :numbers="questionBox[0].numbers"
        :questionText="questionBox[0].questionText"
        :answers="questionBox[0].answers"
        v-if="questionNumber === 0"
        @select="selectAnswer($event, 0)"
      />
      <QuestionBox
        :numbers="questionBox[1].numbers"
        :questionText="questionBox[1].questionText"
        :answers="questionBox[1].answers"
        v-if="questionNumber === 1"
        @select="selectAnswer($event, 1)"
      />
      <QuestionBox
        :numbers="questionBox[2].numbers"
        :questionText="questionBox[2].questionText"
        :answers="questionBox[2].answers"
        v-if="questionNumber === 2"
        @select="selectAnswer($event, 2)"
      />
      <QuestionBox
        :numbers="questionBox[3].numbers"
        :questionText="questionBox[3].questionText"
        :answers="questionBox[3].answers"
        v-if="questionNumber === 3"
        @select="selectAnswer($event, 3)"
      />
      <div v-if="questionNumber === 4" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-xl md:text-3xl">05</p>
        </div>
        <h2 class="question_title text-xl md:text-3xl">
          登録するニックネームを入力ください
        </h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <div class="mb-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="ニックネームを入力ください"
              class="text-md md:text-lg w-full p-3 border rounded"
              @change="selectAnswer($event.target.value, 4)"
            />
          </div>
        </div>
      </div>
      <div v-if="questionNumber === 5" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-xl md:text-3xl">06</p>
        </div>
        <h2 class="question_title text-xl md:text-3xl">
          現在の身長を入力ください
        </h2>
        <div class="question_list flex flex-col items-center my-8">
          <div class="mb-2 flex items-end">
            <input
              type="text"
              name="composition"
              id="composition"
              placeholder="身長を入力ください"
              class="text-md md:text-lg w-full p-3 border rounded"
              @change="selectAnswer($event.target.value, 5)"
            /><span>cm</span>
          </div>
        </div>
      </div>
      <div v-if="questionNumber === 6" class="text-center font-bold pt-16">
        <!-- 2ページに分ける -->
        <div class="question_number">
          <p class="underline leading-loose text-xl md:text-3xl">07</p>
        </div>
        <h2 class="question_title text-lg md:text-3xl">
          現在の体重を入力ください
        </h2>
        <div class="question_list flex flex-col items-center my-8">
          <div class="mb-2 flex items-end">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="体重を入力ください"
              class="text-md md:text-xl w-full p-3 border rounded"
              @change="selectAnswer($event.target.value, 6)"
            /><span>kg</span>
          </div>
        </div>
      </div>
      <div v-if="questionNumber === 7" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-xl md:text-3xl">08</p>
        </div>
        <h2 class="question_title text-xl md:text-3xl">
          目標の体重を入力ください
        </h2>
        <div class="question_list flex flex-col items-center my-8">
          <div class="mb-2 flex items-end">
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="目標の体重を入力ください"
              class="text-md md:text-xl w-full p-3 border rounded"
              @change="selectAnswer($event.target.value, 7)"
            /><span>kg</span>
          </div>
        </div>
      </div>
    </div>

    <div class="switching_btn flex flex-col justify-center">
      <div
        class="question_next flex test-center my-8"
        v-if="questionNumber <= 6"
      >
        <button
          class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4 hover:bg-red-400 hover:text-white"
          @click="next"
        >
          次へ
        </button>
      </div>
      <div
        class="question_prev absolute top-0 left-10 test-center my-8"
        v-if="questionNumber >= 1"
      >
        <button class="btn text-md p-3" @click="back">
          <span class="hover:text-red-600">←前へ</span>
        </button>
      </div>
    </div>
    <div class="submit flex" v-if="questionNumber === 7">
      <button
        class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4 hover:bg-red-400 hover:text-white"
        @click="submit"
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
          numbers: "01",
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
          numbers: "02",
          questionText: "運動はニガテですか？",
          answers: [
            "とてもニガテです",
            "すこしニガテです",
            "どちらでもありません",
            "すこし得意です",
            "とても得意です",
          ],
        },
        {
          numbers: "03",
          questionText: "トレーニング時間はどれくらいですか？",
          answers: [
            "ほとんどやっていない",
            "週に1日くらい",
            "1日15分くらい",
            "1日30分くらい",
            "1日1時間以上",
          ],
        },
        {
          numbers: "04",
          questionText: "トレーニングをする場所はどこですか",
          answers: ["自宅", "ジム", "公園"],
        },
      ],
      selects: [],
      questionNumber: 0,
      buttonState: false,
    };
  },
  methods: {
    selectAnswer($event, index) {
      this.selects[index] = $event;
      console.log("this.selects", this.selects);
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
    async submit() {
      //microCMSにデータを渡す
      const height = this.selects[5];
      const weight = this.selects[6];
      const bmi = (weight / (height / 100) ** 2).toFixed(1);
      const exercise = this.selects[1]
      let filters = "";
      if (24 <= bmi) {
        filters = `bmiup[equals]24[and]exercise[contains]${exercise}`;
      } else if (19.1 <= bmi <= 23.9) {
        filters = `bmidown[equals]19.1[and]bmiup[equals]23.9[and]exercise[contains]${exercise}`;
      } else {
        filters = `bmidown[equals]19[and]exercise[contains]${exercise}`;
      }
      const res = await this.$microcms.get({
        endpoint: "motion",
        queries: {
          filters: filters,
        },
      });
      // console.log({ res });
      const resultId = res.contents[0].id
      this.$router.push(`/result?id=${resultId}`);
    },
  },
  computed: {},
};
</script>

<style scoped></style>
