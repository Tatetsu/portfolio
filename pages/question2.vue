<template>
  <div>
    <div v-if="questionNumber === 1" class="text-center font-bold pt-16">
      <div class="question_number">
        <p class="underline leading-loose text-3xl">01</p>
      </div>
      <h2 class="question_title text-3xl">ここには質問を入れます</h2>
      <div class="question_list flex justify-around my-8">
          <input type="button" value="質問" v-model="radio1" />
        <button type="submit" class="btn text-xl bg-white rounded-sm p-5">
            ここに質問を入れます
        </button>
        <input type="button" value="Two" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
      </div>
    </div>
    <div v-if="questionNumber === 2" class="text-center font-bold pt-16">
      <div class="question_number">
        <p class="underline leading-loose text-3xl">02</p>
      </div>
      <h2 class="question_title text-3xl">ここには質問を入れます</h2>
      <div class="question_list flex justify-around my-8">
        <input type="radio" value="One" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
        <input type="radio" value="Two" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
      </div>
    </div>
    <div v-if="questionNumber === 3" class="text-center font-bold pt-16">
      <div class="question_number">
        <p class="underline leading-loose text-3xl">03</p>
      </div>
      <h2 class="question_title text-3xl">ここには質問を入れます</h2>
      <div class="question_list flex justify-around my-8">
        <input type="radio" value="One" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
        <input type="radio" value="Two" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
      </div>
    </div>
    <div v-if="questionNumber === 4" class="text-center font-bold pt-16">
      <div class="question_number">
        <p class="underline leading-loose text-3xl">04</p>
      </div>
      <h2 class="question_title text-3xl">ここには質問を入れます</h2>
      <div class="question_list flex justify-around my-8">
        <input type="radio" value="One" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
        <input type="radio" value="Two" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
      </div>
    </div>
    <div v-if="questionNumber === 5" class="text-center font-bold pt-16">
      <div class="question_number">
        <p class="underline leading-loose text-3xl">05</p>
      </div>
      <h2 class="question_title text-3xl">ここには質問を入れます</h2>
      <div class="question_list flex justify-around my-8">
        <input type="radio" value="One" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
        <input type="radio" value="Two" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
      </div>
    </div>
    <div v-if="questionNumber === 6" class="text-center font-bold pt-16">
      <div class="question_number">
        <p class="underline leading-loose text-3xl">06</p>
      </div>
      <h2 class="question_title text-3xl">ここには質問を入れます</h2>
      <div class="question_list flex justify-around my-8">
        <input type="radio" value="One" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
        <input type="radio" value="Two" v-model="radio1" /><button
          class="btn text-xl bg-white rounded-sm p-5"
        >
          ここに質問を入れます
        </button>
      </div>
    </div>
    <div class="question_next test-center my-8">
      <button class="btn text-xl bg-white rounded-full p-3 w-3/4" @click="next">
        次へ
      </button>
    </div>
    <div class="question_next test-center my-8">
      <button class="btn text-xl bg-white rounded-full p-3 w-3/4" @click="back">
        前へ
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
  computed: {},
};
</script>

<style scoped></style>
