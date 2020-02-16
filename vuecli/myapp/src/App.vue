<template>
  <div id="app">
    <div id="nav">
      <!-- 一：引入页面 -->
      <Navagation />
    </div>
    <router-view/>
  </div>
</template>
<script>
// 二：引入组件
import Navagation from '@/components/Navagation.vue'
// 三：声明一下这是我的子组件
export default{
  components:{
    Navagation
  }
}
</script>  
<style>
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
body{
  padding: 1rem 0;
}
</style>