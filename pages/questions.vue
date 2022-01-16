<template>
  <div class="h-full">
    <div v-if="questionNumber === 1" id="question" class="m-auto w-1/2">
      <h2 class="text-center font-bold mt-10">
        トレーニングの目的はなんですか？
      </h2>
      <ul
        class="question flex flex-wrap justify-around justify-center mt-8 items-end"
        alt=""
      >
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="One" v-model="radio1" />引き締めたい
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Two" v-model="radio1" />減量したい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input
              type="radio"
              value="Three"
              v-model="radio1"
            />運動不足を解消したい
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input
              type="radio"
              value="Hour"
              v-model="radio1" />不調を改善したい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input
              type="radio"
              value="Five"
              v-model="radio1" />健康維持をしたい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
      </ul>
    </div>
    <div v-if="questionNumber === 2" id="question" class="m-auto w-1/2">
      <h2 class="text-center font-bold mt-10">運動はニガテですか？</h2>
      <ul
        class="question flex flex-wrap justify-around justify-center mt-8 items-end"
        alt=""
      >
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="One" v-model="radio2" />とてもニガテです
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Two" v-model="radio2" />少しニガテです
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input
              type="radio"
              value="Three"
              v-model="radio2"
            />どちらでもありません
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Hour" v-model="radio2" />少し得意です
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Five" v-model="radio2" />とても得意です
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
      </ul>
    </div>
    <div v-if="questionNumber === 3" id="question" class="m-auto w-1/2">
      <h2 class="text-center font-bold mt-10">
        1日のトレーニング時間はどれくらいですか？
      </h2>
      <ul
        class="question flex flex-wrap justify-around justify-center mt-8 items-end"
        alt=""
      >
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="One" v-model="radio3" />30分以下
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Two" v-model="radio3" />30分以上
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Three" v-model="radio3" />1時間以上
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
      </ul>
    </div>
    <div v-if="questionNumber === 4" id="question" class="m-auto w-1/2">
      <h2 class="text-center font-bold mt-10">いつものトレーニング場所はどちらですか？</h2>
      <ul
        class="question flex flex-wrap justify-around justify-center mt-8 items-end"
        alt=""
      >
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="One" v-model="radio4" />ジムでトレーニング
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Two" v-model="radio4" />自宅でトレーニング
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
      </ul>
    </div>
    <div v-if="questionNumber === 5" id="question" class="m-auto w-1/2">
      <h2 class="text-center font-bold mt-10">トレーニングで鍛えたい部位はどこですか？</h2>
      <ul
        class="question flex flex-wrap justify-around justify-center mt-8 items-end"
        alt=""
      >
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="One" v-model="radio5" />腕
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Two" v-model="radio5" />胸部
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Three" v-model="radio5" />腹筋
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Hour" v-model="radio5" />脚
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li class="flex justify-center text-center">
          <label
            ><input type="radio" value="Five" v-model="radio5" />全身
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
      </ul>
    </div>

    <div id="check-button" class="h-1/2 check-button flex justify-around">
      <button
        class="w-12 h-12 bg-blue-400 text-lg text-white rounded-full hover:bg-blue-500"
        @click="back"
      >
        <a href="#">前へ</a>
      </button>
      <button
        class="w-16 h-16 bg-blue-400 text-lg text-white rounded-full hover:bg-blue-500"
        @click="next"
      >
        <a href="#">次へ</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  created: function () {},
  data() {
    return {
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      radio5: "",
      questionNumber: 1,
    };
  },
  methods: {
    next() {
      this.questionNumber += 1;
    },
    back() {
      this.questionNumber -= 1;
    },
  },
};
</script>

<style>
#question {
  height: 50%;
}
#question ul li {
  width: 50%;
}
#check-button {
  height: 50%;
}
</style>
