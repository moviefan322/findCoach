import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: null, children: [] },
    {
      path: '/coaches/:id',
      component: null,
      children: [{ path: 'contact', component: null, children: [] }]
    },
    { path: '/register', component: null, children: [] },
    { path: '/contact', component: null, children: [] },
    { path: '/requests', component: null, children: [] },
    { path: '/:notFound(.*)', component: null, children: [] }
  ]
})

export default router
