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
  name: "default"
}
</script>
<style scoped>
#body {
  display: flex;
}
#main {
    background-color: #F2F6F7;
    flex: 1;
}
</style>
