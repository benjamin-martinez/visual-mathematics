<template>
  <div class="home">
  <Addition/>
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
