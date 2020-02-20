<!--  -->
<template>
<div v-loading="loading">
<div class="slider-bar">
<el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in sliderList" :key="item.id">
      <img  class="slider-img" :src="'https://images.weserv.nl/?url='+item.cover.url" alt="" >
    </el-carousel-item>
  </el-carousel>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
data() {
return {
    sliderList:[],
    bookList:[],
    loading:true
};
},

methods:{
    getData(){
        let birdUrl = "https://bird.ioliu.cn/v2?url=";
        let requestUrl = "https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=10"
        axios.get(birdUrl+requestUrl).then((res)=>{
            console.log(res);
            this.sliderList = res.data.subject_collection_items.slice(0,5);
            this.bookList = res.data.subject_collection_items;
        })
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.getData();
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
  .slider-img{
      width: 100%;
  }
</style>