<template>
   <ul class="photo">
        <li @click="gotodetail(index)" v-for="(photo,index) in $store.state.photoList" :key="index" class="photo-list">
            <img :src="photo.src" alt="">
        </li>
   </ul>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            // photoList:[]
        }
        
    },
    created(){
        this.$emit('switchTab','photo')

        axios.get('data/photodata.json').then(res=>{
          
            // this.photoList = res.data.photoData
            // console.log(this.photoList)
            this.$store.commit('setPhotoList',res.data.photoData)
        })
    },
    methods:{
        gotodetail(index){
        this.$router.push(`/photodetail/${index}`)
    }
    }
}
</script>
<style lang="scss" scoped>
.photo{
    &-list{
        width: 50%;
        float: left;
         img{
            width: 3.5rem;
            height: 3.5rem;
         }
        
    }
}
</style>