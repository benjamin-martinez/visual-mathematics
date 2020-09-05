<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-left text-center">
        <h1 class="opening-text">We make math easier by bringing its concepts to life.</h1>
        <br>
        <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="primary"
          large
          @click="loader = 'loading2'">
          Visualize Now!
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
      </div>
      <div class="home-right">
        <HomeAnimation />
      </div>
    </div>

    <v-divider
      class="mx-4"
      horizontal
    ></v-divider>

    <div class="home-content">
      <h2 class="text-center">How to get the most out of Visual Mathematics</h2>
      <br>
      <div class="how-to-vis-math text-left">
          <h3>1.</h3><h3>Come with a problem you want to solve. Having trouble with geometry homework?<br>
                  Pick a hard problem an plug it into our visualizer. Approaching math from multiple ways
                  is often times necessary to shed light onto the concepts behind the problem.
                  Once you understand the underlying concepts, everything becomes easier.</h3>
          <h3>2.</h3><h3>Click on "Visualize Now!" and choose one of the many topics we offer to have visualized.<br></h3>
          <h3>3.</h3><h3>Enter your problem's data and visualize the solution both mathematically and graphically in real time.</h3>
          <h3>4.</h3><h3>Play around! Mix and max numbers and try to predict the dolution to a similar problem.
                  While visualizing helps the learning process, it's varied repetition that cements the knowledge into your brain.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import HomeAnimation from '../components/home/HomeAnimation.vue'

export default {
  name: 'Home',
  data () {
      return {
        loader: null,
        loading2: false,
      }
  },
  components: {
    HomeAnimation
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    }
}
</script>

<style scoped>
  .home {
    padding: 10%;
  }

  .home-banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 15%
  }

  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }

  .home-content {
    margin-top:5%;
    padding-left: 20%;
    padding-right: 20%
  }

  .opening-text {
    font-size: 48px;
  
  }

  .how-to-vis-math {
    display: grid;
    grid-template-columns: 5% 95%;
    grid-gap: 1em;
  }
</style>