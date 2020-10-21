<template>
  <div class="mask"></div>
 <div class="login_menu">
   <header class="login_header">
     <!-- 未登录状态 -->
     <div class="no_login">
       <p>登陆网易云音乐</p>
       <p>手机电脑多端同步，尽享海量高品质音乐</p>
       <button class="login_immediately">立即登录</button>
     </div>
     <!-- 已登录状态 -->
   </header>
   <section class="main">
     
   </section>
 </div>
</template>

<script>
export default {
  name: "MyLeft",
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mask{
  position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
}
.login_menu{
  width: 6rem;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: #58bc58;
  .login_header{
    height: 3rem;
    background: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    .no_login{
      font-size: .2rem;
      color: rgba(0, 0, 0, 0.4);
      .login_immediately{
        margin-top: .2rem;
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
