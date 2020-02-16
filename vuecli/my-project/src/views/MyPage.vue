<template>
<!-- 模板 -->
<!-- 只能有一个根元素 -->
  <div>
    <h1>我的测试页面！</h1>
    <p class="active">{{str}}</p>
  </div>
</template>
<script>
export default {
  data() {
    // 组件里地data不是对象，是方法
    // 带return
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
// html css js在一个页面
// 一般仅对此页面生效