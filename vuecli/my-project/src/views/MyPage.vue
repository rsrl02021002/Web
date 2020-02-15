<template>
  <div>
    <h1>我的测试页面！</h1>
    <p class="active">{{str}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str:"fello37"
    }
  },
  methods: {
    
  },
}
</script>
<style scoped>
.active{
  color:red
}
</style>