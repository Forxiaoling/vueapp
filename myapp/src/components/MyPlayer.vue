<template>
    <!-- 歌曲表头 -->
    <div class="music">
        <div class="back" :style="{background:'url('+musicImg+') no-repeat center/cover'}"></div>
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
                <i class="iconfont icon-shangyishou" @click="prev"></i>
                <i class="iconfont icon-bofang" v-show="!isPlay" @click="play"></i>
                <i class="iconfont icon-zanting" v-show="isPlay" @click="pause"></i>
                <i class="iconfont icon-xiayishou" @click="next"></i>
            </div>
            <p class="music-ctrl-list" @click="isshow=!isshow">歌单</p>
     
        </div>
    </div>
    <!-- 歌曲列表 -->
    <transition name="fade" mode="">
                <ul class="musiclist" v-show="isshow">
                    <li @click="selectlist(item,index)" v-for="(item,index) in musicList" :key="index" :class="['musiclist-item',musicIndex == index?'selected': '']">
                        {{ item.title }} -- {{ item.author }}
                    </li>
                </ul>
    </transition>
    <!-- 播放控件 -->
    <div class="audio">
        <audio ref="audioMusic" :src="musicSrc" autoplay controls class="audio-paly" @play="isPlay=true" @pause="isPlay=false" loop></audio>
    </div>
    
    <!-- 歌词 -->
    <ul class="lrc" ref="lrclist">
        <li v-for="(lrc,index) in musicLrc" :key="index" :class="lrcIndex==index?'select':''" >
            {{ lrc.lrc }}
        </li>
    </ul>
</template>

<script>
import '@/assets/font/iconfont.css'
import axios from 'axios'
export default {
    props: ['musicList'],
    data(){
        return{
            musicImg:'https://softsrc.51xiazai.cn/d/file/p/2016-12-02/f8f2abbaa5c5fb97a8a67a472c97dfd6.png',
            musicTitle:'歌名',
            musicAuthor:'演唱',
            musicSrc:'',
            isshow: true,
            isPlay: false,
            musicIndex:-1,
            musicLrc:[],
            lrcIndex:-1

        }
    },
    watch:{
        musicIndex(){
            let nowMusic = this.musicList[this.musicIndex]
            this.musicTitle = nowMusic.title 
            this.musicAuthor = nowMusic.author
            this.musicImg = nowMusic.musicImgSrc
            this.musicSrc = nowMusic.src
            this.musicLrc = [];
            this.lrcIndex = -1
            
            axios.get(nowMusic.lrc).then(res=>{
                this.parseLrc(res.data)
            })
        }
    },
    methods:{
        selectlist(item,index){
            this.musicIndex = index
        },
        play(){
            if(this.musicIndex!=-1){
                // this.isPlay = true
                this.$refs.audioMusic.play()
            }

        },
        pause(){
            this.$refs.audioMusic.pause()
        },
        prev(){
            this.musicIndex -- ;
            if(this.musicIndex==-1){
                this.musicIndex = this.musicList.length - 1
            }
        },
        next(){
            this.musicIndex ++ ;
            if(this.musicIndex == this.musicList.length){
                this.musicIndex = 0
            }
        },
        parseLrc(item){
            let line = item.split('\n');
            // console.log(line)
            line.forEach(elem=>{
                // console.log(elem)
                let time = elem.match(/\[\d{2}:\d{2}.\d{2}\]/);
                if (time !=null) {
                    // console.log(time[0])
                    let lrc = elem.split(time)[1];
                    let timeReg = time[0].match(/(\d{2}):(\d{2}).(\d{2})/)
                    // console.log(timeReg[1],timeReg[2],timeReg[3])
                    let time2Seconds = parseInt(timeReg[1]) * 60 + parseInt(timeReg[2]) + parseInt(timeReg[3]) / 1000;
                    // console.log(time2Seconds)
                    this.musicLrc.push({
                        time : time2Seconds,
                        lrc : lrc,
                        
                    })
                    // console.log(this,this.musicLrc)
                    
                };
                
            
            })
        }
    },
    mounted(){
        let audioMusic = this.$refs.audioMusic;
        this.$refs.audioMusic.addEventListener('timeupdate',()=>{
            // console.log(this.$refs.audioMusic.currentTime)
            let currentTime = audioMusic.currentTime;
            this.musicLrc.forEach((elem,index)=>{
                if(Math.ceil(elem.time) >= currentTime && Math.floor(elem.time)<currentTime){
                    this.lrcIndex = index;
                    this.$refs.lrclist.scrollTop = this.lrcIndex * 30
                }
            })

        })
    }
    
}
</script>
<style lang="scss" scoped>
.musiclist{
    position: fixed;
    font-size: 0.4rem;
    line-height: 1rem;
    bottom: 2.1rem;
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
    position: fixed;
    top: 1rem;
    display: flex;
    text-align: center;
    font-size: 0.5rem;
    line-height: 1rem;
    width: 100%;
    &-img{
        flex-grow: 2;
        width: 0;
        img{
            width: 3rem;
            height: 3rem;
            border-radius: 50%
        }
    };
    &-ctrl{
        width: 5rem;
        // height: 3rem;
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
.back{
    position: absolute;
    left: 0;
    right: 0;
    height: 3rem;
    z-index: -1;
    filter: blur(20px);
}
.fade{
    &-enter{
        transform: translateY(100%);
        opacity: 0;
        
        &-to{
            transform: translateY(0);
            opacity: 1;
        };
        &-active{
            transition: all 1s ease;
        }
    };
    &-leave{
        transform: translateY(0);
        opacity: 1;
        &-to{
            transform: translateY(100%);
            opacity: 0;
        };
        &-active{
            transition: all 1s ease;
        }
    };
}
.audio{
    position: fixed;
    bottom: 0.8rem;
    left: 0;
    right: 0;
    text-align: center;
    background: #faf8f8;
    &-paly{
        width: 100%;
    }

}
.selected{
    font-size: 0.5rem;
    color: green;
}
.lrc{
    z-index: -99;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
    position: fixed;
    // height: 3rem;
    left: 0;
    right: 0;
    top: 5rem;
    bottom: 3rem;
    overflow-y: scroll;
}
.select{
    font-size: 1rem;
    color: red;
}
</style>