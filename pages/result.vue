<template>
  <div id="result">
    <div class="result_title text-center my-5">
      <p class="leading-loose text-lg md:text-xl lg:text-3xl">診断結果</p>
      <p class="leading-loose text-sm lg:text-lg">RECOMMEND FOR YOU</p>
      <h2 class="question_title text-md md:text-xl lg:text-3xl">
        あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
      </h2>
    </div>
    <div
      class="result border-2 bg-white py-5 px-10 flex flex-col xl:flex-row items-center"
    >
      <div class="result_left lg:w-2/3 xl:w-1/3 p-3">
        <div class="result_img">
          <img :src="contents.contents[3].image.url" alt="">
        </div>
      </div>
      <div class="result_right xl:w-2/3">
        <h2 class="title">
          {{ contents.contents[3].title}}
        </h2>
        <!-- ここにはMicroCMSから取得したタイトルを入れます -->
        <p>{{ contents.contents[3].english}}</p>
        <!-- 英語タイトルの取得 -->
        <div class="result_right_inner px-5">
          <p>
            {{ contents.contents[3].explanation }}
          </p>
          <!-- 説明の取得する -->
        </div>
      </div>
    </div>
    <div
      class="result_video border-2 bg-white py-5 px-10 flex justify-center flex-wrap flex-row"
    >
      <div
        class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3"
        v-for="content in contents.contents"
        :key="content"
      >
        <div v-for="movie in content.movies" :key="movie">
          <h3 class="text-sm md:text-md">
            {{ movie.title }}
          </h3>
          <p>
            <!-- <iframe
              :src="movie.url"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe> -->
          </p>
        </div>
      </div>
    </div>

    <p>{{ contents.contents[0].movies[0].title }}</p>
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
  computed: {
  },
  mounted: function () {},
};
</script>

<style scoped></style>
