<template>
  <Swiper>
       <Slide>
               1
       </Slide>
       <Slide>
       		2
       </Slide>
       <Slide>
       		3
       </Slide>
  </Swiper>
</template>
<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
    components: {
        Swiper,
        Slide
    },
    created(){
        this.$emit('switchTab','book')
    }
}
</script>
<style lang="scss" scoped>
    
</style>