<template>
  <div id="result">
    <div class="result_title text-center my-5">
      <p class="leading-loose text-lg md:text-xl lg:text-3xl">診断結果</p>
      <p class="leading-loose text-sm lg:text-lg my-2">RECOMMEND FOR YOU</p>
      <h2 class="question_title text-md md:text-xl lg:text-3xl leading-10 my-3">
        あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
      </h2>
    </div>
    <div
      class="result border-2 bg-white py-5 px-10 flex flex-col xl:flex-row items-center"
    >
      <div class="result_left flex justify-center lg:w-2/3 xl:w-1/3 p-3">
        <div class="result_img">
          <img :src="contents[0].image.url" alt="" />
        </div>
      </div>
      <div class="result_right xl:w-2/3">
        <h2 class="title">
          {{ contents[0].title }}
        </h2>
        <p>{{ contents[0].english }}</p>
        <div class="result_right_inner p-5">
          <p>
            {{ contents[0].explanation }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",

  async asyncData({ query, $microcms }) {
    const id = query.id;
    // 動画リストのIDを取得する
    console.log(id);
    const { contents } = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    console.log({ contents });
    return {
      contents,
    };
  },
  data() {
    return {
      contents: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped></style>
