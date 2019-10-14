<template>
  <div class="home">
    <header class="header">
      登陆头部
    </header>
    <div class="home-main">
      <div class="home-main-left">

      </div>
      <div class="home-main-right">
         <router-link to="/main">首页</router-link>
         <router-link to="/project">项目</router-link>
         <router-link to="/follower">粉丝</router-link>

         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    .header {
      width: 100%;
      height: 45px;
      border-bottom: 1px solid black;
    }
    .home-main {
      width: 100%;
      display: flex;
      .home-main-left {
        flex: 3;
        border-right: 1px solid black;
      }
      .home-main-right {
        flex:7;
      }
    }
  }
</style>
