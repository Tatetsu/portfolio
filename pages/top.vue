<template>
  <div>
    <div class="new flex flex-wrap items-center sm:flex-row flex-col p-5">
      <div
        class="card my-5 px-3 drop-shadow-lg"
        v-for="(blog, index) in blogs.contents"
        :key="index"
      >
        <nuxt-link :to="`/blog?id=${blog.id}`">
          <div class="thumbnail">
            <img class="duration-300 object-cover" :src="blog.image.url" />
          </div>
          <div class="card_txt bg-white py-5">
            <h2 class="card_tittle text-center pt-3">
              {{ blog.title }}
            </h2>
            <div class="blog_genre flex text-sm mt-16">
              <ul class="ml-5" v-for="genre in blog.genre" :key="genre">
                <nuxt-link to="/top">
                  <li class="mx-3">
                    <button
                      class="p-3 rounded-full bg-gray-100 hover:bg-red-400 hover:text-white hover:scale-125 hover:duration-500"
                    >
                      {{ genre }}
                    </button>
                  </li>
                </nuxt-link>
              </ul>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="playlist py-5">
      <h2 class="pt-3">おすすめのプレイリスト</h2>
      <ul
        class="playlist_inner flex items-center sm:flex-row flex-col flex-wrap pt-3"
      >
      <li class="sm:w-1/3" v-for="(contents, index) in contents"
        :key="index">
        <nuxt-link :to="`/playlist?id=${contents.id}`">
          <img
            :src="contents.image.url"
            alt=""
            class="playlist_inner_get rounded-lg p-2"
          />
        </nuxt-link>
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
    console.log(id);
    const { contents } = await $microcms.get({
      endpoint: "motion",
      contentId: id,
      queries: { limit: 3 },
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
