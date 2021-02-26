<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!-- <Nav></Nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
//  import Nav from '@/views/nav.vue'
export default {
  name:"App",
  components:{
    // Nav
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
    font-size: 13.33vw;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    color: #ffffff;
}

* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #999999;
}
</style>
