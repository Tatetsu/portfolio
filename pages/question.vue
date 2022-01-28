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
        <div class="question_list my-8">
          <ul
            class="question flex flex-wrap justify-around justify-center mt-8 items-end"
            alt=""
          >
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl">
                <input
                  class="mr-4"
                  type="radio"
                  value="One"
                  v-model="radio1"
                />引き締めたい
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  type="radio"
                  value="Two"
                  v-model="radio1"
                />減量したい</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Three"
                  v-model="radio1"
                />運動不足を解消したい
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Hour"
                  v-model="radio1"
                />不調を改善したい</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Five"
                  v-model="radio1"
                />健康維持がしたい</label
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-if="questionNumber === 2" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">02</p>
        </div>
        <h2 class="question_title text-3xl">運動はニガテですか？</h2>
        <div class="question_list my-8">
          <ul
            class="question flex flex-wrap justify-around justify-center mt-8 items-end"
            alt=""
          >
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl">
                <input
                  class="mr-4"
                  type="radio"
                  value="One"
                  v-model="radio2"
                />とてもニガテです
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  type="radio"
                  value="Two"
                  v-model="radio2"
                />すこしニガテです</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Three"
                  v-model="radio2"
                />どちらでもありません
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Hour"
                  v-model="radio2"
                />すこし得意です</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Five"
                  v-model="radio2"
                />とても得意です</label
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-if="questionNumber === 3" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">03</p>
        </div>
        <h2 class="question_title text-3xl">
          トレーニング時間はどれくらいですか？
        </h2>
        <div class="question_list my-8">
          <ul
            class="question flex flex-wrap justify-around justify-center mt-8 items-end"
            alt=""
          >
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl">
                <input
                  class="mr-4"
                  type="radio"
                  value="One"
                  v-model="radio3"
                />ほとんどやっていない
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  type="radio"
                  value="Two"
                  v-model="radio3"
                />週に1日くらい</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Three"
                  v-model="radio3"
                />1日15分くらい
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Hour"
                  v-model="radio3"
                />1日30分くらい</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Five"
                  v-model="radio3"
                />1日1時間以上</label
              >
            </li>
          </ul>
        </div>
      </div>
      <div v-if="questionNumber === 4" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">04</p>
        </div>
        <h2 class="question_title text-3xl">
          トレーニングをする場所はどこですか
        </h2>
        <div class="question_list my-8">
          <ul
            class="question flex flex-wrap justify-around justify-center mt-8 items-end"
            alt=""
          >
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl">
                <input
                  class="mr-4"
                  type="radio"
                  value="One"
                  v-model="radio4"
                />自宅
              </label>
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input type="radio" value="Two" v-model="radio4" />ジム</label
              >
            </li>
            <li class="flex justify-center w-1/2 my-6">
              <label class="text-2xl"
                ><input
                  class="mr-4"
                  type="radio"
                  value="Three"
                  v-model="radio4"
                />公園
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="questionNumber === 5" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">05</p>
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
      <div v-if="questionNumber === 6" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">06</p>
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
      <div v-if="questionNumber === 7" class="text-center font-bold pt-16">
        <div class="question_number">
          <p class="underline leading-loose text-3xl">07</p>
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
      <div v-if="questionNumber === 8" class="text-center font-bold pt-16">
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
              <img src="../assets/img/AdobeStock_250293315.jpeg" alt="" />
            </div>
            <div class="result_number absolute top-10 left-10">
              <p class="text-3xl font-bold">01</p>
            </div>
          </div>
          <div class="result_right w-2/3">
            <h2 class="title">有酸素運動</h2>
            <p>aerobic exercise</p>
            <div class="result_right_inner px-5">
              <p>
                ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="switching_btn flex flex-col justify-center">
      <div class="question_next flex test-center my-8" v-if="questionNumber <= 6">
        <button
          class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4"
          @click="next"
        >
          次へ
        </button>
      </div>
      <div class="question_prev flex test-center my-8" v-if="questionNumber >= 2">
        <button
          class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4"
          @click="back"
        >
          前へ
        </button>
      </div>
    </div>
    <div class="submit flex" v-if="questionNumber === 7">
      <button type="submit" class="btn m-auto text-xl bg-white rounded-full p-3 w-3/4">
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
      // 必須入力の処理 if or returnで制限をする ボタンの上にアラートする
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

</style>
