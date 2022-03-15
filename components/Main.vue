<template>
    <div>
        <div class="main_header flex justify-between items-center">
            <div class="logo">
                <h1 class="w-48 p-4">
                    <nuxt-link to="/top">
                        <img src="../assets/img/logo/linkedin_banner_image_1.png" alt="">
                    </nuxt-link>
                </h1>
            </div>
            <div class="login mr-5">
                <button @click="gestLogin" class="hover:text-red-400">
                        ゲストログイン
                </button>
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
      emailRegexp: /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i,
      passwordRegexp: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i,
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
          this.$router.push("/signin");
        })
        .catch((error) => {
          console.log(error);
          alert(
            "エラーが発生いたしました。間違い等がないか確認をし再度実施をお願いします"
          );
        });
    },

    register() {
      if (!this.emailRegexp.test(this.email)) {
        this.emailErrorMassage =
          "このメールアドレスは無効です。正しく入力してください。";
      }
      if (!this.passwordRegexp.test(this.password)) {
        this.passwordErrorMassage =
          "このパスワードは無効です。半角英数字を含んで8〜20文字の範囲で入力してください。";
      }
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("登録が完了しました");
          this.$store.dispatch("checkLogin");
          this.$router.push("/signin");
        })
        .catch((error) => {
          console.log({ code: error.code, message: error.message });
          if (error.code === "auth/invalid-email") {
            this.emailErrorMassage = "このメールアドレスは無効です";
          } else if (error.code === "auth/email-already-in-use") {
            this.emailErrorMassage =
              "このメールアドレスはすでに使用されています";
          } else {
            alert(
              "エラーにより登録ができませんでした。恐れ入りますが再度お試しください"
            );
          }
        });
    },
    gestLogin() {
      this.$auth
        .signInAnonymously()
        .then(() => {
          alert("ログインに成功しました");
          this.$store.dispatch("checkLogin");
          this.$router.push("/signin");
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

<style scoped>
.main_header {
    background-color: rgba(255, 255, 255, 0.6);
}
</style>
