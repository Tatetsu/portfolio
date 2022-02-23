<template>
    <div>
        <div class="main_header flex justify-between items-center">
            <div class="logo">
                <h1 class="w-36 p-4">
                    <router-link to="/">
                        <img src="../assets/img/logo/linkedin_banner_image_1.png" alt="">
                    </router-link>
                </h1>
            </div>
            <div class="login mr-5">
                <button>
                    <router-link to="/signin">
                        ログインする
                    </router-link>
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
