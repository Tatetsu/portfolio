<template>
<section>
    <aside class="w-1/4 flex flex-col">
        <h1 class="w-36 pt-4"><router-link to="/"><img src="../assets/img/nuxt.png" alt=""></router-link></h1>
        <nav>
            <ul>
                <li><router-link to="/login">ホーム</router-link></li>
                <li><router-link to="/program">プログラム一覧</router-link></li>
                <li><router-link to="/login">検索</router-link></li>
                <li><router-link to="/login">マイアカウント</router-link></li>
                <li><router-link to="/playlist">プレイリスト</router-link></li>
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