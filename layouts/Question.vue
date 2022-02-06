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
    background-image: url(../assets/img/AdobeStock_141454513.jpeg);
    background-size: cover;
    background-position: center center;
    position: relative;
}
#main:before {
content: '';
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(255,255,255,0.5);
}
</style>