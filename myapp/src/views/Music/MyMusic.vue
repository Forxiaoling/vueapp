<template>
    <MyPlayer :musicList="musicList"></MyPlayer>
</template>
<script>
import MyPlayer from '@/components/MyPlayer.vue';
import axios from 'axios';
export default {
    data(){
        return{
            musicList:[],
        }
    },
    components:{
        MyPlayer,
    },
    created(){
        this.$emit('switchTab','music')

        axios.get('data/musicdata.json').then(res=>{
            // console.log(res.data)
            this.musicList = res.data.musicData
            // console.log(this.musicList)
        })
    }
}
</script>
<style lang="scss" scoped>
    
</style>