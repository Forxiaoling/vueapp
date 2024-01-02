<template>
    <div class="header" :style="{background:changeHeaderStyle.bgColor}">
        <div class="header-home" @click="gohome">首页</div>
        <div class="header-title">{{changeHeaderStyle.title ? changeHeaderStyle.title : '电影'}}</div>
    </div>
</template>
<script>
export default {
    props: ['changeHeaderStyle'],
    methods:{
        gohome(){
            this.$router.push('/')
        }
    }
    
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    width: 100%;
    height: 1rem;
    top: 0;
    text-align: center;
    background-color: #e54847;
    &-home{
        float: left;
        font-size: 0.3rem;
        line-height: 1rem;
        margin-left: 0.1rem;
        
        
       
    }
    &-title{
        // float: right;
        font-size: 0.5rem;
        line-height: 1rem;

    }
}
</style>