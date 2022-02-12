<template>
  <div id="result">
    <div class="result_title text-center mb-5">
      <p class="leading-loose text-3xl">診断結果</p>
      <p class="leading-loose text-lg">RECOMMEND FOR YOU</p>
      <h2 class="question_title text-3xl">
        あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
      </h2>
    </div>
    <div
      class="result border-2 bg-white py-5 px-10 flex flex-col xl:flex-row items-center"
    >
      <div class="result_left lg:w-2/3 xl:w-1/3 p-3 relative">
        <div class="result_img">
          <img src="../assets/img/AdobeStock_250293315.jpeg" alt="" />
          <!-- <img :src="content.image.url" class="w-80 shadow-lg" /> -->
        </div>
        <div class="result_number absolute top-2.5 left-2.5">
          <p class="text-3xl font-bold">01</p>
        </div>
      </div>
      <div class="result_right xl:w-2/3">
        <h2 class="title">有酸素運動</h2>
        <!-- ここにはMicroCMSから取得したタイトルを入れます -->
        <p>aerobic exercise</p>
        <!-- 取得したタイトルを英語変換 -->
        <div class="result_right_inner px-5">
          <p>
            ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
            ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
            ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
            ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
          </p>
          <!-- ここには説明を取得する -->
        </div>
      </div>
    </div>
    <div
      class="result_video border-2 bg-white py-5 px-10 flex items-center flex-wrap flex-row"
    >
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
      <div class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3">
        <h3 class="text-md md:text-lg">
          ここにはMicroCMSから取得した動画のタイトルを入れます
        </h3>
        <img src="../assets/img/AdobeStock_153482564.jpeg" alt="" />
        <!-- ここにはMicroCMSから取得した動画を入れます -->
      </div>
    </div>

    <div v-for="content in contents.contents" :key="content">
      <div v-for="(movie, index) in content.movies" :key="index">
        <p>{{ movie.title }}</p>
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
  computed: {},
  mounted: function () {},
};
</script>

<style scoped></style>
