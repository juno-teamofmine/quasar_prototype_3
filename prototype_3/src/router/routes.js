
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { name: 'CoinList', path: 'coin/list', component: () => import('pages/coin/List.vue') },
      { name: 'CoinDetail', path: 'coin/detail', component: () => import('pages/coin/Detail.vue'), props: (route) => ({ query: route.props. }) },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
