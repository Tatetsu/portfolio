<template>
  <div id="result">
    <div class="result_title text-center mb-5">
      <p class="leading-loose text-3xl">診断結果</p>
      <p class="leading-loose text-lg">RECOMMEND FOR YOU</p>
      <h2 class="question_title text-3xl">
        あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
      </h2>
    </div>
    <p>{{ contents.id }}</p>

    <div v-for="content in contents" :key="content">
      <img :src="content.image.url" class="w-80 shadow-lg" />
      <div v-for="movie in content.movies" :key="movie">
        <h3 class="text-center font-bold mb-5">{{ movie.fieldId }}</h3>
        <!-- <iframe
          :src="movie.url"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe> -->
      </div>
    </div>

    <div
      class="result border-2 bg-white py-5 px-10 flex"
      v-for="index in 6"
      :key="index"
    >
      <div class="result_left w-1/3 p-3 relative">
        <div class="result_img">
          <img src="../assets/img/AdobeStock_250293315.jpeg" alt="" />
          <!-- <img :src="content.image.url" class="w-80 shadow-lg" /> -->
        </div>
        <div class="result_number absolute top-2.5 left-2.5">
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
</template>

<script>
export default {
  async asyncData({ query, $microcms }) {
    const id = query.id;
    // 動画リストのIDを取得する
    console.log(id);
    const contents = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    console.log(contents);
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

  mounted: function () {},
};
</script>

<style scoped></style>
