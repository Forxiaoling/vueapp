<template>
    <ul class="bottom">
        <li class="bottom-list" v-for="(item,index) in menuList" :key="index">
            {{ item.title }}
        </li>
    </ul>
</template>
<script>
export default {
    props: ['menuList']
}
</script>
<style lang="scss" scoped>
.bottom{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0.5rem;
    height: 1rem;
    &-list{
        flex-grow: 1;
        text-align: center;
    }
}
</style>