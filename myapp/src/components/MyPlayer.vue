<template>
    <!-- 歌曲表头 -->
    <div class="music">
        <div class="music-img">
            <img :src="musicImg" alt="">
        </div>
        <div class="music-ctrl">
            <h2 class="music-ctrl-title">
                {{ musicTitle }}
            </h2>
            <p class="music-ctrl-author">
                {{ musicAuthor }}
            </p>
            <div class="music-ctrl-icon">
                <i class="iconfont icon-shangyishou"></i>
                <i class="iconfont icon-bofang"></i>
                <i class="iconfont icon-zanting"></i>
                <i class="iconfont icon-xiayishou"></i>
            </div>
            <p class="music-ctrl-list">歌单</p>
        </div>
    </div>
    <!-- 歌曲列表 -->
    <div>
        <ul class="musiclist" v-show="isLoad">
            <li @click="selectlist(item)" v-for="(item,index) in musicList" :key="index" class="musiclist-item">
                {{ item.title }} -- {{ item.author }}
            </li>
        </ul>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
    props: ['musicList'],
    data(){
        return{
            menuList:'',
            musicImg:'https://softsrc.51xiazai.cn/d/file/p/2016-12-02/f8f2abbaa5c5fb97a8a67a472c97dfd6.png',
            musicTitle:'歌名',
            musicAuthor:'演唱',
            isLoad: true,
        }
    },
    methods:{
        selectlist(item){
            
            this.menuList = item;
            this.musicTitle = item.title 
            this.musicAuthor = item.author
            // console.log(this.menuList)
        }
    }
    
}
</script>
<style lang="scss" scoped>
.musiclist{
    position: fixed;
    font-size: 0.4rem;
    line-height: 1rem;
    bottom: 2rem;
    left: 0;
    right: 0;
    height: 4rem;
    background: #faf8f8;
    overflow-y: scroll;
    
    &-item{
        border-top: 0.01rem dashed;
    }
}
.music{
    position: relative;
    top: 1rem;
    display: flex;
    text-align: center;
    font-size: 0.5rem;
    line-height: 1rem;
    &-img{
        flex-grow: 2;
        width: 0;
        img{
            width: 3rem;
            height: 3rem;
        }
    };
    &-ctrl{
        width: 100%;
        height: 3rem;
        flex-grow: 3;
        width: 0;
        &-icon{
            .iconfont{
                float: left;
                margin-left: 0.1rem;
                position: relative;
                left: 32%;
                transform: translate(-50%)
            }
        };
        &-list{
            float: right;
            display: block;
            font-size: 0.3rem;
            margin-right: 0.5rem;
        }
    }
}
</style>