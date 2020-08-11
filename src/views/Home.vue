<template>
  <div class="home">

    Welcome to my personal portfolio site! In order to both showcase and practice my skills in web development, I've decided
    to create one single site that will contain several projects I'm working on. <br><br>

    To quickly get into the projects, just click on one of them in the navigation bar above. For more information about
    the site and about me, please keep reading. <br><br>

    Maybe I'm just lazy, but I figured combining all of my projects together under one web address would save prospective
    employers the hassle of navigating through different sites to find what I've done. This might break some obscure
    web development standards but this definitely works best for me.


    <br><br>
    <b>Visual Mathematics</b>
    <br><br>

    This inspiration behind this project came as a result of constantly being told over and over again that math is hard. 
    To me, "math is hard" breaks down into 2 things. Math can be boring, and math can be difficult to abstract. Maybe it's 
    so difficult to abstract because it's boring. Either way, I see this as a problem that can be corrected via the right visuals.
    Organizations such as Wolphram Alpha have done wonders to solve this problem but I've decided to take my own shot at it and 
    see if I can come up with anything better.

    <br><br>
    At the moment, the project has a ways to go before I would consider it "done", but the gist of what I'm trying to accomplish is 
    there. 

    <br><br>

    <b>Project 2</b>
  </div>
</template>

<script>
// @ is an alias to /src
import Arithmetic from '@/components/Arithmetic.vue'

export default {
  name: 'Home',
  components: {
    Arithmetic
  }
}
</script>