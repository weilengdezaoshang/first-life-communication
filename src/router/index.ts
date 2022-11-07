import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index.vue';
import List from '@/views/List.vue';
import Search from '@/views/Search.vue';
import City from '@/views/City.vue';
import Detail from '@/views/Detail.vue';
import HelloWorldVue from '@/components/HelloWorld.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorldVue
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
