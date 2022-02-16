<template>
  <div>
    <div class="new flex flex-wrap items-center sm:flex-row flex-col p-5">
      <div class="card my-5 px-3">
        <div class="thumbnail">
          <img src="../assets/img/AdobeStock_141454513.jpeg" alt="" />
        </div>
        <div class="card_txt bg-white py-5">
          <h2 class="card_tittle text-center pt-3">
            ブログのタイトルを入れます
          </h2>
          <div class="blog_genre mt-16">
            <ul class="flex ml-5">
              <li class="mx-3">
                <router-link to="/" class="rounded-md bg-gray-100"
                  >ジャンル</router-link
                >
              </li>
              <li class="mx-3">
                <router-link to="/" class="rounded-md bg-gray-100"
                  >ジャンル2</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card my-5 px-3">
        <div class="thumbnail">
          <img src="../assets/img/AdobeStock_141454513.jpeg" alt="" />
        </div>
        <div class="card_txt bg-white py-5">
          <h2 class="card_tittle text-center pt-3">
            ブログのタイトルを入れます
          </h2>
          <div class="blog_genre mt-16">
            <ul class="flex ml-5">
              <li class="mx-3">
                <router-link to="/" class="rounded-md bg-gray-100"
                  >ジャンル</router-link
                >
              </li>
              <li class="mx-3">
                <router-link to="/" class="rounded-md bg-gray-100"
                  >ジャンル2</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card my-5 px-3">
        <div class="thumbnail">
          <img src="../assets/img/AdobeStock_141454513.jpeg" alt="" />
        </div>
        <div class="card_txt bg-white py-5">
          <h2 class="card_tittle text-center pt-3">
            ブログのタイトルを入れます
          </h2>
          <div class="blog_genre mt-16">
            <ul class="flex ml-5">
              <li class="mx-3">
                <router-link to="/" class="rounded-md bg-gray-100"
                  >ジャンル</router-link
                >
              </li>
              <li class="mx-3">
                <router-link to="/" class="rounded-md bg-gray-100"
                  >ジャンル2</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="playlist py-5">
      <h2 class="pt-3">おすすめのプレイリスト</h2>
      <div
        class="playlist_inner flex items-center sm:flex-row flex-col pt-3"
      >

          <div class="playlist_inner_get mx-4 my-5">
            <router-link to="/">
              <img 
              :src="contents[0].image.url" 
              alt="" 
              class="rounded-lg" />
            </router-link>
          </div>
          <div class="playlist_inner_get mx-4 my-5">
            <router-link to="/">
              <img 
              :src="contents[0].image.url" 
              alt="" 
              class="rounded-lg" />
            </router-link>
          </div>
          <div class="playlist_inner_get mx-4 my-5">
            <router-link to="/">
              <img 
              :src="contents[0].image.url" 
              alt="" 
              class="rounded-lg" />
            </router-link>
          </div>
          <!-- ここはv-forで回す -->
        </div>
    </div>
    <div class="blog py-5">
      <h2 class="pt-3">搭載した機能をブログブログ（Qiita）で書きます</h2>
      <div class="blog_article flex items-center sm:flex-row flex-col p-5">
        <div class="article_list mx-4 py-5">
          <router-link to="/">
            <img
              src="../assets/img/AdobeStock_153482564.jpeg"
              alt=""
              class="rounded-lg"
            />
          </router-link>
        </div>
        <div class="article_list mx-4 py-5">
          <router-link to="/">
            <img
              src="../assets/img/AdobeStock_153482564.jpeg"
              alt=""
              class="rounded-lg"
            />
          </router-link>
        </div>
        <div class="article_list mx-4 py-5">
          <router-link to="/">
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
  layout: "",
  async asyncData({ query, $microcms }) {
    const id = query.id;
    console.log(id);
    const { contents } = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    console.log(contents);
    return {
      contents,
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
