<template>
  <div class="flex flex-col h-screen">
    <header class="flex justify-between items-center p-4 border-b">
      <h1 class="font-semibold text-xl leading-thing">Slack Clone</h1>
      <button class="py-1 px-4 border-2 border-green-800 rounded">
        <router-link to="/signin"> サインイン </router-link>
      </button>
    </header>
    <div class="bg-gray-100 flex-auto">
      <div class="flex justify-center mt-16">
          <div class="w-2/5 border bg-white">
          <div class="my-12 text-center">
        <h2 class="text-4xl font-bold">ユーザー登録画面</h2>
        <p class="my-4">
            <span class="font-semibold">メールアドレス</span>と
            <span class="font-semibold">パスワード</span>を入力してください。
        </p>
        <form @submit.prevent="registerUser" action="">
            <div class="mb-2">
                <input 
                type="mail"
                v-model="email"
                placeholder="you@example.com"
                class="text-xl w-3/5 p-3 border rounded"
                >
            </div>
            <div class="mb-2">
                <input 
                type="password"
                v-model="password"
                placeholder="パスワード"
                class="text-xl w-3/5 p-3 border rounded"
                >
            </div>
            <button type="submit" class="text-xl w-3/5 bg-green-800 text-white py-2 rounded">ユーザーの登録</button>
        </form>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    computed: {
        user() {
            return this.$store.getters["user"]
        }
    },
    data:function() {
        return {
            email:"",
            password:"",
            emailErrorMassage:"",
            passwordErrorMassage:"",
            emailRegexp: /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i,
            passwordRegexp: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i
        }
    },
    methods: {
        register() {
            if(!this.emailRegexp.test(this.email)) {
                this.emailErrorMassage = 
                "このメールアドレスは無効です。正しく入力してください。"
            }
            if (!this.passwordRegexp.test(this.password)) {
                this.passwordErrorMassage = 
                "このパスワードは無効です。半角英数字を含んで8〜20文字の範囲で入力してください。"
            }
            if(this.email === "") {
                this.emailErrorMassage = "メールアドレスを入力してください"
            }
            if(this.password === "") {
                this.passwordErrorMassage = "パスワードを入力してください"
            }
            if(this.emailErrorMassage !== "" || this.passwordErrorMassage !== "") {
                return
            }

            this.$auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert("登録が完了しました")
                this.$store.dispatch("checkLogin")
                this.$router.push("/home")
            })
            .catch(error => {
                console.log({ code: error.code, message: error.message }
                )
                if (error.code === "auth/invalid-email") {
                    this.emailErrorMassage = "このメールアドレスは無効です"
                }else if (error.code === "auth/email-already-in-use") {
                    this.emailErrorMassage = "このメールアドレスはすでに使用されています"
                }else {
                    alert("エラーにより登録ができませんでした。恐れ入りますが再度お試しください")
                }
            })
        },
        isInput() {
            this.emailErrorMassage = ""
            this.passwordErrorMassage = ""
        }
    }
}
</script>

<style scoped>

</style>