<template>
    <ul class="box">
        <li v-for="(item,index) in movieList" :key="index" class="box-movie" @click="getDetail(item.introduce)">
            <div class="box-movie-img">
                <img :src="item.imgsrc" alt="" class="box-movie-img-srcimg">
            </div>

            <div class="box-movie-info">
                <h3 class="box-movie-info-title">
                    {{ item.movieName }}
                </h3>
                <span class="box-movie-info-score">
                    大众评分：<span class="box-movie-info-score-style">{{ item.score }}</span>
                </span>
                <br>
                <span class="box-movie-info-name">
                    主演：{{ item.name }}
                </span>
                <div class="box-movie-info-intro">
                    介绍：{{ item.introduce }}
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            movieList:[],
        }
    },

    methods:{
        getDetail(item){
            this.$router.push(`/moviedetail/${item}`)
        },
        // getdata(){
        //     let url = 'https://www.fastmock.site/mock/005c74a44292192cad2849a876ab5ac2/myapp/api/movie/:id';
        //     axios.get(url).then(res=>{
        //    let getList = res.data.splice(this.movieList.length,this.movieList.length + 5);
        // //    console.log(this.movieList)
        //     this.movieList = this.movieList.concat(getList);
        //     // console.log(this.movieList)
        // });
        // },
        
    },
    created(){
        this.$emit('switchTab','movie')
        
        let url = 'https://www.fastmock.site/mock/005c74a44292192cad2849a876ab5ac2/myapp/api/movie/:id';
        axios.get(url).then(res=>{
           
            this.movieList = res.data
            //  console.log(this.movieList)
        })
        // this.getdata()
    },
    mounted(){
        // // window.onscroll = ()=>{
        // //     let scrollTop = document.documentElement.scrollTop;
        // //     let scrollHeight = document.documentElement.scrollHeight;
        // //     let clientHeight = document.documentElement.clientHeight;
        // //     console.log(scrollHeight,clientHeight,scrollTop)
        // // },
        // window.onscroll = ()=>{
        //         //document.Element  获取html的值   clientHeight 可视区域的高度  scrollHeight  html内容的高度  scrollTop 滚动条到顶的高度
        //       let scrollTop = document.documentElement.scrollTop;
        //       let scrollHeight = document.documentElement.scrollHeight
        //       let clientHeight = document.documentElement.clientHeight
        //       console.log(scrollHeight,scrollTop,clientHeight);
        //     //   if(scrollHeight == scrollTop + clientHeight && !this.isEnd){
        //     //     //请求数据
        //     //     this.getData();
        //     //   }
        //     }
    },
    
}
</script>
<style lang="scss" scoped>
.box{
    margin: 0.1rem 0.1rem;
    &-movie{
        display: flex;
        &-img{
            flex-grow: 1;
                &-srcimg{
                    width: 3rem;
                    height: 4.1rem;
            };
        };
        &-info{
            flex-grow: 2;
            font-size: 0.3rem;
            line-height: 0.5rem;
            margin-left: 0.1rem;
            &-title{
                font-size: 0.5rem;
                color: rgb(36, 23, 212);
                font-weight: 1000;
                
            };
            &-intro{
                font-size: 0.3rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                color: #c2c2c2;

            }
            &-name{
                font-size: 0.3rem;
                color: rgb(207, 207, 37);
            }
            &-score{
                font-weight: 1000;
                &-style{
                    color: rgb(221, 18, 187);
                }
            }
        }
    }
}
</style>