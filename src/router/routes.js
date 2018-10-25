//  { path: '/', component: load('views/dashboard/one/dashboard'), meta: { name: 'Dashboard One' } },
const routes = [{
  path: '/',
  component: () => import('components/layouts/MyLayout.vue'),
  children: [{
      path: '',
      component: () => import('components/pages/Index.vue')
    },

    {
      path: '/home',
      component: () => import('components/pages/article/articleList.vue'),
      meta: {
        name: 'Articles list',
        icone: 'note'
      }
    },
    {
      path: '/',
      component: () => import('components/pages/article/articleList.vue'),
      meta: {
        name: 'Articles list',
        icone: 'note'
      }
    },
    {
      path: '/editArticle',
      component: () => import('components/pages/article/updateArticle.vue'),
      meta: {
        name: 'edit article',
        icone: 'note_event'
      }
    },
    {
      path: '/addArticle',
      component: () => import('components/pages/article/newArticle.vue'),
      meta: {
        name: 'add article'
      }
    },
    {
      path: '/articleDetails',
      component: () => import('components/pages/article/articleDetails.vue'),
      meta: {
        name: 'detail article'
      }
    }
  ]
}]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('components/pages/Error404.vue')
  })
}

export default routes
