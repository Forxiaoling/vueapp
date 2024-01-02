<template>
    <ul class="bottom" :style="{background: footerbgColor}">
        <li @click="changebgColor(item)" class="bottom-list" v-for="(item,index) in menuList" :key="index">
            <router-link :to="item.path" >{{ item.title }}</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['menuList','footerbgColor'],
    data(){
        return{
            bgColor:'',
        }
    },
    methods:{
        changebgColor(item){
            this.bgColor = item.bgColor
            // console.log(this.bgColor)
            // this.$emit('changeHeader',item)
        }
    }
}
</script>
<style lang="scss" scoped>
.bottom{
    display: flex;
    position: fixed;
    line-height: 1rem;
    bottom: 0;
    width: 100%;
    font-size: 0.5rem;
    height: 1rem;
    background-color: #e54847;
    &-list{
        flex-grow: 1;
        text-align: center;
        a{
            text-decoration: none;
        }
        .router-link-active{

        }
    }
}
</style>