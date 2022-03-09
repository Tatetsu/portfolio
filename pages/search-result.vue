<template>
<div>
    <!-- <div class="new flex flex-wrap items-center sm:flex-row flex-col p-5">
      <div
        class="card my-5 px-3 drop-shadow-lg"
        v-for="(blog, index) in blogs.blogs"
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
    </div> -->
<p>{{ contents }}</p>
</div>
</template>

<script>
export default {
//   layout: "login",
  async asyncData({ query, $microcms }) {
    const id = query.id;
    console.log(id);
    const blogs = await $microcms.get({
      endpoint: "blog",
      contentId: id,
    });
    console.log("blogs", { blogs });

    return {
      blogs,
    };
  },
  data() {
      return {
      }
  }
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
