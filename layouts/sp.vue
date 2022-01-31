<template>
  <div>
    <div id="body">
      <SpHeader />
      <div id="main">
      <nuxt />
      </div>
    </div>
    <div id="footer">
      <TopFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: "sp"
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
#body {
  display: flex;
}
#main {
    background-color: #F2F6F7;
    flex: 1;
    height: 100vh;
}
}
@media screen and (max-width: 767px) {
#main {
    height: 100vh;
}
}
</style>