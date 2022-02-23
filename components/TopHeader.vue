<template>
  <header class="sticky top-0 bg-white">
    <div
      class="sp_header md:hidden py-3 px-6 w-full flex justify-between font-serif md:px-8 md:py-4"
    >
      <h1>
        <router-link
          to="/"
          class="text-3xl hover:opacity-50 duration-1000 md:text-4xl cursor-pointer"
        >
          <img src="../assets/img/logo/linkedin_banner_image_1.png" class="w-36" alt="" />
        </router-link>
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
        class="fixed items-center h-full transition-all duration-300 bg-white px-20 md:static"
      >
        <div v-show="isOpen">
          <ul class="md:hidden">
            <li>
              <router-link
                to="/"
                class="block mt-6 px-2 py-1 text-center hover:bg-gray-100 transition duration-300 md:px-3 md:py-2"
                >ホーム</router-link
              >
            </li>
            <li>
              <router-link
                to="/signin"
                class="block mt-6 px-4 py-1 text-center hover:bg-gray-100 transition duration-300 md:px-4 md:py-4"
                >ログイン</router-link
              >
            </li>
            <li>
              <router-link
                to="/register"
                class="block mt-6 px-4 py-1 text-center hover:bg-gray-100 transition duration-300 md:px-4 md:py-4"
                >新規登録</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <aside class="pc_header hidden md:block flex flex-col py-5">
        <h1 class="w-36 pt-4">
          <router-link to="/"
            ><img src="../assets/img/logo/linkedin_banner_image_1.png" alt=""
          /></router-link>
        </h1>
        <nav>
          <ul>
            <li class="hover:text-red-400"><router-link to="/">ホーム</router-link></li>
            <li class="hover:text-red-400"><router-link to="/signin">ログイン</router-link></li>
            <li class="hover:text-red-400"><router-link to="/register">新規登録</router-link></li>
          </ul>
        </nav>
    </aside>
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

aside {
    padding-left: 1rem;
    min-width: 250px;
    position: sticky;
    top: 20px;
}

@media screen and (min-width: 768px) {
ul li {
  margin-top: 2rem;
}
}

</style>
