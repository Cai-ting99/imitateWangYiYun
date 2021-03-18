<template>
    <section class="banner">
      <van-swipe :autoplay="4000" @change="onChange" :touchable="true">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </section>
</template>
<script>
export default {
    data() {
        return {
            current:0,
           
        }
    },
}
</script>

<style scoped lang="scss">
    .banner{
        width: 100%;
        height: 3rem;
        background: yellow;
    }

</style>