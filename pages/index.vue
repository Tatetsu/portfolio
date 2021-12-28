<template>
<div class="flex flex-column justify-center">
<div class="flex justify-around.jpg" alt="">
  <div>
    <p><input type="radio" value="One" v-model="radio" >週4日以上</p>
    <img src="~assets/fitness1.jpg" alt="">
  </div>
  <div>
    <p><input type="radio" value="Two" v-model="radio" >週4日以上</p>
    <img src="~assets/fitness2.jpg" alt="">
  </div>
</div>
<div class="flex justify-around.jpg" alt="">
  <div>
    <p><input type="radio" value="
    Three" v-model="radio" >週4日以上</p>
    <img src="~assets/fitness1.jpg" alt="">
  </div>
  <div>
    <p><input type="radio" value="Four" v-model="radio" >週4日以上</p>
    <img src="~assets/fitness2.jpg" alt="">
  </div>
</div>
</div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      radio: ""
    }
  }
};
</script>
