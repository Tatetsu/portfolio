<template>
    <div>
        <div class="main_header flex justify-between items-center">
            <div class="logo">
                <h1 class="w-36 p-4">
                    <nuxt-link to="/">
                        <img src="../assets/img/logo/linkedin_banner_image_1.png" alt="">
                    </nuxt-link>
                </h1>
            </div>
            <div class="login mr-5">
                <button class="hover:text-red-400">
                    <nuxt-link to="/signin">
                        ログイン
                    </nuxt-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.main_header {
    background-color: rgba(255, 255, 255, 0.6);
}
</style>
