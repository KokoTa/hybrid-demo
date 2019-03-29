import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      { path: 'page1', component: Page1 },
      { path: 'page2', component: Page2 }
    ]
  }
]

export default new VueRouter({
  routes
})