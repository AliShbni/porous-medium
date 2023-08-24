
import Index from '../pages/Index'

const routes = [
  {
    path: '/',
    component: Index,
    name: 'Arlicon',
    meta: { requiresAuth: false  }
  },
  // Always leave this as last one,
  // but you can also remove it
  { 
    path: '/:catchAll(.*)*',
    name: 'Unknown',
    component: () => import('pages/Error404.vue'),
    meta: { requiresAuth: false  } 
  }
]

export default routes
