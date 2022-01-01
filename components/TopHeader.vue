<template>
<section class="header h-20">
    <!-- 各ページの共通要素を入れる（主にheader footer） -->
    <nav class="h-20 flex items-center justify-end">
        <ul class="flex">
            <li class="mr-5"><a href="#">ログイン</a></li>
            <li class="mr-5"><a href="#">ログアウト</a></li>
        </ul>
    </nav>
</section>
</template>

<script>
export default {

}
</script>

<style>
.header {
    background-image: url("~/assets/header.jpg");
}
</style>