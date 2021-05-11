<template>
  <div id="app">
    <div id="nav">
    <div class="wying">
    </div>
    <div class="leftbox">
      <router-link to="/">发现音乐</router-link>
      <router-link to="/about">我的音乐</router-link>
       <router-link to="/friends">朋友</router-link>
        <router-link to="/shopp">商城</router-link>
       <router-link to="/musicmen">音乐人</router-link>
        <router-link to="/down">下载客户端</router-link>
        <div class="img1"></div>
        <!-- <div class="input1"> -->
          <div class="demo-input-suffix">
        <el-input 
       size="small"
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
        </div>
        <div class="box1">
          创作者中心
        </div>
        <div class="box2">登录</div>
            
    </div>  

    </div>
 <div class="nav2">
   <div class="nav3">
   <span>推荐</span><span>排行榜</span><span>歌单</span><span>主播电台</span><span>歌手</span><span>新碟上架</span>
 </div>
 </div>
    <router-view/>
  </div>
</template>
<script>

export default {

  data(){
    return{
      input2:'',
    }
  }
}
</script>


<style lang="scss"  >
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  background-color: rgb(36,36,36);
  height: 80px;
}

#nav {
  
  padding: 30px;
}

#nav a {
  
  color: rgb(253, 253, 253);
  height: 30px;
  display: inline-block;
  text-decoration: none;
  margin-left:30px ;
}
#nav a:hover{
  background-color:rgb(0,0,0);
  color: white;
}
// #nav a.router-link-exact-active:hover {
//   color: #4442b9;
// }
.leftbox{
  // border: salmon solid;
  width: 880px;
  margin-left: 200px;

}
.wying{
  background: url(./assets/topbar.png);
  margin-top: -5px;
  width: 200px;
  // border:saddlebrown solid;
  height:60px;
  position:absolute;
  background-position:10px -18px;
  background-repeat: no-repeat;
}
.img1{
  background: url(./assets/topbar.png);
  width: 35px;
  //  border:saddlebrown solid;
  height:20px;
  position:absolute;
  left: 755px;
  top:30px;
  background-position:-189px 4px;
  background-repeat: no-repeat;
}
.demo-input-suffix{
  width: 150px;
  position: absolute;
  left: 850px;
  top:40px;
}

.demo-input-suffix input{
  border-radius: 25px;
 
}
// .input2{
//   border-radius: 20px;
// }
.box1{
  width: 100px;
  height: 30px;
  color:  rgb(253, 253, 253);
  position: absolute;
  left: 1020px;
  top:40px;
  border-radius: 20px;
  text-align: center;
  border: rgb(102, 101, 101) 1px solid;
  font-size: 12px;
  line-height: 30px;
  cursor: pointer;
}
.box2{
  width: 50px;
  color: rgb(117, 116, 116);
  position: absolute;
  left: 1150px;
  top:45px;
  // border: saddlebrown solid;
  cursor: pointer;
  font-size: 10px;
}
.box1:hover{
 border: rgb(201, 199, 199) 1px solid;
}
.nav2{
  width: 100%;
  margin-top: -20px;
  height: 40px;
  background-color: rgb(194,12,12);
}
.nav3{
  margin-left: 300px;
  line-height: 40px;
}
.nav2 span{
margin-right: 50px;
color: white;
font-size: 11px;
}

</style>
