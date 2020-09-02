<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
      extended
    >
          <router-link to="/">
          <div class="d-flex align-center mt-12">
            <v-img 
              src="./components/svg/vmEmblem.svg"
              class="vm-emblem"/>
            <v-img 
              src="./components/svg/vmText.svg"
              class="vm-text"/>
          </div>
          </router-link>

          <v-spacer></v-spacer>

          <router-link to="/about">
            <v-btn target="_blank" text >
                <span class="mr-2">About</span>
            </v-btn>
          </router-link>

          <router-link to="/visual-mathematics">
            <v-btn target="_blank" text >
                <v-icon color="blue">mdi-calculator-variant</v-icon>
                <span class="mr-2">Visual Mathematics</span>
            </v-btn>
          </router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.mr-2 {
            color: #448aff;
            text-decoration: none;
        }

.vm-emblem {
  width: 10%
}

.vm-text {
  margin-left: 2em;
}
</style>
