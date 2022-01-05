<template>
  <div>
    <p v-for='item in contents' :key='item.id'>{{ item.title }}</p>
    {{ contents }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ $microcms }) {

    const data = await $microcms.get({
      endpoint: "news",
    });
    console.log(data)
  const contents = data.contents
    return {
      contents
    };
  },
  layout: "default",
  data() {
    return {}
}
}
</script>

<style>

</style>
