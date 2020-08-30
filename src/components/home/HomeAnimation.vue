<template>
    <transition 
        @enter="enterElement" 
        @leave="leaveElement" 
        v-bind:css="false"
        mode="out-in"
    >
        <div class="animation-wrapper">
            <div v-for="x in 50" :key="x.id">
                <div v-for="y in 50" :key="y.id">
                    <div v-if="x==25 && y==25" class="single-box origin"></div>
                    <div v-else-if="x==25" class="single-box y-axis"></div>
                    <div v-else-if="y==25" class="single-box x-axis"></div>
                    <div v-else class="single-box"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'HomeAnimation',
    data: {
        
    },
    methods: {
    enterElement(el, done) {
      console.log(el)
      anime({
        targets: ".single-box",
        translateX: [400, 0],
        opacity: [0, 1],
        easing: 'easeInOutSine',
        complete: done,
      })
    }
  }
}
</script>

<style>
.animation-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
}

.single-box {
    background: black;
    height: 10px;
    width: 10px;
}

.y-axis {
    background: red;
}

.x-axis {
    background: red;
}

.origin {
    background: yellow;
}

</style>