<template>
    <header class="head_nav">
      <div></div>
      <ul>
        <li>我的</li>
        <li>发现</li>
        <li>朋友</li>
        <li>视频</li>
      </ul>
      <div></div>
    </header>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss">
  .head_nav{
    display: flex;
  }
</style>