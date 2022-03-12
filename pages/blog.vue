<template>
  <div class="my-10">
    <h1 class="blog_title md:text-xl lg:text-3xl text-center my-5">
      {{ contents.title }}
    </h1>
    <div class="blog_fv flex justify-center items-center">
      <img :src="contents.image.url" alt="" class="w-4/5" />
    </div>
    <!-- <div>
      <ul class="flex my-5">
        <li class="genre mx-2" v-for="genre in contents.genre" :key="genre">
          <button>
            <nuxt-link to="genre">
              「<span class="hover:text-red-600"> {{ genre }}</span
              >」
            </nuxt-link>
          </button>
        </li>
      </ul>
    </div> -->
    <div class="blog_txt" v-html="contents.text"></div>
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
      endpoint: "blog",
      contentId: id,
    });
    console.log(contents);
    return {
      contents,
    };
  },
  data() {
    return {
      contents: {},
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.blog_txt >>> p {
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: .05em;
    line-height: 1.8em;
    font-size: 1em;
}

.blog_txt >>> h1 {
      font-size: 1.8rem;
    line-height: 2.3rem;
      font-weight: 300;
}
.blog_txt >>> h2 {
      font-size: 1.65rem;
    line-height: 2rem;
    padding: 15px;
    padding-bottom: 16px;
    margin-top: 2.6rem;
    margin-bottom: 1.6rem;
  background-color: #3b4675!important;
  color: #fff;
    border-radius: 2px;
        font-weight: 400;
    letter-spacing: 0;
}
.blog_txt >>> h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 4px 8px;
  padding-top: 0;
  margin-top: 2.3rem;
  margin-bottom: 1.6rem;
  border-bottom: 3px solid #2b2b2b;
}
.blog_txt >>> h4 {
  font-size: 1.3rem;
  line-height: 1.8rem;
  padding: 2px 12px;
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  border-left: 2px solid #2b2b2b;
}
.blog_txt >>> ul li {
  position: relative;
    display: block;
    margin-bottom: 0.7em;
    padding: 0 0 0 25px;
}
.blog_txt >>> ul li:before {
    display: block;
    content: '';
    position: absolute;
    top: 0.6em;
    left: 10px;
    width: 6px;
    height: 6px;
    background-color: #2b2b2b;
    border-radius: 100%;
}
.blog_txt >>> ol  {
  margin-bottom: 0;
          padding-top: 10px !important;
    padding-bottom: 30px;
    padding-right: 20px;
        counter-reset: li;
    padding-left: 20px;
    margin-top: 0;
    list-style: none;
    list-style-type: none;
}
.blog_txt >>> ol li {
  position: relative;
    display: block;
    padding: 0 0 0 25px;
    margin-bottom: 0.7em;
}
.blog_txt >>> ol li::before {
  background-color: #ffcd44!important;
  top: 2px;
      position: absolute;
    content: "";
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: #000;
}
 .blog_txt >>> iframe {
   margin: 0 auto;
 }
</style>
