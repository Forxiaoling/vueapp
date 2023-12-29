<template>
  <my-header></my-header>
  <router-view/>
  <my-footer :menuList="menuList"></my-footer>
</template>
<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
export default {
    components:{
      MyFooter,
      MyHeader
    },
    data () {
        return {
          menuList: [
            {
              title: '电影',
              bgColor: '#e54847',
              name: 'movie',
              path: '/movie'
            },
            {
              title: '音乐',
              bgColor: '#009688',
              name: 'music',
              path: '/music'
            },
            {
              title: '书籍',
              bgColor: '#795548',
              name: 'book',
              path: '/book'
            },
            {
              title: '图片',
              bgColor: '#3f51b5',
              name: 'picture',
              path: '/picture'
            },
          ],
          
        }
    },
  }
</script>
<style lang="scss" scoped>

</style>
