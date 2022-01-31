<template>
    <div>
        <div id="home">
            <button @click="signOut">
                ログアウト
            </button>
        </div>
    </div>
</template>

<script>
    export default {
  layout: "sp",
        methods: {
            signOut() {
                this.$auth
                    .signOut()
                    .then(() => {
                        alert("ログアウトしました")
                        this.$store.commit("signOut")
                        this.$router.push("/")
                    })
                    .catch(error=> {
                        console.log(error)
                        alert("ログアウトに失敗しました")
                    })
            }
        }
    }
</script>

<style scoped>

</style>