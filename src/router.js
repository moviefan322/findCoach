import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index';
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
        { path: '/register', component: CoachRegistration, children: [], meta: { requiresAuth: true } },
        { path: '/requests', component: RequestsReceived, children: [], meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, children: [], meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound, children: [] }
    ]
});
router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    }
    else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    }
    else {
        next();
    }
});
export default router;
//# sourceMappingURL=router.js.map