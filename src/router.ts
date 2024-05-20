import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList, children: [] },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach, children: [] }]
    },
    { path: '/register', component: CoachRegistration, children: [] },
    { path: '/requests', component: RequestsReceived, children: [] },
    { path: '/auth', component: UserAuth, children: [] },
    { path: '/:notFound(.*)', component: NotFound, children: [] }
  ]
})

export default router
