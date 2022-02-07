<template>
  <div class="text-center font-bold pt-16">
    <div class="question_number">
      <p class="underline leading-loose text-xl md:text-3xl">{{ numbers }}</p>
    </div>
    <h2 class="question_title text-xl md:text-3xl">{{ questionText }}</h2>
    <div class="question_list my-8">
      <ul
        class="question flex flex-wrap justify-around justify-center mt-8 items-end"
        alt=""
      >
        <li v-for="answer in answers" :key="answer" class="flex justify-center w-1/2 my-6">
          <label class="text-md md:text-2xl">
            <input
              class="mr-4"
              type="radio"
              :value="answer"
              v-model="radio"
              @change="change"
            />{{ answer }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numbers: {
      type: String,
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      radio: "",
    };
  },
  methods: {
    change() {
      this.$emit("select", this.radio);
    },
  },
  /* watch: {
    radio() {
      console.log(this.radio);
    },
  }, */
};
</script>