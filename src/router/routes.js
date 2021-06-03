
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },

      { name: 'CoinList', path: 'coin', component: () => import('pages/coin/List.vue') },
      { name: 'CoinDetail', path: 'coin/:id', component: () => import('pages/coin/Detail.vue'), props: true },

      { name: 'Native', path: 'native', component: () => import('pages/native/List.vue')},
      { name: 'NativeDevice', path: 'native/device', component: () => import('pages/native/Device.vue')},
      { name: 'NativeGeolocation', path: 'native/geolocation', component: () => import('pages/native/Geolocation.vue')},
      { name: 'NativeCamera', path: 'native/camera', component: () => import('pages/native/Camera.vue')},
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
