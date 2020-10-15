<template>
  <header class="head_nav">
    <div class="icon iconfont icon-caidan" @click="openLeft"></div>
    <ul class="nav_list">
      <router-link tag="li" replace to="/My">我的</router-link>
      <router-link tag="li" replace to="/Find">发现</router-link>
      <router-link tag="li" replace to="/Friend">朋友</router-link>
      <router-link tag="li" replace to="/Video">视频</router-link>
    </ul>
    <div class="icon iconfont icon-sousuo"></div>
  </header>
  <my-left v-if="isLeftShow"></my-left>
  <router-view></router-view>
</template>
<script>
import MyLeft from "../components/myLeft.vue";
export default {
  name: "Nav",
  components: {
    MyLeft,
  },
  data() {
      return {
          isLeftShow:false
      }
  },
  methods:{
      openLeft(){
          this.isLeftShow = !this.isLeftShow
      }
  }
};
</script>
<style>
@import "../assets/icon/iconfont.css";
.icon {
  font-size: 0.46rem;
}
.head_nav {
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
}
.nav_list {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
/* .nav_list a{
    color: #999999;
        } */
.actave {
  font-size: 0.32rem;
  color: black;
}
</style>