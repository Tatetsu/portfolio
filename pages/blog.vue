<template>
  <div>
    <div class="blog_fv flex justify-center items-center">
      <img :src="contents.image.url" alt="" class="w-40 h-30" />
    </div>
    <h2 class="blog_title text-xl font-bold text-center">
      {{ contents.title }}
    </h2>
    <div>
      <ul class="flex my-5">
        <li class="genre mx-2" v-for="genre in contents.genre" :key="genre">
          <button>
            <nuxt-link to="genre">
              「<span class="hover:text-red-600"> {{ genre }}</span
              >」
            </nuxt-link>
          </button>
        </li>
      </ul>
    </div>
    <div class="blog_txt" v-html="contents.text"></div>
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
      endpoint: "blog",
      contentId: id,
    });
    console.log(contents);
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

<style scoped>
/* h2 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
}
p {
    font-size: 3rem;
    line-height: 1.5rem;
} */
</style>
