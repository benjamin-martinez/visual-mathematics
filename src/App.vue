<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="assets/vis-math-logo-cropped.png"
          transition="scale-transition"
          width="40"
        />
        
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
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
            <v-icon>mdi-calculator-variant</v-icon>
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
.mr-2 a {
            color: white;
            text-decoration: none;
        }
</style>
