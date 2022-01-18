<template>
  <div>
    <div id="login" class="max-w-2xl m-auto my-5">
      <div class="shadow border border-solid p-8">
        <h2 class="text-center mx-5">新規登録</h2>
        <hr />
        <form action="" method="" class="my-5">
          <div class="table w-3/4 m-auto">
            <div class="input-box flex">
              <div class="icon">
                <i class="fas fa-user-edit"></i>
              </div>
              <div class="input-text">
                <input
                  class="w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="ニックネーム"
                />
              </div>
            </div>
          </div>
          <div class="table w-3/4 m-auto">
            <input
              class="w-full"
              type="text"
              name="email"
              id="email"
              placeholder="メールアドレス"
            />
          </div>
          <div class="table w-3/4 m-auto">
            <input
              class="w-full"
              type="text"
              name="pass"
              id="pass"
              placeholder="パスワード（6文字以上）"
            />
          </div>
          <button class="btn w-full text-center m-auto">
            <input class="p-5" type="submit" value="登録する" />
          </button>
        </form>

        <div>
          <h2 class="text-center mx-5">ログイン</h2>
          <hr />
          <form action="" method="" class="mt-5">
            <div class="table w-3/4 m-auto">
              <input
                class="w-full"
                type="text"
                name="email"
                id="email"
                placeholder="メールアドレス"
              />
            </div>
            <div class="table w-3/4 m-auto">
              <input
                class="w-full"
                type="text"
                name="pass"
                id="pass"
                placeholder="パスワード（6文字以上）"
              />
            </div>
            <button class="btn w-full text-center m-auto">
              <input class="p-5" type="submit" value="ログイン" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// Vue.component('fa-icon', FontAwesomeIcon)

// library.add(faUserSecret)
</script>

<style scoped>
.table {
  border: solid 1px #000;
  margin-bottom: 1.25rem;
}
</style>
