<!--  -->
<template>
  <div>
    <div class="list-bar">
      <ul>
        <li v-for="(item,index) in talkList" :key="index">
          <div class="right clearfix">
            <div>{{item.question}}</div>
          </div>
          <div class="left clearfix">
            <div>{{item.answer}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="form-bar">
      <input v-model="inpVal" type="text" placeholder="请输入您的问题" />
      <button @click="sendMes">发送</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";
export default {
  data() {
    return {
      inpVal:"",
      talkList:[]
    };
  },
  methods: {
    //生成时间戳
    getTime_stamp() {
      let timer = new Date(); //获取时间对象
      timer = Date.parse(timer); //转化为时间戳
      timer = timer.toString().substr(0, 10);
      timer = Number.parseInt(timer); //毫秒级转化为秒级
      return timer;
    },
    //生长十六进制随机字符串
    getNonceStr() {
      let str = Math.random(); //生长随机字符串
      str = str.toString(16);
      str = str.substr(2); //截取从第二位开始到结束的字符串
      return str;
    },
    //生成签名
    getSign(obj) {
      //第一步：将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      let arr = Object.keys(obj).sort();
      // console.log(arr);
      //第二步：对排列后的对象进行url格式拼接
      let str = "";
      arr.map(function(val) {
        str += `${val}=${encodeURI(obj[val])}&`;
      });
      // console.log(str);
      //第三步：将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾
      str += "app_key=tej0QutZqfzvKuFC";
      // console.log(str);
      //第四步：对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写
      str = md5(str).toUpperCase();
      // console.log(str);
      //第五步：返回结果
      return str;
    },
    //滚动到底部
    scrollBottom() {
      let htmlDom = document.documentElement;
      let hHeight = htmlDom.clientHeight; //视口高度
      // let scrollTop = htmlDom.scrollTop; //获取去滚动多少距离
      let scrollHeight = htmlDom.scrollHeight; //可滚动区域的高度
      if (scrollHeight > hHeight) {
        htmlDom.scrollTop = scrollHeight - hHeight;
      }
    },

    //发送请求
    sendMes() {
      let thisUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      let birdUrl = "https://bird.ioliu.cn/v2?url=";
      let params = {
        app_id: 2128704046,
        time_stamp: this.getTime_stamp(), //请求时间戳
        nonce_str: this.getNonceStr(), //随机字符串
        // sign:"",
        session: "10000", //会话标识
        question: this.inpVal
      };
      let sign = this.getSign(params);
      params.sign = sign;
      //不懂

      axios.get(birdUrl + thisUrl, { params }).then(res => {
        console.log(res);
        let obj = {
          answer: res.data.data.answer,
          question:this.inpVal
        };
        this.talkList.push(obj);
        this.inpVal = "";
        this.scrollBottom();
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.list-bar .left,
.list-bar .right {
  font-size: 0.4rem;
  margin-bottom: 10px;
}
.list-bar .left div {
  float: left;
  background-color: green;
}
.list-bar .right div {
  float: right;
  background-color: pink;
}
.form-bar {
  position: fixed;
  bottom: 1rem;
  text-align: center;
  width: 100%;
  height: 1rem;
  background-color: #eee;
  line-height: 0.5rem;
}
.form-bar input {
  width: 70%;
  height: 0.5rem;
}
.form-bar button {
  background-color: green;
  padding: 8px;
}
</style>