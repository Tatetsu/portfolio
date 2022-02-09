<template>
  <div id="media">
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
#media {
  max-width: 1920px;
  margin: 0 auto;
  background-color: #F2F6F7;
} 
#main {
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