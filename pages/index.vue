<template>
  <div>
    <div class="fv flex justify-center items-center">
      <div class="fv_txt text-center">
        <h3
          class="inline bg-white text-primary text-md md:text-xl lg:text-2xl px-4 md:px-8 py-4 my-5"
        >
          あなたのフィットネスをサポートします
        </h3>
        <h2 class="mt-10 text-2xl md:text-4xl">Fit Support</h2>
        <p class="text-xl md:text-2xl">［フィットサポート］</p>
        <button class="rounded-full px-8 py-6 my-6 bg-blue-400 text-white">
          <nuxt-link to="/register">無料で始める </nuxt-link>
        </button>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  layout: "fv",
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

<style scoped>
.fv {
  background-image: url(../assets/img/AdobeStock_319973032.jpeg);
  background-size: cover;
  background-position: right;
  height: 80vh;
  min-height: 560px;
}
</style>
