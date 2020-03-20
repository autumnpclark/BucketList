import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activities from '../views/Activities.vue'
import Location from '../views/Location.vue'
import NewActivity from '../views/NewActivity.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: "/location/:locationID",
    name: "Location",
    props: true,
    component: Location
  },
  {
    path: "/new",
    name: "NewActivity",
    component: NewActivity
  }
  /*
  Activities Page
  {
    path: '/actvities',
    name: 'Activities',
    component: Activities
  }
  LocationDetail Page
  {
    path: "/location/:locationID",
    name: "Location Detail",
    props: true,
    component: LocationDetail
  }
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
