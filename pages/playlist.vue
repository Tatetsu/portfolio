<template>
  <div id="result">
    <div class="result_title text-center my-5">
      <h2 class="title">
        {{ contents[0].title }}
      </h2>
      <p>{{ contents[0].english }}</p>
    </div>
    <div
      class="result border-2 bg-white py-5 px-10 flex flex-col xl:flex-row items-center"
    >
      <div class="result_left flex justify-center lg:w-2/3 xl:w-1/3 p-3">
        <div class="result_img">
          <img :src="contents[0].image.url" alt="" />
        </div>
      </div>
      <div class="result_right_inner p-5">
        <p>
          {{ contents[0].explanation }}
        </p>
      </div>
    </div>
    <div
      class="result_video_inner"
      v-for="content in contents"
      :key="content.id"
    >
        <ul class="flex flex-wrap px-2 my-3 sm:w-1/2 md:w-1/3"
         v-for="movie in content.movies"
        :key="movie.title">
          <li>
            <h3 class="text-sm md:text-md">
              {{ movie.title }}
            </h3>
            <p>
              <iframe
                :src="movie.url"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </p>
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
