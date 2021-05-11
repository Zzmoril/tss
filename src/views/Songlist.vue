<template>
  <div class="div1">
   <div class="div1mid">
   <div class="div1midleft">
   <img :src="songlist.coverImgUrl" width="100%" height="100%" alt="">
   </div>
   <div class="divimidright">
     <div class="right1">
     <div class="right1icon"></div>
     <div class="right1text">{{songlist.name}}</div>
     </div>
     <div class="right2">
       <div class="right2img">
         <img :src="songlist.creator.avatarUrl" width="100%" height="100%" alt="">
       </div>
       <div class="right2text">
        <span class="span1"><a href="">{{songlist.creator.nickname}}</a>
        <img width="15px" height="15px" src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340159/e2c1/6fb5/f49b/353e6d1857f7c5f46426beb533427e53.png" alt="">
        </span>
        <span class="span2">{{times2}}创建</span>
       </div>
     </div>
  <div class="right3">
    <div class="right3box1">
    <span class="span3">  播放</span>
    </div>
    <div class="right3box2"></div>
        <div class="right3box3">
           <span class="span4">(60万)</span>
        </div>
        <div class="right3box4">
           <span class="span4">(1121)</span>
        </div>
          <div class="right3box5">
           <span class="span4">下载</span>
        </div>
          <div class="right3box6">
           <span class="span4">(5032)</span>
        </div>
   </div>       
  <div class="right4">
    <div class="span5">标签：</div>
    <div v-for="item in biaot" :key="item.id" class="right4box1">
      {{item}}
    </div>
  </div>   
  <div class="right5">
    <div class="span5">介绍：</div>
    <span class="span6">{{songlist.description}}</span>
    </div>
   </div>
   </div>
    <div class="midbox">
    <div class="midbox1">
     <div class="midleft">歌曲列表</div>
      <div class="midleft1">{{songlist.shareCount}}首歌</div>
      <div class="midleft2">
        <div class="midicon"></div>
      <div class="mida"> <a href="#">生成外链播放器</a></div>
      </div>
       <div class="midleft3">
         <div class="midleft3text">播放:</div>
         <div class="midleft3cont">{{songlist.playCount}}</div>
             <div class="midleft3text">次</div>
       </div>
   </div>
    <div class="midbox2">
      <div class="midbox2left"></div>
        <div class="midbox2left1">
          歌曲标题
        </div>
          <div class="midbox2left2">时长</div>
           <div class="midbox2left2">歌手</div>
            <div class="midbox2left2">专辑</div>
    </div>

 <div class="midbox2" v-for="(item,index) in sings " :key="item.id">
      <div class="midsboxleft" :class="getClass(index)">
        <div class="midlefcon1">
        {{index+1}}
        </div>
                <div class="midlefcon2" >
        </div>
      </div>
          <router-link :to="'/songs?id='+item.id">
        <div class="midsbox2left1" :class="getClass(index)">
        
          {{item.name}}   
        </div>
        </router-link>
     
          <div class="midsbox2left2"  :class="getClass(index)">时长</div>
           <div class="midsbox2left2"  :class="getClass(index)">{{item.ar[0].name}}</div>
            <div class="midsbox2left2"  :class="getClass(index)">{{item.al.name}}</div>
    </div>
<div class="midsbox3">
  <div class="midsbox3text">
    查看更多内容，请下载客户端
  </div>
  <div class="midsbox3btton">
    立即下载
  </div>




</div>
  <div class="bottom">
    <div class="bottom1">
      <div class="bottom2">
        评论
      </div>
      <div class="bottom3">
        共{{pinglun.total}}条评论
      </div>
    </div>




    <div class="bottom4">
      <div class="bottom5">
     <div class="bottom5left">
       <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" width="100%" height="100%" alt="">
     </div>
     <div class="bottom5right">
       <textarea class="text" placeholder="评论"></textarea>
     </div>
         
      </div>
  <div class="bottomicon"></div>
    <div class="bottomicon1"></div>
    <div class="bottominum">140</div>
      <div class="bottomicon2">评论</div>
    </div>    
    <div class="bottom6">
      <div class="bottom6text">最新评论({{pinglun.total}})</div>
    </div>
    <div class="bottom7" v-for="(item,index) in pingluns" :key="item.id">
      <div class="bottom7left">
        <img :src="item.user.avatarUrl" width="100%" height="100%" alt="">
      </div>
         <div class="bottom7mid" >
           <div class="username">{{item.user.nickname}}</div>
           <div class="userm">:</div>
            <div class="usertalk">{{item.content}}</div>
               <div class="bottom7time">{{times[index]}}</div>
         </div>
         <div class="bottom7icon"></div>
          <div class="bottom7icon1">({{item.likedCount}})</div>
            <div class="bottom7icon2">|</div>
              <div class="bottom7icon3">回复</div>
    </div>

</div>
  </div>
   <div class="rightsbox">
     <div class="rightsbox1">
喜欢这个歌单的人
     </div>
     <div class="rightsbox2">
  <div class="rightsboximg" v-for="item in users" :key="item.id">
    <img :src="item.avatarUrl"  width="100%" height="100%" alt="">
  </div>
     </div>
      <div class="rightsbox3">
相关推荐
      </div>
      <div class="rightsbox4">
        <div class="rightsbox4left">
          <img src="http://p2.music.126.net/fPwDEpGiZINgB7BrE7yNkQ==/109951165136139594.jpg?param=50y50" width="100%" height="100%" alt="">
        </div>
        <div class="rightsbox4right">
     <div class="ps1">爵士摇滚 | 听一曲</div>
      <div class="ps2">byKesha_EDM</div>
        </div>    

         <div class="rightsbox4left">
           <img src="http://p2.music.126.net/vdrThZo9vigbaF0o2EDu5g==/109951165141809923.jpg?param=50y50" width="100%" height="100%" alt="">
         </div>
        <div class="rightsbox4right">
     <div class="ps1">爵士摇滚 | 听一曲</div>
      <div class="ps2">byKesha_EDM</div>
        </div>    
      </div>
       <div class="rightsbox3">
网易云音乐多端下载
      </div>
      <div class="rightsbox5">
        <div class="rightbox5icon">
          <img src="../assets/1.png"  width="100%" height="100%" alt="">
        </div>
                <div class="rightbox5icon2">
          <img src="../assets/2.png"  width="100%" height="100%" alt="">
                </div>
                <div class="rightbox5icon3">
          <img src="../assets/3.png"  width="100%" height="100%" alt="">
        </div>
             <div class="rightbox6">同步歌单，随时畅听320k好音乐</div>
      </div>
 
   </div>
     </div>
</template>

<script>

//  const ss = 1000;
//              let mi = ss * 60;
//              let hh = mi * 60;
//              let dd = hh * 24;
//              let day = ms / dd;
//              let hour = (ms - day * dd) / hh;
//              let minute = (ms - day * dd - hour * hh) / mi;
//              let second = (ms - day * dd - hour * hh - minute * mi) / ss;


import{request} from '../utils/request'

export default {
  data(){
    return{
    songlist:{
    creator:{}
    },
    biaot:{},
    sings:[],
    pinglun:[],
    pingluns:{
    },
    times:[],
    times2:0,
       users:{},
    isActive:true
    }
  },
computed:{
    id(){
     return this.$route.query.id
    },
},
  methods:{
    // time(ms){
    //          const ss = 1000;
    //          let mi = ss * 60;
    //          let hh = mi * 60;
    //          let dd = hh * 24;
    //          let day = ms / dd;
    //          let hour = (ms - day * dd) / hh;
    //          let minute = (ms - day * dd - hour * hh) / mi;
    //          let second = (ms - day * dd - hour * hh - minute * mi) / ss;
    //          this.times=day
   // 6636610578  6730942985
    // }
    getClass(index){
      if(index%2==0){
        return{
          active2:this.isActive
        }
      }
    }
  },
//6730942985
//6732237656

   created(){
    request({
      url:'/playlist/detail?id='+this.id,
    }).then(res =>{
      console.log(res)
      this.songlist=res.data.playlist
       var time=this.songlist.createTime
       var date=new Date(time)
 this.times2=(date.getFullYear() + '-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate()))
    })
    request({
      url:'/playlist/detail?id='+this.id,
    }).then(res =>{
      console.log(res)
      this.biaot=res.data.playlist.tags
    })
    request({
      url:'/playlist/detail?id='+this.id,
    }).then(res =>{
      console.log(res)
      this.sings=res.data.playlist.tracks
    })
    request({
      url:'/comment/playlist?id='+this.id,
    }).then(res =>{
      console.log(res)
        this.pinglun=res.data
    })
    request({
      url:'/comment/playlist?id='+this.id,
    }).then(res =>{
    console.log(res)
    this.pingluns=res.data.comments.slice(0,20)
     let time=[]
    for(var i=0;i<this.pingluns.length;i++){
   time[i]=this.pingluns[i].time
      // console.log(time[i])
      var curTime=new Date().getTime()
      var date=new Date(time[i])
      var diff=curTime-time[i]
      console.log(diff)
      if(diff<60000)
      {
 console.log(diff/1000)
  this.times[i]=parseInt(diff/1000)
      }
     else if(diff<3600000){
      this.times[i]=parseInt(diff/1000/60)+'分钟前'
     }
    else if(diff<86400000){

      this.times[i]=(date.getHours()<10?'0'+date.getHours():date.getHours()+':')+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
    }
  //   else if(diff<31556926000){
  // console.log((date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate()))
  //  this.times[i]=(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
  //   }
    else if(diff<31556926000){
        this.times[i]=(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+ (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
    }
    else{
       this.times[i]=(date.getFullYear() + '-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate()))
    }
    }
    })
    request({
      url:'/playlist/detail?id='+this.id,
    }).then(res =>{
      console.log(res)
      this.users=res.data.playlist.subscribers
    })
    // request({
    //   url:'/lyric?id=33894312',
    // }).then(res =>{
    //   console.log(res)
    // })
   }
}
</script>

<style lang="scss" scoped >
.div1{
  width: 800px;
  // height: 2600px;
  margin-left: 150px;
  // border: solid;
}
.div1mid{
  width: 700px;
  height: 310px;
  // border: saddlebrown solid;
  margin: 10px auto;
}
.div1midleft{
  width: 250px;
  height: 250px;
  // border: solid;
  float: left;
}
.divimidright{
  width: 420px;
  height: 300px;
  // border: solid red;
  margin-left: 20px;
  float: left;
}
.right1{
  width: 420px;
  height: 56px;
  // border: solid blue;
}
.right1icon{
  width: 60px;
  height: 26px;
  // border: solid;
  background-image: url(../assets/icon.png);
  background-position: 86px -242px;
  float: left;
}
.right1text{
  width: 300px;
  height: 26px;
  border: solid white;
  float: left;
  margin-left: 20px;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.right2{
  width: 420px;
  height: 40px;
  // border: solid blue;
}
.right2img{
  width: 40px;
  height: 40px;
  // border: solid red;
  float: left;
}
.right2text{
  width: 320px;
  height: 40px;
  // border: solid blue;
  float: left;
  margin-left: 10px;
}
.span1{
   font-size: 12px;
  a{
     color: #0c73c2;
  }:hover{
    color: #0c73c2;
  }
}
.right3{
  width: 420px;
  margin-top: 15px;
  height: 40px;
  // border: solid rgb(0, 255, 255);
}
.span2{
  color: #999;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;

}
.right3box1{
  width: 80px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/button2.png);
  background-position: -2px 3185px;
  float: left;
  cursor: pointer;

}
.span3{
  color: white;
  margin-left: 35px;
  margin-top: 5px;
  display: inline-block;
  font-size: 14px;
}
.right3box2{
  width: 30px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/button2.png);
  background-position: -2px 2402px;
  float: left;
  cursor: pointer;
}
.right3box3{
  width: 75px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/button2.png);
  background-position: -6px 3011px;
  float: left;
  margin-left: 5px;
  cursor: pointer;
}
.span4{
  font-size: 12px;
  display: inline-block;
  margin-left: 20px;
}
.right3box4{
  width: 70px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/button2.png);
  background-position: -6px 2763px;
  float: left;
  margin-left: 5px;
    cursor: pointer;
}
.right3box5{
  width: 60px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/button2.png);
  background-position: -7px 1226px;
  float: left;
  margin-left: 5px;
  cursor: pointer;
}
.right3box6{
  width: 65px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/button2.png);
  background-position: -6px 2522px;
  float: left;
  margin-left: 5px;
  cursor: pointer;
}
.right4{
  width: 420px;
  height: 30px;
  margin-top: 10px;
  // border: solid rgb(0, 255, 76);
}
.span5{
  font-size: 12px;
  margin-top: 5px;
  float: left;
}
.right4box1{
  width: 65px;
  border-radius: 10px;
  line-height: 20px;
  text-align: center;
  height: 20px;
  // border: solid;
  margin-top: 3px;
  float: left;
  font-size: 10px;
  margin-right: 10px;
  background-image: url(../assets/button2.png);
  background-position: -30px 2837px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}
.right5{
  width: 420px;
  height: 100px;
  // border: solid rgb(76, 0, 255);
}
.span6{
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.midbox{
  width: 685px;
  height: 362px;
   border: 1px solid #d9d9d9;
   border-top: 0px;
  margin: 10px auto;
}
.midbox1{
  width: 685px;
  height: 30px;
  border-bottom: 2px solid #c20c0c;
}
.midleft{
  width:80px;
  height: 30px;
  // border: solid;
  font-size: 20px;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  float: left;
}
.midleft1{
  float: left;
  width:60px;
  height: 20px;
  margin-left: 20px;
  font-size: 12px;
  // border: solid;
  margin-top: 10px;
  color: #666;
}
.midleft2{
  float: left;
  width:150px;
  height: 30px;
  // border: salmon solid;
  margin-left: 250px;
}
.midicon{
  width: 20px;
  height: 20px;
  // border: solid;
  background-image: url(../assets/icon.png);
  background-position: 55px -862px;
  float: left;
  margin-top: 5px;
}
.midleft2 a{
  font-size: 12px;
}
.mida{
  width: 100px;
  height: 20px;
  // border: solid;

  float: left;
  a{
  color: #4996d1;
  }
}
.midleft3{
  width: 120px;
  height: 30px;
  // border: solid rgb(241, 239, 239);
  float: left;
}
.midleft3text{
  width: 30px;
  height: 20px;
  // border: solid ;
  float: left;
  color: #666;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
  float: left;
}
.midleft3cont{
  width: 40px;
  height: 20px;
  margin-top: 5px;
  // border: solid red;
  float: left;
  font-size: 12px;
  color: #c20c0c;
}
.midbox2{
  width: 700px;
  height: 30px;
  // border: rgb(30, 228, 63) solid;
}
.midbox2left{
  width: 90px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/table.png);
  background-position: 100px 7px;
  float: left;
}
.midbox2left1{
  width: 270px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/table.png);
  background-position: 100px 7px;
  font-size: 12px;
  color: #666;
  line-height: 30px;
  padding-left:10px ;
  float: left;
}
.midbox2left2{
    width: 100px;
  height: 30px;
   color: #666;
     line-height: 30px;
      padding-left:5px ;
       font-size: 12px;
  // border: solid;
  background-image: url(../assets/table.png);
  background-position: 100px 7px;
  float: left;
}
.midsboxleft{
  width: 90px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/table.png);
  background-position: 100px 7px;
  float: left;
}
.midlefcon1{
  width: 20px;
  height: 20px;
  // border: solid;
  margin-left: 10px;
  font-size: 12px;
  color: #999;
  float: left;
}
.midlefcon2{
  width: 20px;
  height: 20px;
  // border: salmon solid;
  background-image: url(../assets/table.png);
  background-position: 1px -102px;
  float: left;
  margin-left: 10px;
}
.midsbox2left1{
  width: 270px;
  height: 30px;
  // border: solid;
  background-image: url(../assets/table.png);
  background-position: 100px 7px;
  font-size: 12px;
  color: #333;
  line-height: 30px;
  padding-left:10px ;
  float: left;
  overflow: hidden;
  cursor: pointer;
}
.midsbox2left1:hover{
  text-decoration: underline;
}
.midsbox2left2{
  width: 100px;
  height: 30px;
  color: #333;
  line-height: 30px;
  padding-left:5px ;
  font-size: 12px;
  // border: solid;
  background-image: url(../assets/table.png);
  background-position: 100px 7px;
  float: left;
  cursor: pointer;
    overflow: hidden;
}
.midsbox2left2:hover{
  text-decoration: underline;
}
.active2{
background-image: url(../assets/6.png);

}
.midsbox3{
  width: 300px;
  height: 100px;

  margin-left: 200px;
}
.midsbox3text{
  font-size: 14px;
  text-align: center;
  height: 300px;
  // border: solid;
  color: #333333;
  font-family: Arial, Helvetica, sans-serif;
  height: 30px;
  margin-top: 30px;
}
.midsbox3btton{
  width: 100px;
  height: 30px;
  // border: salmon solid;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  background-color: #ff5a4c;
  color: white;
  border-radius: 15px;
  margin-left: 100px;
}
.bottom{
width: 685px;
  // height: 800px;
  // border: 2px solid #cfbbbb;
}
.bottom1{
  width: 685px;
  height: 30px;
  border-bottom: 2px solid #c20c0c;
}
.bottom2{
  width: 60px;
  height: 30px;
  // border: solid;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  float: left;
}
.bottom3{
  width: 100px;
  height: 20px;
  // border: solid;
  font-size: 20px;
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  float: left;
  margin-top: 6px;
}
.bottom4{
  width: 685px;
  height: 150px;
  // border: 2px solid #37c20c;
}
.bottom5{
   width: 685px;
  height: 70px;
  // border: 2px solid #0c88c2;
  margin-top: 20px;
}
.bottom5left{
  width: 50px;
  height: 50px;
  float: left;
  // border: solid;
}
.bottom5right{
   width: 600px;
  height: 60px;
    float: left;
    margin-left: 20px;
}
.text{
     width: 600px;
  height: 60px;
}
.bottomicon{
  width: 20px;
  height: 20px;
  // border: solid;
  background-image: url(../assets/icon.png);
  background-position: -39px -488px;
  margin-left: 80px;
  float: left;
}
.bottomicon1{
    width: 20px;
  height: 20px;
  // border: solid;
  background-image: url(../assets/icon.png);
  background-position: -59px -488px;
  margin-left: 10px;
  float: left;
}
.bottominum{
  width: 30px;
  height: 10px;
  float: left;
  font-size: 12px;
  border: solid;
  color: #999;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 450px;
  margin-top: 8px;
}
.bottomicon2{
  width: 45px;
  height: 25px;
  float: left;
  border: solid;
  background-image: url(../assets/button2.png);
  background-position: -11px 2338px;
  color: white;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
}
.bottom6{
  width: 685px;
  height: 20px;
     border-bottom: 1px dotted #ccc;
}
.bottom6text{
  font-size: 13px;
  font-weight: bold;
}
.bottom7{
  width: 685px;
  height: 80px;
  // border: rgb(82, 36, 168) solid;
}
.bottom7left{
  width: 50px;
  height: 50px;
  // border: solid;
  float: left;
  margin-top: 10px;
}
.bottom7mid{
  width: 510px;
  height: 70px;
   margin-top: 10px;
  // border: solid;
  float: left;
}
.username{
  // width: 80px;
  height: 20px;
  font-size: 12px;
  color: #0c73c2;
  cursor: pointer;
   margin-left: 10px;
  float: left;
}
.username:hover{
  text-decoration: underline;
}
.userm{
    width: 10px;
  height: 20px;
  // border: solid;
    float: left;
    font-size: 12px;
    margin-left: 5px;
}
.usertalk{
  // width: 390px;
  height: 18px;
  overflow: hidden;
  // border: solid;
  font-size: 10px;
  color:#333;
  font-family: Arial, Helvetica, sans-serif;
  float: left;
}
.bottom7time{
  width: 200px;
  height: 20px;
  // border: rgb(47, 19, 139) solid;
  margin-top: 40px;
   color: #999;
  font-size: 12px;
  padding-left: 10px;
}
.bottom7icon{
  width: 20px;
  height: 20px;
  // border: solid;
  background-image: url(../assets/icon2.png);
  background-position: 152px 3px;
  margin-top: 50px;
  float: left;
  margin-left: 20px;
}
.bottom7icon1{
  width: 20px;
  height: 20px;
  // border: solid;
  float: left;
  margin-top: 53px;
  font-size: 12px;
  margin-left: 5px;
}
.bottom7icon2{
  width: 10px;
  height: 20px;
  // border: solid;
  float: left;
  margin-top: 53px;
  font-size: 12px;
  color: #ccc;
}
.bottom7icon3{
  width: 30px;
  height: 20px;
  // border: solid;
  float: left;
  margin-top: 53px;
  font-size: 12px;
  font-size: 12px;
}
.rightsbox{
  width: 220px;
  height: 550px;
  // border: solid red;
  margin-left: 800px;
  margin-top: -690px;
}
.rightsbox1{
  width: 220px;
  height: 20px;

  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
}
.rightsbox2{
   width: 220px;
  height: 100px;
  // border: solid;
}
.rightsboximg{
  width: 40px;
  height: 40px;
  // border: solid;
  margin:10px 15px 2px 0;
display: inline-block;
cursor: pointer;
}
.rightsbox3{
  width: 220px;
  height: 20px;
  margin-top: 30px;
  font-size: 13px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.rightsbox4{
   width: 220px;
  height: 160px;
   margin-top: 10px;
  //  border: solid;
}
.rightsbox4left{
  width: 50px;
  height: 50px;
  // border: solid salmon;
 display: inline-block;
 margin-top: 10px;
}
.rightsbox4right{
   width: 140px;
  height: 50px;
  // border: solid red;
  // display: inline-block;
  margin-left: 60px;
  margin-top: -56px;
   margin-bottom: 10px;

}
.ps1{
  font-size: 13px;
  // overflow: hidden;
  height: 20px;
  width:120px;
color: #000;
  // border: solid;
}
.ps2{
font-size: 12px;
    color: #666;
}
.rightsbox5{
   width: 220px;
  height: 160px;
   margin-top: 10px;
  //  border: solid;
}
.rightbox5icon{
  width: 35px;
  height: 50px;
  // border: solid;
  cursor: pointer;

}
.rightbox5icon2{
   width: 60px;
  height: 50px;
  border: solid white;
  margin-left: 70px;
  margin-top: -50px;
  cursor: pointer;
}
.rightbox5icon3{
   width: 35px;
  height: 50px;
  // border: solid;
  margin-left: 160px;
   margin-top: -50px;
  cursor: pointer;
}
.rightbox6{
  width: 180px;
  height: 30px;
  // border: saddlebrown solid;
  margin-top: 10px;
  margin-left: 10px;
  color: #999;
  font-size: 12px;
}
</style>