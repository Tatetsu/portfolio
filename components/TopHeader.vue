<template>
<!-- <section class="header h-20">
    <nav class="h-20 flex items-center justify-between">
    <h1 class="ml-5"><a href="http://localhost:3000">TITLE</a></h1>
        <ul class="flex">
            <li class="mr-5"><a href="#">新規登録</a></li>
            <li class="mr-5"><a href="#">ログイン</a></li>
        </ul>
    </nav>
</section> -->
<section>
    <aside class="w-1/4 flex flex-col">
        <h1 class="w-36 pt-4"><router-link to="/"><img src="../src/img/nuxt.png" alt=""></router-link></h1>
        <nav>
            <ul>
                <li><router-link to="/login">ホーム</router-link></li>
                <li><router-link to="/login">プログラム一覧</router-link></li>
                <li><router-link to="/login">検索</router-link></li>
                <li><router-link to="/login">マイアカウント</router-link></li>
                <li><router-link to="/login">プレイリスト</router-link></li>
            </ul>
        </nav>
        <div class="login">
            <ul>
                <li><router-link to="/login">ログイン</router-link></li>
                <li><router-link to="/login">新規登録</router-link></li>
            </ul>
        </div>
    </aside>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* .header {
    background-image: url("~/assets/header.jpg");
} */
ul {
    list-style: none;
}
ul li {
    margin-top: 2rem;
}
aside {
    padding-left: 1rem;
    min-width: 250px;
        position: sticky;
    top: 20px;
}
.login {
    margin-top: auto;
    height: 300px;
}
</style>