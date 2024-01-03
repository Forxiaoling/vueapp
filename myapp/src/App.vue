<template>
  <my-header :changeHeaderStyle="changeHeaderStyle"></my-header>
  <router-view class="content" @switchTab="switchTab"/>
  <my-footer :footerbgColor="footerbgColor" :menuList="menuList"></my-footer>
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
              name: 'photo',
              path: '/photo'
            },
          ],
          changeHeaderStyle:'',
          footerbgColor:'',
          
        }
    },
    methods:{
      changeHeader(item){
        // this.changeHeaderStyle = item;
        // console.log(this.changeHeaderStyle)
      },
      switchTab(musicName){
        // console.log(musicName)
        this.menuList.forEach((elem,index)=>{
          if(elem.name == musicName){
          this.changeHeaderStyle = elem;
          // console.log(this.changeHeaderStyle)
          this.footerbgColor = elem.bgColor
        };
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
.content{
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  z-index: -1;
  overflow-y: scroll;
  padding: 0.2rem 0.2rem;
}
</style>
