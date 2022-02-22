<template>
  <div>
    <div
      class="program_list p-5 flex flex-wrap"
      v-for="content in contents.contents"
      :key="content.index"
    >
      <ul class="flex flex-wrap">
        <li>
          <img
            :src="content.image.url"
            alt=""
            class="program_list_get p-3 w-full h-full"
          />
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
    // 動画リストのIDを取得する
    console.log(id);
    const contents = await $microcms.get({
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
