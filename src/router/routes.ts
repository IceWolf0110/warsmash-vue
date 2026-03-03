import HomePage from '@/pages/HomePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: HomePage,
    meta: {
      title: 'Tutorial',
    },
  },
  {
    path: '/compatibility',
    name: 'compatibility',
    component: HomePage,
    meta: {
      title: 'Compatibility',
    },
  },
  {
    path: '/ramblings',
    name: 'ramblings',
    component: HomePage,
    meta: {
      title: 'Ramblings',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
]

export default routes
