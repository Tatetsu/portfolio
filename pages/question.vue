<template>
  <div id="question" class="relative">
    <li v-for="(item, index) in data" :key="index">
      {{ item }}
    </li>
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
              class="text-sm md:text-md w-48 p-3 border rounded"
              v-model="textField"
              @change="selectAnswer(textField, 4)"
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
              class="text-sm md:text-md w-48 p-3 border rounded"
              v-model="textField"
              @change="selectAnswer(textField, 5)"
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
              name="weight"
              id="weight"
              placeholder="体重を入力ください"
              class="text-sm md:text-md w-48 p-3 border rounded"
              v-model="textField"
              @change="selectAnswer(textField, 6)"
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
              name="objective"
              id="objective"
              placeholder="目標の体重を入力ください"
              class="text-sm md:text-md w-48 p-3 border rounded"
              v-model="textField"
              @change="selectAnswer(textField, 7)"
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
    <div class="submit flex items-center" v-if="questionNumber === 7">
      <button
        class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4 hover:bg-red-400 hover:text-white"
        @click="submit"
      >
        登録して診断結果をみる
      </button>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
export default {
  layout: "question",
  data() {
    return {
      data: [],
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
      textField: "",
      buttonState: false,
      selectsErrorMassage: "",
    };
  },
  methods: {
    selectAnswer($event, index) {
      this.selects[index] = $event;
      console.log("this.selects", this.selects);
    },
    next() {
      // 今の質問が埋まっているかどうがを確認する
      if (this.selects[this.questionNumber]) {
        this.textField = "";
        this.questionNumber += 1;
      } else {
        alert("質問に回答してください。");
      }
    },
    back() {
      this.textField = this.selects[this.questionNumber - 1];
      /* this.radio = this.selects[this.questionNumber - 1];
      本来はここでthis.radioの前の回答の状態を維持したい */
      this.questionNumber -= 1;
    },
    changeState: function () {
      this.buttonState = !this.buttonState;
    },
    async submit() {
      //microCMSにデータを渡す
      const height = this.selects[5];
      const weight = this.selects[6];
      const objective = this.selects[7];
      const bmi = (weight / (height / 100) ** 2).toFixed(1);

      const objectiveWeight = weight - objective;
      console.log(objectiveWeight);

      const exercise = this.selects[1];
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
      const resultId = res.contents[0].id;
      const uid = this.$store.state.user.uid;
      const db = getFirestore();
      const docRef = await setDoc(doc(db, `users/${uid}`), {
        question1: this.selects[0],
        question2: this.selects[1],
        question3: this.selects[2],
        question4: this.selects[3],
        name: this.selects[4],
        composition: this.selects[5],
        weight: this.selects[6],
        objective: this.selects[7],
        objectiveWeight: objectiveWeight,
        bmi: bmi,
      });
      this.$router.push(`/result?id=${resultId}`);
    },    
  },
  mounted: function () {},
  computed: {},
};
</script>

<style scoped></style>
