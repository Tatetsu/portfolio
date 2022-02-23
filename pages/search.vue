<template>
  <div>
    <div id="search">
      <div class="search_box">
        <h2 class="font-bold text-2xl my-5">気になるワードで検索</h2>
        <input type="text" placeholder="ヒップアップ" />
        <button class="border bg-blend-darken font-white" type="submit">
          検索
        </button>
      </div>

      <div
        class="search_genre my-5 flex flex-wrap items-center sm:flex-row flex-col lg:w-3/4"
      >
        <div class="search_genre_get p-1 w-48 h-12">
          <router-link to="/">
            <img
              class="rounded-md w-full h-full"
              src="../assets/img/AdobeStock_61023133.jpeg"
              alt=""
            />
          </router-link>
        </div>
      </div>

      <div class="search_popular my-5">
        <div class="search_popular_text flex justify-between">
          <div class="search_popular_title">
            <h2 class="font-bold text-xl">人気のジャンル</h2>
          </div>
          <div class="search_popular_list">
            <p class="font-bold text-xl">
              <router-link to="/">一覧で見る</router-link>
            </p>
          </div>
        </div>
        <div
          class="search_popular_inner py-5 flex flex-wrap items-center sm:flex-row flex-col"
        >
          <div class="search_popular_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
          <div class="search_popular_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
          <div class="search_popular_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
          <div class="search_popular_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="search_new my-5">
        <div class="search_new_text flex justify-between">
          <div class="search_new_title">
            <h2 class="font-bold text-xl">人気のジャンル</h2>
          </div>
          <div class="search_new_list">
            <p class="font-bold text-xl">
              <router-link to="/">一覧で見る</router-link>
            </p>
          </div>
        </div>
        <div
          class="search_new_inner py-5 flex flex-wrap items-center sm:flex-row flex-col"
        >
          <div class="search_new_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
          <div class="search_new_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
          <div class="search_new_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
          <div class="search_new_inner_get p-1">
            <router-link to="/">
              <img
                class="rounded-md"
                src="../assets/img/AdobeStock_319973032.jpeg"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {};
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
