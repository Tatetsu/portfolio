<template>
  <div>
    <div id="body">
      <TopHeader />
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
}
</script>

<style scoped>
#main {
    background-color: #F2F6F7;
    padding: 2%;
}
@media screen and (min-width: 768px) {
#body {
  display: flex;
}
#main {
    flex: 1;
}
}
@media screen and (max-width: 767px) {

}
</style>