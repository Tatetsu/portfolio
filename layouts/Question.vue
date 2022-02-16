<template>
  <div id="media">
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
#media {
  max-width: 1920px;
  height: 80vh;
  margin: 0 auto;
  background-color: #F2F6F7;
} 
#main {
  height: 80vh;
    background-color: #F2F6F7;
    background-image: url(../assets/img/AdobeStock_319973032.jpeg);
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