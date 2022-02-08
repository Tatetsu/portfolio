<template>
  <div>
      <div id="result" class="text-center mb-5">
    <div class="result_title">
      <p class="leading-loose text-3xl">診断結果</p>
      <p class="leading-loose text-lg">RECOMMEND FOR YOU</p>
    </div>
    <h2 class="question_title text-3xl">
      あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
    </h2>
    <!-- <p>{{ content.title }}</p> -->
      </div>
    <div class="result border-2 bg-white py-5 px-10 flex" v-for="index in 6" :key="index">
        <div class="result_left w-1/3 p-3 relative">
      <div class="result_img">
          <img src="../assets/img/AdobeStock_250293315.jpeg" alt="">
      </div>
      <div class="result_number absolute top-2.5 left-2.5">
        <p class="text-3xl font-bold">01</p>
      </div>
        </div>
        <div class="result_right w-2/3">
            <h2 class="title">有酸素運動</h2>
            <p>aerobic exercise</p>
            <div class="result_right_inner px-5">
                <p>ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                    ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                    ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                    ここにはテキストを入れますここにはテキストを入れますここにはテキストを入れますここにはテキストを入れます
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
async asyncData({ query, $microcms }) {
    const id = query.id;
    // 動画リストのIDを取得する
    console.log(id);
    const content = await $microcms.get({
      endpoint: "motion",
      contentId: id,
    });
    // console.log("content", content);
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
}
</script>

<style scoped></style>
