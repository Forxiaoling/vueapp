<template>
    <div  :style="{background: 'url('+imgSrc+') no-repeat center/contain #000' }" class="img" @click="goback">
        
    </div>
</template>
<script >

export default {
    data(){
        return{
            imgSrc:''
        }
    },
    created(){
        this.imgSrc = this.$store.state.photoList[this.$route.params.index].src
    },
    methods: {
        goback(){
            this.$router.push('/photo')
        },
        onTapItem(mouseEvent) { // you can remove the `mouseEvent` argument
		console.log("Tapped!");
	},
    }
}
</script>
<style lang="scss" scoped>
.img{
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 0;
    right: 0;
}
</style>