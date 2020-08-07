import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/visual-mathematics',
    name: 'VisualMath',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../components/VisualMath.vue')
    },
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'arithmetic',
        component: function () {
          return import('../components/Arithmetic.vue')
        }
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'fractions',
        component: function () {
          return import('../components/Fractions.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
