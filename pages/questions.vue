<template>
  <div class="h-full">
    <div
      v-if="questionNumber === 1"
      id="question"
      class="h-1/2 flex flex-column justify-center mt-8"
    >
      <h2 class="text-center font-bold">トレーニングの目的はなんですか？</h2>
      <ul class="question flex flex-wrap justify-around items-end" alt="">
        <li>
          <label
            ><input type="radio" value="One" v-model="radio1" />引き締めたい
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li>
          <label
            ><input type="radio" value="Two" v-model="radio1" />減量したい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li>
          <label
            ><input
              type="radio"
              value="Three"
              v-model="radio1"
            />運動不足を解消したい</label
          >
          <img src="~assets/fitness1.jpg" alt="" />
        </li>
        <li>
          <label
            ><input type="radio" value="Hour" v-model="radio1" />不調を改善したい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li>
          <label
            ><input type="radio" value="Hour" v-model="radio1" />健康維持をしたい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
      </ul>
    </div>

    <div
      v-if="questionNumber === 2"
      id="question"
      class="h-1/2 flex flex-column justify-center mt-8"
    >
      <h2 class="text-center font-bold">質問２</h2>
      <ul class="question flex flex-wrap justify-around items-end" alt="">
        <li>
          <label
            ><input type="radio" value="One" v-model="radio2" />引き締めたい
            <img src="~assets/fitness1.jpg" alt="" />
          </label>
        </li>
        <li>
          <label
            ><input type="radio" value="Two" v-model="radio2" />減量したい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li>
          <label
            ><input
              type="radio"
              value="Three"
              v-model="radio2"
            />運動不足を解消したい</label
          >
          <img src="~assets/fitness1.jpg" alt="" />
        </li>
        <li>
          <label
            ><input type="radio" value="Hour" v-model="radio2" />不調を改善したい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
        <li>
          <label
            ><input type="radio" value="Hour" v-model="radio2" />健康維持をしたい
            <img src="~assets/fitness2.jpg" alt=""
          /></label>
        </li>
      </ul>
    </div>

    <div id="check-button" class="h-1/2 check-button flex justify-around">
      <button
        class="w-12 h-12 bg-blue-400 text-lg text-white rounded-full hover:bg-blue-500"
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
      questionNumber: 1,
    };
  },
  methods: {
    next() {
      this.questionNumber += 1;
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
