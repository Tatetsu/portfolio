<template>
  <div>
    <div
      class="program_list flex flex-wrap p-5"
      v-for="(content, index) in contents"
      :key="index"
    >
      <div
        class="program_list_get w-1/4 p-3 flex justify-center"
        v-for="(image, index) in content.image"
        :key="index"
      >
        <router-link to="/top">
          <img class="w-36 h-36 rounded-md"
          :src="content.image.url" />
        </router-link>
      </div>
    </div>
    <div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  async asyncData({ query, $microcms }) {
    const id = query.id;
    // 動画リストのIDを取得する
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
  data() {
    return {};
  },
};
</script>

<style scoped>
.program_list_get {
  width: calc(100% / 2);
}

@media (max-width: 640px) {
}
@media (min-width: 640px) {
    .program_list_get {
      width: calc(100% / 3);
    }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>
