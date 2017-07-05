import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
const eventHub = new Vue() // Single event hub

// Distribute to components using global mixin
Vue.mixin({
  data: () => {
    return {
      eventHub: eventHub
    }
  }
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
