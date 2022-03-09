<template>
  <div>
    <div id="search">
      <div class="search_box">
        <h2 class="font-bold text-2xl my-5">気になるワードで検索</h2>
        <input class="pl-3 py-1 w-48" type="text" placeholder="ヒップアップ" v-model="searchText" />
        <button
          class="border bg-blend-darken font-white hover:bg-white"
          type="submit"
          @click="search"
        >
          検索
        </button>
      </div>

      <!-- <div
        class="search_genre my-5 flex flex-wrap items-center sm:flex-row flex-col lg:w-3/4"
      >
        <div class="search_genre_get p-1 w-48 h-12">
          <nuxt-link to="/">
            <img
              class="rounded-md w-full h-full"
              src="../assets/img/AdobeStock_61023133.jpeg"
              alt=""
            />
          </nuxt-link>
        </div>
      </div> -->

      <div class="search_popular my-5">
        <div class="search_popular_text flex justify-between">
          <div class="search_popular_title">
            <h2 class="font-bold text-xl">人気のジャンル</h2>
          </div>
          <div class="search_popular_list">
            <p class="font-bold text-xl hover:text-red-400">
              <nuxt-link to="/program">一覧で見る</nuxt-link>
            </p>
          </div>
        </div>
        <div
          class="py-5 flex flex-wrap items-center sm:flex-row flex-col"
        >
          <ul
            class="search_popular_inner flex justify-center items-center sm:flex-row flex-col flex-wrap pt-3"
          >
            <li
              class="search_popular_inner_get flex justify-center items-center sm:w-1/2 sm:px-2 md:w-1/3 md:px-2 my-3"
              v-for="(contents, index) in contents"
              :key="index"
            >
              <nuxt-link :to="`/playlist?id=${contents.id}`">
                <img :src="contents.image.url" alt="" class="rounded-lg" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="search_new my-5">
        <div class="search_new_text flex justify-between">
          <div class="search_new_title">
            <h2 class="font-bold text-xl">新着レッスン</h2>
          </div>
          <div class="search_new_list">
            <p class="font-bold text-xl hover:text-red-400">
              <nuxt-link to="/program">一覧で見る</nuxt-link>
            </p>
          </div>
        </div>
        <div
          class="search_new_inner py-5 flex flex-wrap items-center sm:flex-row flex-col"
        >
          <ul
            class="playlist_inner flex items-center sm:flex-row flex-col flex-wrap pt-3 py-1"
          >
            <li
              class="search_new_inner_get flex justify-center items-center sm:w-1/2 sm:px-2 md:w-1/3 md:px-2 my-3"
              v-for="(contents, index) in contents"
              :key="index"
            >
              <nuxt-link :to="`/playlist?id=${contents.id}`">
                <img :src="contents.image.url" alt="" class="rounded-lg" />
              </nuxt-link>
            </li>
          </ul>
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
    console.log(id);
    const { contents } = await $microcms.get({
      endpoint: "motion",
      contentId: id,
      queries: { limit: 3 },
    });
    console.log(contents);

    return {
      contents,
    };
  },
  data() {
    return {
      searchText: "",
      searchResult: [],
    };
  },
  methods: {
    async search() {
      if (this.searchText === "") {
        alert("質問に回答してください。");
        return;
      }
      console.log(this.searchText);
      const res = await this.$microcms.get({
        endpoint: "blog",
        queries: {
          q: this.searchText,
        },
      });
      const blogs = res
      console.log(blogs);
      this.$router.push(`/search-result?q=${this.searchText}}}`);

      // 0の場合はアラートを出す
    },
  },
};
</script>

<style scoped>
.search_genre_get,
.search_popular_inner_get {
  width: calc(100% / 1);
}
.search_new_inner_get {
  width: calc(100% / 2);
}

@media (max-width: 640px) {
}
@media (min-width: 640px) {
  .search_genre_get,
  .search_popular_inner_get {
    width: calc(100% / 2);
  }
  .search_new_inner_get {
    width: calc(100% / 3);
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  .search_genre_get,
  .search_popular_inner_get {
    width: calc(100% / 3);
  }
  .search_new_inner_get {
    width: calc(100% / 4);
  }
}
</style>
