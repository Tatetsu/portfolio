<template>
  <div>
    <div class="playlist py-5 max-w-4xl m-auto">
      <h2 class="text-xl font-bold pt-3">プログラム一覧</h2>
      <ul
        class="playlist_inner flex justify-center items-center sm:flex-row flex-col flex-wrap pt-3"
      >
        <li class="flex justify-center items-center sm:w-1/2 sm:px-2 md:w-1/3 md:px-2 my-3"
        v-for="(contents, index) in contents"
        :key="index">
          <nuxt-link :to="`/playlist?id=${contents.id}`">
            <img :src="contents.image.url" alt="" class="rounded-lg" />
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
    });
    console.log(contents);

    return {
      contents,
    };
  },
};
</script>

<style scoped>
@media (max-width: 640px) {
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>
