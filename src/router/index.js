import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/visual-mathematics',
    name: 'VisualMath',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../components/visualize/VisualMath.vue')
    },
    children: [
      {
        path: 'arithmetic',
        component: function () {
          return import('../components/visualize/ElementaryMath/Arithmetic.vue')
        }
      },
      {
        path: 'fractions',
        component: function () {
          return import('../components/visualize/ElementaryMath/Fractions.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
