<template>
  <div id="result">
    <div>
        <h2 class="result_title text-center text-xl font-bold mt-5 mb-2">
          {{ contents.title }}
        </h2>
        <p class="text-center">{{ contents.english }}</p>
      <div
        class="result border-2 bg-white py-5 px-10 mt-5 flex flex-col xl:flex-row items-center"
      >
        <div class="result_left flex justify-center lg:w-2/3 xl:w-1/3 p-3">
          <div class="result_img">
            <img :src="contents.image.url" alt="" />
          </div>
        </div>
        <div class="result_right_inner p-5">
          <p>
            {{ contents.explanation }}
          </p>
          <p>
          </p>
        </div>
      </div>
    </div>
    <div
      class="result_video_inner">
      <h2 class="text-center text-xl font-bold my-5">
          おすすめのトレーニング一覧
      </h2>
      <ul
        class="flex px-2 my-3 border rounded-md bg-white"
        v-for="movie in contents.movies"
        :key="movie.id"
      >
        <li class="flex">
          <p class="p-5">
            <iframe
              :src="movie.url"
              width="100%"
              height="100%"
              frameborder="0"
              class="rounded-md"
            ></iframe>
          </p>
          <h3 class="text-sm md:text-md pt-5">
            {{ movie.title }}
          </h3>
        </li>
      </ul>
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
    const contents = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    console.log( contents );
    return {
      contents,
    };
  },
  data() {
    return {
      contents: {},
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped></style>
