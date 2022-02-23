<template>
  <div>
    <div class="bg-gray-100 flex-auto">
      <div class="flex justify-center my-16">
        <div class="border bg-white">
          <div class="my-12 text-center">
            <h2 class="text-2xl md:text-3xl font-bold">ログイン画面</h2>

            <div class="google-login my-5 flex justify-center">
              <button
                type="submit"
                @click="googleLogin"
                class="text-xs sm:text-sm w-3/5 text-gray-300 py-2 border rounded flex justify-center items-center"
              >
                <img
                  src="https://madeby.google.com/static/images/google_g_logo.svg"
                  class="button-logo-img sm:mr-4 h-5"
                />
                Googleでログインする
              </button>
            </div>

            <hr class="my-4" />
            <p class="my-4 text-sm md:text-lg">
              <span class="font-semibold">メールアドレス</span>と
              <span class="font-semibold">パスワード</span>を入力してください。
            </p>
            <form @submit.prevent="login" novalidate>
              <div class="mb-2">
                <input
                  type="mail"
                  name="mail"
                  required="required"
                  v-model="email"
                  @input="isInput"
                  placeholder="you@example.com"
                  class="text-lg md:text-xl w-3/5 p-3 border rounded"
                  autofocus
                />
                <p class="text-red-400">{{ emailErrorMassage }}</p>
              </div>
              <div class="mb-2">
                <input
                  type="password"
                  name="password"
                  required="required"
                  v-model="password"
                  @input="isInput"
                  placeholder="パスワード"
                  class="text-lg md:text-xl w-3/5 p-3 border rounded"
                />
                <p class="text-red-400">{{ passwordErrorMassage }}</p>
              </div>
              <button
                type="submit"
                @click="login"
                class="text-xl w-3/5 bg-green-800 text-white py-2 rounded"
              >
                ログイン
              </button>
            </form>
            <div class="py-8 text-center text-base">
              <p class="text-blue-500">
                <nuxt-link to="/register">初めての方はこちら</nuxt-link>
              </p>
            </div>
            <div class="py-4 text-center text-base">
              <p class="text-blue-500">
                <button @click="gestLogin">ゲストログインで試してみる</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  },
  data: function () {
    return {
      email: "",
      password: "",
      emailErrorMassage: "",
      passwordErrorMassage: "",
    };
  },
  methods: {
    googleLogin() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$auth
        .signInWithPopup(provider)
        .then(() => {
          alert("ログインに成功しました");
          this.$store.dispatch("checkLogin");
          this.$router.push("/mypage");
        })
        .catch((error) => {
          console.log(error);
          alert(
            "エラーが発生いたしました。間違い等がないか確認をし再度実施をお願いします"
          );
        });
    },

    login() {
      if (this.email === "") {
        this.emailErrorMassage = "メールアドレスを入力してください";
      }
      if (this.password === "") {
        this.passwordErrorMassage = "パスワードを入力してください";
      }
      if (this.emailErrorMassage !== "" || this.passwordErrorMassage !== "") {
        return;
      } else {
        this.$auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            alert("ログインに成功しました");
            this.$store.dispatch("checkLogin");
            this.$router.push("/mypage");
          })
          .catch((error) => {
            console.log({ error });
            alert("メールアドレスもしくはパスワードが違う可能性があります");
          });
      }
    },
    gestLogin() {
      this.$auth
        .signInAnonymously()
        .then(() => {
          alert("ログインに成功しました");
          this.$store.dispatch("checkLogin");
          this.$router.push("/mypage");
        })
        .catch((error) => {
          console.log({ error });
          alert("メールアドレスもしくはパスワードが違う可能性があります");
        });
    },
    isInput() {
      this.emailErrorMassage = "";
      this.passwordErrorMassage = "";
    },
  },
};
</script>

<style scoped></style>