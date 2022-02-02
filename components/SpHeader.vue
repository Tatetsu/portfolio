<template>
    <header>
  <div
    class="
      sp_header
      md:hidden
      py-3
      px-6
      header
      w-full
      flex
      justify-between
      sticky
      top-0
      font-serif
      md:px-8 md:py-4
    "
  >
    <h1>
      <nuxt-link
        to="/"
        class="
          text-3xl
          hover:opacity-50
          duration-1000
          md:text-4xl
          cursor-pointer
        "
      >
        <img src="../assets/img/nuxt.png" class="w-3/4" alt="">
      </nuxt-link>
    </h1>

    <div class="visible md:invisible flex justify-end items-center">
      <button @click="isOpen = !isOpen" class="relative md:hidden h-5 w-6">
        <span
          :class="
            isOpen
              ? 'transform rotate-45 top-2 w-7 transition duration-300'
              : 'top-0 w-6'
          "
          class="h-1 inline-block transition-all absolute right-0 bg-black"
        ></span>
        <span
          :class="isOpen ? 'hidden' : 'top-2 w-6'"
          class="h-1 inline-block transition-all absolute right-0 bg-black"
        ></span>
        <span
          :class="
            isOpen
              ? 'transform -rotate-45 top-2 w-7 transition duration-300'
              : 'top-4 w-6'
          "
          class="h-1 inline-block transition-all absolute right-0 bg-black"
        ></span>
      </button>
    </div>

    <!--サイドバー-->
    <div
      :class="isOpen ? 'top-12 right-0' : 'top-12 -right-60'"
      class="
        fixed
        items-center
        h-full
        transition-all
        duration-300
        px-20
        md:static
      "
    >
      <div v-show="isOpen">
        <ul class="md:hidden">
          <li>
            <nuxt-link
              to="/"
              class="
                block
                mt-6
                px-4
                py-2
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ホーム</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="
                block
                mt-6
                px-4
                py-2
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ホーム</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="
                block
                mt-6
                px-4
                py-2
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ホーム</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="
                block
                mt-6
                px-4
                py-2
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ホーム</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="
                block
                mt-6
                px-4
                py-2
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ホーム</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/"
              class="
                block
                mt-6
                px-4
                py-2
                text-center
                hover:bg-green-100
                transition
                duration-300
                md:px-4 md:py-4
              "
              >ホーム</nuxt-link
            >
          </li>

        </ul>
      </div>
    </div>

    <ul
      class="hidden md:flex justify-between items-center opacity-100 lg:text-xl"
    >
      <li>
        <nuxt-link to="/" class="pr-4 hover:opacity-50 duration-1000">
          ホーム
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="pr-4 hover:opacity-50 duration-1000">
          ホーム
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="pr-4 hover:opacity-50 duration-1000">
          ホーム
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="pr-4 hover:opacity-50 duration-1000">
          ホーム
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="pr-4 hover:opacity-50 duration-1000">
          ホーム
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="pr-4 hover:opacity-50 duration-1000">
          ホーム
        </nuxt-link>
      </li>

    </ul>
  </div>
    <div class="hidden md:block">
        <aside class="w-1/4 flex flex-col">
        <h1 class="w-36 pt-4"><router-link to="/"><img src="../assets/img/nuxt.png" alt=""></router-link></h1>
        <nav>
            <ul>
                <li><router-link to="/">ホーム</router-link></li>
                <li><router-link to="/program">プログラム一覧</router-link></li>
                <li><router-link to="/search">検索</router-link></li>
                <li><router-link to="/mypage">マイアカウント</router-link></li>
                <li><router-link to="/playlist">プレイリスト</router-link></li>
            </ul>
        </nav>
        <div class="login">
            <ul>
                <li><router-link to="/signin">ログイン</router-link></li>
                <li><router-link to="/register">新規登録</router-link></li>
            </ul>
        </div>
    </aside>
    </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    signOut() {
      this.$auth
        .signOut()
        .then(() => {
          alert("ログアウトに成功しました");
          this.$store.commit("signOut");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert("ログアウトに失敗しました");
        });
    },
  },
};
</script>

<style scoped>
ul {
    list-style: none;
}
ul li {
    margin-top: 2rem;
}

.login {
    margin-top: auto;
    height: 300px;
}

@media screen and (min-width: 768px) {
aside {
    padding-left: 1rem;
    min-width: 250px;
    position: sticky;
    top: 20px;
}
}
</style>