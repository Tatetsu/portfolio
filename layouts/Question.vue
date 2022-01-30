<template>
  <div>
    <div id="body">
      <QuestionHeader />
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
  name: "question"
}
</script>

<style scoped>
#main {
    background-color: #F2F6F7;
}
</style>