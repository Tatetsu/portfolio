<template>
  <div>
    <h2 v-for='item in content' :key='item.id' class="text-center font-bold mt-10">{{ content.title }}</h2>
    <p>{{ content }}</p>
    <p></p>
    <hr>
    <p>{{ content.movie }}</p>

    <div id="light-video" class="sm:flex flex-wrap justify-center">
      <section>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nUVR-Wk9M3c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>取得したタイトルをここに表示します</h1>
      </section>
      <section>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nUVR-Wk9M3c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>取得したタイトルをここに表示します</h1>
      </section>
      <section>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nUVR-Wk9M3c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>取得したタイトルをここに表示します</h1>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    async asyncData({ query, $microcms }) {
    const id = query.id;
   console.log(id)
    const content = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    return {
      content
    };
  },

  data() {
    return{}
  },

  mounted: function() {
  }
  }
</script>

<style>
#light-video section {
width: 30%;
  margin: 3rem auto;
  padding: 1%;
}

@media screen and (max-width: 640px) {
#light-video section {
  width: 80%;
}
}
</style>
