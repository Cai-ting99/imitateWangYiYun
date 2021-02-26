<template>
<div class="frid">
   <div class="mask" @click="HIDE_LEFT" v-show="isLeftShow"></div>
    <div class="login_menu" v-show="isLeftShow">
        <header class="login_header">
          <!-- 未登录状态 -->
          <div class="no_login">
            <p>登陆网易云音乐</p>
            <p>手机电脑多端同步，尽享海量高品质音乐</p>
            <button class="login_immediately">立即登录</button>
          </div>
          <!-- 已登录状态 -->
        </header>
        <left-btn></left-btn>
        <left-list-one></left-list-one>
        <left-list-two></left-list-two>
        <left-bom></left-bom>
        <!-- <section class="main"></section> -->
  </div>
</div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
import LeftBtn from './leftBtn'
import LeftListOne from './leftListOne'
import LeftListTwo from './leftListTwo'
import LeftBom from './leftBom'
export default {
  name: "MyLeft",
  props: {},
  components:{
    LeftBtn,
    LeftListOne,
    LeftListTwo,
    LeftBom
  },
  data(){
    return {

    }
  },
  created(){
  },
  computed:{
    ...mapGetters({isLeftShow:'LEFT_SHOW'})
  },
  methods:{
   ...mapMutations(["HIDE_LEFT"]),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mask {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}
.login_menu {
  z-index: 999;
  width: 6rem;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  overflow-y: auto;
  .login_header {
    height: 3rem;
    background-color: rgba(204, 204, 204, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .no_login {
      font-size: 0.2rem;
      color: rgba(0, 0, 0, 0.4);
      .login_immediately {
        margin-top: 0.3rem;
        background-color: transparent;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0.1rem 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 0.5rem;
        font-size: 0.2rem;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>
