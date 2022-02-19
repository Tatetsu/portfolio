<template>
  <div id="result">
    <div class="result_title text-center my-5">
      <p class="leading-loose text-lg md:text-xl lg:text-3xl">診断結果</p>
      <p class="leading-loose text-sm lg:text-lg my-2">RECOMMEND FOR YOU</p>
      <h2 class="question_title text-md md:text-xl lg:text-3xl leading-10 my-3">
        あなたにカスタマイズされた<br />おすすめのトレーニングメニュー
      </h2>
    </div>
    <div
      class="result border-2 bg-white py-5 px-10 flex flex-col xl:flex-row items-center"
    >
      <div class="result_left flex justify-center lg:w-2/3 xl:w-1/3 p-3">
        <div class="result_img">
          <img :src="contents.image.url" alt="" />
        </div>
      </div>
      <div class="result_right xl:w-2/3">
        <h2 class="title">
          {{ contents.title }}
        </h2>
        <!-- ここにはMicroCMSから取得したタイトルを入れます -->
        <p>{{ contents.english }}</p>
        <!-- 英語タイトルの取得 -->
        <div class="result_right_inner p-5">
          <p>
            {{ contents.explanation }}
          </p>
          <!-- 説明の取得する -->
        </div>
      </div>
    </div>
    <div
      class="result_video border-2 bg-white py-5 px-10 flex justify-center flex-wrap flex-row"
    >
      <div
        class="result_video_inner px-2 my-3 sm:w-1/2 md:w-1/3"
        v-for="movie in contents.movies"
        :key="movie.title"
      >
        <div>
          <h3 class="text-sm md:text-md">
            {{ movie.title }}
          </h3>
          <p>
            <iframe
              :src="movie.url"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

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
    return {
      contents: "",
      users: [
        {
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          name: "",
          composition: "",
          weight: "",
          objective: "",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  mounted() {
    const auth = getAuth();

    // login状態が変更されたら
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getFirestore();
        // loginしてたら
        const q = query(
          collection(db, "users"),
          where("uid", "==", `${user.uid}`)
        );
        onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              console.log("added: ", change.doc.data());
              this.users.push({
                id: change.doc.id,
                title: change.doc.data().name,
              });
            }
          });
        });

        this.users.splice(0, 1);
      }
    });
  },
};
</script>

<style scoped></style>
