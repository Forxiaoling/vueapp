import { createRouter, createWebHashHistory } from 'vue-router'
import MyMovie from '@/views/Movie/MyMovie.vue'
import MyMusic from '@/views/Music/MyMusic.vue'
import MyBook from '@/views/Book/MyBook.vue'
import MyPhoto from '@/views/Photo/MyPhoto.vue'
import MovieDetail from '@/views/Movie/MovieDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: MyMovie
  },
  {
    path: '/music',
    name: 'music',
    component: MyMusic
  },
  {
    path: '/book',
    name: 'book',
    component: MyBook
  },
  {
    path: '/photo',
    name: 'photo',
    component: MyPhoto
  },
  {
    path: '/moviedetail/:moviedetail',
    name: 'moviedetail',
    component: MovieDetail
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
