<template>
  <div>
    <div id="question">
      <div v-if="questionNumber === 1" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">01</p>
        </div>
        <h2 class="question_title text-3xl">
          トレーニングの目的はなんですか？
        </h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <button
            type="button"
            value="One"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            引き締めたい
          </button>
          <button
            type="button"
            value="Two"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            減量したい
          </button>
          <button
            type="button"
            value="Three"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            運動不足を改善したい
          </button>
          <button
            type="button"
            value="Hour"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            不調を改善したい
          </button>
          <button
            type="button"
            value="Five"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            健康維持がしたい
          </button>
        </div>
      </div>
      <div v-if="questionNumber === 2" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">02</p>
        </div>
        <h2 class="question_title text-3xl">運動はニガテですか？</h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <button
            type="button"
            value="One"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            とてもニガテです
          </button>
          <button
            type="button"
            value="Two"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            すこしニガテです
          </button>
          <button
            type="button"
            value="Three"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            どちらでもありません
          </button>
          <button
            type="button"
            value="Hour"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            すこし得意です
          </button>
          <button
            type="button"
            value="Five"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            とても得意です
          </button>
        </div>
      </div>
      <div v-if="questionNumber === 3" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">03</p>
        </div>
        <h2 class="question_title text-3xl">
          トレーニング時間はどれくらいですか？
        </h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <button
            type="button"
            value="One"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            全くしません
          </button>
          <button
            type="button"
            value="Two"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            週に1日程度です
          </button>
          <button
            type="button"
            value="Three"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            毎日30分以上です
          </button>
          <button
            type="button"
            value="Hour"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            毎日1時間ほどです
          </button>
          <button
            type="button"
            value="Five"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            毎日1時間以上やっています
          </button>
        </div>
      </div>
      <div v-if="questionNumber === 4" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">04</p>
        </div>
        <h2 class="question_title text-3xl">
          トレーニングをする場所はどこですか
        </h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <button
            type="button"
            value="One"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            自宅です
          </button>
          <button
            type="button"
            value="Two"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            公園です
          </button>
          <button
            type="button"
            value="Three"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            ジムです
          </button>
        </div>
      </div>
      <div v-if="questionNumber === 5" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">05</p>
        </div>
        <h2 class="question_title text-3xl">
          トレーニングしたい部位はどこですか？
        </h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <button
            type="button"
            value="One"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            腕
          </button>
          <button
            type="button"
            value="Two"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            胸部
          </button>
          <button
            type="button"
            value="Three"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            腹筋
          </button>
          <button
            type="button"
            value="Hour"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            脚
          </button>
          <button
            type="button"
            value="Five"
            class="btn text-xl bg-white rounded-lg w-1/3 m-5 py-5 px-10"
            v-bind:class="{ btn_click_color: buttonState }"
            @click="changeState"
          >
            全身
          </button>
        </div>
      </div>
      <div v-if="questionNumber === 6" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">06</p>
        </div>
        <h2 class="question_title text-3xl">
          登録するニックネームを入力ください
        </h2>
        <div class="question_list flex flex-wrap justify-around my-8">
          <div class="mb-2 w-1/3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="ニックネームを入力ください"
              class="text-xl w-full p-3 border rounded"
            />
          </div>
        </div>
      </div>
      <div v-if="questionNumber === 7" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">07</p>
        </div>
        <h2 class="question_title text-3xl">現在の身長と体重を入力ください</h2>
        <div class="question_list flex flex-col items-center my-8">
          <div class="mb-2 w-1/4 flex items-end">
            <input
              type="text"
              name="composition"
              id="composition"
              placeholder="身長を入力ください"
              class="text-xl w-full p-3 border rounded"
            /><span>cm</span>
          </div>
          <div class="mb-2 w-1/4 flex items-end">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="体重を入力ください"
              class="text-xl w-full p-3 border rounded"
            /><span>kg</span>
          </div>
        </div>
      </div>
      <div v-if="questionNumber === 9" class="text-center font-bold pt-16">
<div class="question_number">
      <p class="leading-loose text-3xl">診断結果</p>
      <p class="leading-loose text-lg">RECOMMEND FOR YOU</p>
    </div>
    <h2 class="question_title text-3xl">
      あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
    </h2>
    <div class="result border-2 bg-white py-5 px-10 flex">
        <div class="result_left w-1/3 p-3 relative">
      <div class="result_img">
          <img src="../assets/img/AdobeStock_250293315.jpeg" alt="">
      </div>
      <div class="result_number absolute top-10 left-10">
        <p class="text-3xl font-bold">01</p>
      </div>
        </div>
        <div class="result_right w-2/3">
            <h2 class="title">有酸素運動</h2>
            <p>aerobic exercise</p>
            <div class="result_right_inner px-5">
                <p>ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                    ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                    ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                    ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                </p>
            </div>
        </div>
    </div>
      </div>
      <div v-if="questionNumber === 8" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">08</p>
        </div>
        <h2 class="question_title text-3xl">目標の体重を入力ください</h2>
        <div class="question_list flex flex-col items-center my-8">
          <div class="mb-2 w-1/4 flex items-end">
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="目標の体重を入力ください"
              class="text-xl w-full p-3 border rounded"
            /><span>kg</span>
          </div>
        </div>
      </div>
    </div>

    <div class="switching_btn flex flex-col justify-center">
      <div class="question_next test-center my-8">
        <button
          class="btn text-xl bg-white rounded-full p-3 w-3/4"
          @click="next"
        >
          次へ
        </button>
      </div>
      <div class="question_next test-center my-8">
        <button
          class="btn text-xl bg-white rounded-full p-3 w-3/4"
          @click="back"
        >
          前へ
        </button>
      </div>
    </div>
    <div class="submit">
      <button type="submit" class="btn text-xl bg-white rounded-full p-3 w-3/4">
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
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      radio5: "",
      questionNumber: 1,
      buttonState: false,
    };
  },
  methods: {
    next() {
      this.questionNumber += 1;
    },
    back() {
      this.questionNumber -= 1;
    },
    changeState: function () {
      this.buttonState = !this.buttonState;
    },
  },
  computed: {},
};
</script>

<style scoped>
.btn_click_color {
  background-color: chartreuse;
  color: #fff;
}
</style>
