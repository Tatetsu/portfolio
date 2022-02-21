<template>
  <div>
    <div class="new flex flex-wrap items-center sm:flex-row flex-col p-5">
      <div
        class="card my-5 px-3 transition ease-in-out delay-150 drop-shadow-md hover:-translate-y-1 hover:scale-110 duration-300 hover:drop-shadow-none"
        v-for="(blog, index) in blogs.contents"
        :key="index"
      >
        <router-link to="/">
          <div class="thumbnail">
            <img :src="blog.image.url" />
          </div>
          <div class="card_txt bg-white py-5">
            <h2 class="card_tittle text-center pt-3">
              {{ blog.title }}
            </h2>
            <div class="blog_genre flex text-sm mt-16">
              <ul class="ml-5"
              v-for="genre in blog.genre" :key="genre">
                <router-link to="/question">
                <li class="mx-3">
                  <button class="p-3 rounded-full bg-gray-100 hover:bg-red-400 hover:text-white">
                  {{ genre }}
                  </button>
                </li>
                </router-link>
              </ul>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="playlist py-5">
      <h2 class="pt-3">おすすめのプレイリスト</h2>
      <div class="playlist_inner flex items-center sm:flex-row flex-col pt-3">
        <div class="playlist_inner_get mx-4 my-5">
          <router-link to="/top">
            <img :src="contents[0].image.url" alt="" class="rounded-lg" />
          </router-link>
        </div>
        <div class="playlist_inner_get mx-4 my-5">
          <router-link to="/top">
            <img :src="contents[1].image.url" alt="" class="rounded-lg" />
          </router-link>
        </div>
        <div class="playlist_inner_get mx-4 my-5">
          <router-link to="/top">
            <img :src="contents[2].image.url" alt="" class="rounded-lg" />
          </router-link>
        </div>
        <!-- ここはv-forで回す -->
      </div>
    </div>
    <div class="blog py-5">
      <h2 class="pt-3">搭載した機能をブログブログ（Qiita）で書きます</h2>
      <div class="blog_article flex items-center sm:flex-row flex-col p-5">
        <div class="article_list mx-4 py-5">
          <router-link to="/top">
            <img
              src="../assets/img/AdobeStock_153482564.jpeg"
              alt=""
              class="rounded-lg"
            />
          </router-link>
        </div>
        <div class="article_list mx-4 py-5">
          <router-link to="/top">
            <img
              src="../assets/img/AdobeStock_153482564.jpeg"
              alt=""
              class="rounded-lg"
            />
          </router-link>
        </div>
        <div class="article_list mx-4 py-5">
          <router-link to="/top">
            <img
              src="../assets/img/AdobeStock_153482564.jpeg"
              alt=""
              class="rounded-lg"
            />
          </router-link>
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
    });
    const blogs = await $microcms.get({
      endpoint: "blog",
      contentId: id,
      queries: { limit: 3 },
    });
    console.log(contents);
    console.log("blogs", { blogs });

    return {
      contents,
      blogs,
    };
  },
};
</script>

<style scoped>
.card {
  width: calc(100% / 1);
}

@media (max-width: 640px) {
}
@media (min-width: 640px) {
  .card {
    width: calc(100% / 2);
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  .card {
    width: calc(100% / 3);
  }
}
</style>
