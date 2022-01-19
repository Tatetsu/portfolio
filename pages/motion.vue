<template>
  <div>
    <h2 class="text-center font-bold mt-10">{{ content.title }}</h2>
    <!-- v-bind:keyのv-bindは省略できる -->
    <div id="light-video" class="sm:flex flex-wrap justify-center">
      <div
        class="light-video"
        v-for="(movie, index) in content.movies"
        :key="index"
      >
        <h3 class="text-center font-bold mb-5">{{ movie.title }}</h3>
        <iframe
          :src="movie.url"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  async asyncData({ query, $microcms }) {
    const id = query.id;
    // 動画リストのID vrkfvn9paを取得する
    console.log(id);
    const content = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    console.log("content", content);
    return {
      content,
    };
  },

  data() {
    return {
    };
  },

  methods: {
    
  },
  computed: {

  },

  mounted: function () {},
};
</script>

<style>
#light-video .light-video {
  width: 30%;
  margin: 3rem auto;
  padding: 1%;
}

@media screen and (max-width: 640px) {
  #light-video div {
    width: 80%;
  }
}
</style>
