<template>
  <div class="follower">
    <h1>follower</h1>
    <router-link to="/follower/attentionYou">关注你</router-link>
    <router-link to="/follower/attentionMe">我关注的</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'follower'
    }
  },
  created() {
    
  },
}
</script>
