<template>
  <div>
    <div class="bg-gray-100 flex-auto">
      <div class="flex justify-center mt-16">
        <div class="w-2/5 border bg-white">
          <div class="my-12 text-center">
            <h2 class="text-4xl font-bold">ログイン画面</h2>
            <p class="my-4">
              <span class="font-semibold">メールアドレス</span>と
              <span class="font-semibold">パスワード</span>を入力してください。
            </p>
            <form @submit.prevent novalidate>
              <div class="mb-2">
                <input
                  type="mail"
                  name="mail"
                  required="required"
                  v-model="email"
                  @input="isInput"
                  placeholder="you@example.com"
                  class="text-xl w-3/5 p-3 border rounded"
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
                  class="text-xl w-3/5 p-3 border rounded"
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
    login() {
      if (this.email === "") {
        this.emailErrorMassage = "メールアドレスを入力してください";
      }
      if (this.password === "") {
        this.passwordErrorMassage = "パスワードを入力してください";
      }
      if (this.emailErrorMassage !== "" || this.passwordErrorMassage !== "") {
        return;
      }
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
    },
    isInput() {
      this.emailErrorMassage = ""
      this.passwordErrorMassage = ""
    }
  },
};
</script>

<style scoped></style>
