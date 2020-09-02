<template>
    <transition 
        @enter="enterElement" 
        @leave="leaveElement" 
        v-bind:css="false"
        mode="out-in"
    >
        <div @click="enterElement" >
            <div class="single-box"></div>
            <br><br><br>
            <div class="single-box"></div>
            <br><br><br>
            <div class="single-box"></div>

        </div>
    </transition>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'HomeAnimation',
    data: {
        showFirst: true
    },
    methods: {
    enterElement(el, done) {
      console.log(el)
      anime({
        targets: ".single-box",
        translateX: 800,
        direction: 'alternate',
        borderRadius: ['0%', '50%'],
        rotate: {
            value: 720,
            duration: 1800,
            easing: 'easeInOutSine'
        },
        scale: {
            value: 2,
            duration: 1600,
            delay: 800,
            easing: 'easeInOutQuart'
        },
        duration: 6000,
        complete: done,
      })
    }
  }
}
</script>

<style>
.animation-wrapper {
    display: grid;
    justify-items: center;
}

.single-box {
    background: black;
    height: 50px;
    width: 50px;
}
</style>