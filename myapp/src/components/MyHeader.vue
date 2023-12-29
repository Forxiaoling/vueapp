<template>
    <div class="header">
        <div class="header-home">首页</div>
        <div class="header-title">title</div>
    </div>
</template>
<script>
export default {
    
    
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    width: 100%;
    top: 0;
    text-align: center;
    background: orange;
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