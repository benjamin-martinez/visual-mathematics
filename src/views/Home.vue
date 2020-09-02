<template>
  <div class="home">

    <HomeAnimation />
 

    <br><br>

  </div>
</template>

<script>
import HomeAnimation from '../components/home/HomeAnimation.vue'

export default {
  name: 'Home',
  components: {
    HomeAnimation
  }
}
</script>

<style scoped>
  .home {
    padding: 5% 10% 5% 10%;
  }
</style>