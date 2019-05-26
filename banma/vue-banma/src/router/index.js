import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}
const CarFriends = (resolve) => {
  import('components/carFriends/carFriends').then((module) => {
    resolve(module)
  })
}
const BanmaClassroom = (resolve) => {
  import('components/banmaClassroom/banmaClassroom').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/carFriends',
      component: CarFriends
    },
    {
      path: '/banmaClassroom',
      component: BanmaClassroom
    }
  ]
})
