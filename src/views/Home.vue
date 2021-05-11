<template>
  <div class="home">
       <div class="cams1" :style="{backgroundImage:`url(${images[active].imageUrl}?imageView&blur=40x20)`}">
      <div class="wrap" @mouseenter="wara"  @mouseleave="live">
        <ul class="imgs">
      <li v-for="(item,index) in images" :key="item.id">
        <img :src="item.imageUrl"
        :style="{opacity:index===active?'1':'0',transition}"
         alt="">
      </li>
        </ul>
        <div class="next1" @click="next1"></div>
          <div class="next2" @click="next2"></div>
      </div>
   <!-- <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img :src="item.imageUrl" height="100%" width="100%" alt="">
       
      </el-carousel-item>
    </el-carousel>
      </div>  -->
  </div>
    <div class="box1">
    </div>
  <!-- </div> -->
    <div class="rightsbox"><!--右部分盒子-->
      <div class="righttopbox">
       <div class="righttopboxtext">
         登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
       </div>
       <div class="righttag">
       <el-row>
       <el-button type="danger">用户登录</el-button>
       </el-row>
       </div>
      </div>
      <div class="rightmidbox">
       <div class="rightmidtopbox">
       <span class="sp1">入驻歌手</span>
       <span class="sp2">查看全部></span>
       </div>
       <div class="rightmidbox2">
         <div class="singerbox">
         <div class="singerimg">
           <img src="http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62" width="100%" height="100%" alt="">
         </div>
           <div class="singertext">
            <div class="p2">张惠妹aMEI</div>
            <div class="p3">台湾歌手张惠妹</div>
           </div>
         </div> 


          <div class="singerbox">
              <div class="singerimg">
            <img src="http://p1.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=62y62" width="100%" height="100px" alt="">
         </div>
           <div class="singertext">
            <div class="p2">Fine乐团</div>
            <div class="p3">独立音乐人</div>
           </div>
          </div>

          <div class="singerbox">
              <div class="singerimg">
            <img src="http://p1.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=62y62" width="100%" height="100%" alt="">
         </div>
           <div class="singertext">
            <div class="p2">萬曉利</div>
            <div class="p3">民谣歌手、中国现..</div>
           </div>
          </div>


          <div class="singerbox">
              <div class="singerimg">
            <img src="http://p1.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=62y62" alt="">
         </div>
           <div class="singertext">
            <div class="p2">音乐人赵雷</div>
            <div class="p3">民谣歌手</div>
           </div>
          </div>

          <div class="singerbox">
              <div class="singerimg">
            <img src="http://p1.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=62y62" alt="">
         </div>
           <div class="singertext">
            <div class="p2">王三溥</div>
            <div class="p3">音乐人</div>
           </div>
          </div>
           <div class="els-button">申请成为网易音乐人</div> 

     </div> 
    </div>
    
     <div class="rightbottom">
        <div class="rightmidtopbox">
       <span class="sp1">热门主播</span>
        </div>
        <div class="rightmidbottom1">
          <div class="rightbox1img">
              <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" width="100%" height="100%" alt="">
          </div>
           <div class="rightbox1text">
                       <div class="p4">陈立</div>
            <div class="p5">心理学家、美食家陈立教授</div>
           </div>
        </div>
<div class="rightmidbottom1">
          <div class="rightbox1img">
              <img src="http://p2.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40" width="100%" height="100%" alt="">
          </div>
           <div class="rightbox1text">
                       <div class="p4">刘维-Julius</div>
            <div class="p5">歌手、播客节目《维维道...</div>
           </div>
        </div>
<div class="rightmidbottom1">
          <div class="rightbox1img">
              <img src="http://p2.music.126.net/S7dd9GvTPwl5IHym8qF8VA==/109951164999332400.jpg?param=40y40" width="100%" height="100%" alt="">
          </div>
           <div class="rightbox1text">
                       <div class="p4">莫非定律MoreFeel</div>
            <div class="p5">男女双人全创作独立乐团</div>
           </div>
        </div>
<div class="rightmidbottom1">
          <div class="rightbox1img">
              <img src="http://p2.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40" width="100%" height="100%" alt="">
          </div>
           <div class="rightbox1text">
                       <div class="p4">碎嘴许美达</div>
            <div class="p5">脱口秀网络红人</div>
           </div>
        </div>
<div class="rightmidbottom1">
          <div class="rightbox1img">
              <img src="http://p2.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40" width="100%" height="100%" alt="">
          </div>
           <div class="rightbox1text">
                       <div class="p4">银临Rachel</div>
            <div class="p5">古风音乐人</div>
           </div>
        </div>
     </div>
     </div>
    <div class="midbox">
      <div class="topbox">
        <div class="topbox1">
        <div class="box4">
        </div>
        <div class="box5">
          热门推荐
        </div>
        </div>
        <div class="tab">
          <a href="">华语</a><span>|</span>
          <a href="">流行</a><span>|</span>
          <a href="">摇滚</a><span>|</span>
          <a href="">民谣</a><span>|</span>
          <a href="">电子</a><span>|</span>
        </div>
        <div class="box6">
          <div class="tab1">
          <a href="">更多</a></div>
        <div class="box7"></div>
        </div>
      </div>
        <div class="box8">
         <!-- <div class="bbox" v-for="item in music" :key="item.id"> -->
            <div class="bbox" v-for="item in musics" :key="item.id">
              
           <div class="boximg">
            <router-link :to="'/songlist?id='+item.id"><img :src="item.picUrl" height="100%" width="100%" alt="">  </router-link>
             <div class="hoverbox">
               <div class="hoverbox1"></div>
              <div class="num1"> {{item.trackCount}}万</div>
              <div class="hoverbox2"></div>
             
              </div>
            
           </div>
           <div class="boxtext">
             {{item.name}}
           </div>
        </div>
        </div>
         
        <div class="midbox2">
          <div class="topbox2">
          <div class="topbox1">
          <div class="box4">
        </div>
        <div class="box5">
          新碟上架
        </div>
        </div>
        <div class="box6">
          <div class="tab1">
          <a href="">更多</a></div>
             <div class="box7">
               </div>
             </div>
       </div>
          <div class="box7midbox"><!--新喜喜喜喜喜喜asdasdasdasdasdasd-->
            <div class="icon1" :style="{pointerEvents:pointerEvents?'none':''}" @click="next3"></div>
           <div class="icon2" :style="{pointerEvents:pointerEvents?'none':''}" @click="next4"></div>
     <div class="box7picture" >
          <!-- <div v-bind:class="{box7picture:isL,box7picture2:isT,}"> -->
            <div class="xindiebox1"  v-show="isNext" :style="{left:`${nextLeft[0]}px`,transition}">
           <div class="xindiebox" v-for="item in zhuanji1" :key="item.id">
           <div class="xindieboximg1">
             <div class="xindieboximg">
               <img :src="item.blurPicUrl" width="100%" height="100%" alt="">
             </div>
           </div>
             <div class="xindieboxtext">
               <div class="p6">{{item.artist.name}}adasdas</div>
               <div class="p7">{{item.name}}</div>
             </div>
           </div>
            </div>

<div class="xindiebox2" v-show="isNext" :style="{left: `${nextLeft[1]}px`, transition }">
           <div class="xindiebox" v-for="item in zhuanji2" :key="item.id">
           <div class="xindieboximg1">
             <div class="xindieboximg">
               <img :src="item.blurPicUrl" width="100%" height="100%" alt="">
             </div>
           </div>
             <div class="xindieboxtext">
               <div class="p6">{{item.artist.name}}</div>
               <div class="p7">{{item.name}}</div>
             </div>
           </div>
          </div>
 <div class="xindiebox3" v-show="!isNext" :style="{left:`${preLeft[0]}px`,transition}">
           <div class="xindiebox" v-for="item in zhuanji1" :key="item.id">
           <div class="xindieboximg1">
             <div class="xindieboximg">
               <img :src="item.blurPicUrl" width="100%" height="100%" alt="">
             </div>
           </div>
             <div class="xindieboxtext">
               <div class="p6">{{item.artist.name}}adasdas</div>
               <div class="p7">{{item.name}}</div>
             </div>
           </div>


          </div>
     <!-- </div> -->

 <div class="xindiebox4" v-show="!isNext" :style="{left:`${preLeft[1]}px`,transition}">
           <div class="xindiebox" v-for="item in zhuanji2" :key="item.id">
           <div class="xindieboximg1">
             <div class="xindieboximg">
               <img :src="item.blurPicUrl" width="100%" height="100%" alt="">
             </div>
           </div>
             <div class="xindieboxtext">
               <div class="p6">{{item.artist.name}}</div>
               <div class="p7">{{item.name}}</div>
             </div>
           </div>
          </div>
     </div>


    </div>
        </div>
  
    <div class="midbox3">
          <div class="topbox2">
          <div class="topbox1">
          <div class="box4">
        </div>
        <div class="box5">
          榜单
        </div>
        </div>
        <div class="box6">
          <div class="tab1">
          <a href="">更多</a></div>
             <div class="box7"></div>
             </div>          
       </div>
       <div class="midsbox">
    <!-- <div class="topsbox" v-for="item in topmusics " :key="item.id">
<div class="top1box">
  <div class="top1boximg">
    <img :src="item.coverImgUrl" width="100%" height="100%" alt="">
  </div> 
  <div class="top1rightbox">
    <span><a href="#">{{item.name}}</a></span>
    <div class="top1textcont">
      <div class="top1cont1"></div>
      <div class="top1cont2"></div></div></div></div>
      <div class="bottombox">
        <ul  v-for="(item,index) in topmusics2" :key="item.id">
          <li><div class="libox">{{index+1}}</div>{{item.name}}</li>
        </ul>
      </div>
  </div>

</div>
     </div>
    </div>
        </div>  -->

     <div class="topsbox" v-for="item in topmusics" :key="item.id">
<div class="top1box">
  <div class="top1boximg">
    <img :src=" item.coverImgUrl" width="100%" height="100%" alt="">
  </div>
  <div class="top1rightbox">
    <span><a href="#">{{item.name}}</a></span>
    <div class="top1textcont">
      <div class="top1cont1"></div>
      <div class="top1cont2"></div></div></div></div>
      <div class="bottombox"> 
         <ul v-for="(item,index) in topmusics5" :key="item.id" :class="putClass(index)">
          <li><div class="libox"  :class="getClass(index)">{{index+1}}</div>{{item.name}}</li>
        </ul>
       <div class="look">
         <span>查看全部></span>
       </div>
      </div>
  </div> 

<div class="topsbox" v-for="item in topmusics2" :key="item.id">
<div class="top1box">
  <div class="top1boximg">
    <img :src=" item.coverImgUrl" width="100%" height="100%" alt="">
  </div>
  <div class="top1rightbox">
    <span><a href="#">{{ item.name}}</a></span>
    <div class="top1textcont">
      <div class="top1cont1"></div>
      <div class="top1cont2"></div></div></div></div>
      <div class="bottombox">
        <ul  v-for="(item,index) in topmusics6" :key="item.id"  :class="putClass(index)">
          <li><div class="libox"  :class="getClass(index)">{{index+1}}</div>{{item.name}}</li>
        </ul>
         <div class="look">
         <span>查看全部></span>
       </div>
      </div>
  </div> 
<div class="topsbox" v-for="item in topmusics3" :key="item.id">
<div class="top1box">
  <div class="top1boximg">
    <img :src=" item.coverImgUrl" width="100%" height="100%" alt="">
  </div>
  <div class="top1rightbox"> 
    <span><a href="#">{{item.name}}</a></span>
    <div class="top1textcont">
      <div class="top1cont1"></div>
      <div class="top1cont2"></div></div></div></div>
      <div class="bottombox">
        <ul v-for="(item,index) in topmusics7" :key="item.id" :class="putClass(index)">
          <li><div class="libox"  :class="getClass(index)">{{index+1}}</div>{{item.name}}</li>
        </ul>
         <div class="look">
         <span>查看全部></span>
       </div>
      </div>
     
  </div>
</div>
    </div>
     
    </div>
      <div class="bottombox1">
        <div class="bottomboxleft">
          <div class="bottomboxleft1">
           <ul>
             <li>服务条款 <span>|</span> </li>
             <li>隐私政策<span>|</span></li>
             <li>儿童隐私政策<span>|</span></li>
             <li> 版权投诉指引<span>|</span></li>
             <li>意见反馈<span>|</span></li>
           </ul>
          </div>
          <div class="bottomboxleft2">
          <p class="bomp1"> 
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
          </p>
          <p class="bomp1"> 
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：ncm5990@163.com</span>
          </p>
          <p class="bomp1"> 
            <span>粤B2-20090191-18  工业和信息化部备案管理系统网站</span>
            <span class="span2"></span>
            <span>浙公网安备 33010902002564号</span>
          </p>
          </div>
        </div>
          <div class="bottomboxright">
            <div class="bottomboxright1">
              <div class="bottomrightbox">
                <div class="bottomrightboximg">
                </div>
                 <div class="bottomrightboxtext">用户认证</div>
              </div>

               <div class="bottomrightbox">
                <div class="bottomrightboximg1"></div>
                 <div class="bottomrightboxtext">独立音乐人</div>
              </div>
               <div class="bottomrightbox">
                <div class="bottomrightboximg2"></div>
                 <div class="bottomrightboxtext">赞赏</div>
              </div>
               <div class="bottomrightbox">
                <div class="bottomrightboximg3"></div>
                 <div class="bottomrightboxtext">视频奖励</div>
              </div>
               <div class="bottomrightbox">
                <div class="bottomrightboximg4"></div>
                 <div class="bottomrightboxtext">Amped Studio</div>
                 <!-- <a href="about.vue">关于</a> -->
              </div>
            </div>
       
          </div>
      </div>
      </div>
    <!-- </div> -->
    
        <!-- </div> -->   
  <!-- </div> -->
  
</template>

<script>
 var box=document.getElementsByClassName('box7picture')
// @ is an alias to /src
import{request} from '../utils/request'
import Down from './Down.vue'
export default {
  components: { Down },
  // name: 'Home',
data() {
      return {
        value1: true,
        value2: true,
        images:[],
        musics:[],
        topmusics:[],
        topmusics2:[],
        topmusics3:[],
        topmusics4:[],
        topmusics5:[],    
        topmusics6:[],   
        topmusics7:[],
        zhuanji1:[],
        zhuanji2:[],
        callleft:0,  
        callleft2:800,
        callleft3:0,
        isActive:true,
        active:0,
        timer:null,
        pointerEvents:false,
        preLeft:[0,-800],
        nextLeft:[0,800],
        transition:'2s',
        isNext:true
        // ulrs:require(' ?imageView&blur=40x20')
    }
},
methods:{
  ups(){
  console.log('bbb')
   if(this.callleft==0){
     this.callleft=-750
     }
      else if(this.callleft==750){
       this.callleft3=0
      }
  },
  next4(){
    this.isNext=true
    this.pointerEvents=true
    this.transition='2s'
    this.nextmove()
    this.premove()
  },
  next3(){
        this.isNext=false
 this.pointerEvents=true
    this.transition='2s'
        this.nextmove()
    this.premove()
    
  },
  nextmove(){
    setTimeout(()=>{
this.$set(this.nextLeft,0,this.nextLeft[0]-800)
    this.$set(this.nextLeft,1,this.nextLeft[1]-800)
    })
  setTimeout(()=>{
    this.transition='0s'
    if(this.nextLeft[0]===-800){
   this.$set(this.nextLeft,0,800)
    }
    if(this.nextLeft[1]===-800){
   this.$set(this.nextLeft,1,800)
  
    }
   this.pointerEvents=false
  },2000)
  },
  premove(){
setTimeout(()=>{
this.$set(this.preLeft,0,this.preLeft[0]+800)
    this.$set(this.preLeft,1,this.preLeft[1]+800)
    })
  
  console.log(this.preLeft)
  setTimeout(()=>{
    this.transition='0s'
    if(this.preLeft[0]===800){
   this.$set(this.preLeft,0,-800)
    }
    if(this.preLeft[1]===800){
   this.$set(this.preLeft,1,-800)
  
    }
   this.pointerEvents=false
  },2000)
  },
next1(){
  console.log('点击')
  this.transition='0s'
  this.change()
},
change(){
 this.active++
  if(this.active==this.images.length){
    this.active=0
  }
},
change1(){
 this.active--
  if(this.active<0){
  this.active=this.images.length-1
   console.log(this.active)
  }
},
next2(){
  console.log('点击')
  this.active--
  this.transition='0s'
  this.change1()
},
wara(){
clearInterval(this.timer)
},
live(){
   this.timer= setInterval(()=>
    {
       this.transition='2s'
       this.change()
    },3000)
},
  getClass:function(index){
    if(index<3){
    return{
active:this.isActive
    }
    }
  },
    putClass:function(index){
    if(index%2==0){
    return{
active2:this.isActive
    }
    }
    else {
return{
active3:this.isActive
    }
    }
  },
  
},
 created(){
  request({
      url:'/banner',
  }).then(res =>{
    this.images=res.data.banners
   this.timer= setInterval(()=>
    {
      this.transition='2s'
      this.change()
    },3000)
    })
  
      request({
      url:'/personalized?limit=8',
    }).then(res =>{
      this.musics=res.data.result
      console.log(res)
    })
      request({
      url:'/toplist/detai',
    }).then(res =>{
      console.log(res)
      this.topmusics=res.data.list.slice(0,1)
    })
      request({
      url:'/toplist/detai',
    }).then(res =>{
      console.log(res)
      this.topmusics2=res.data.list.slice(1,2)
    })     
     request({
      url:'/toplist/detai',
    }).then(res =>{
      console.log(res)
      this.topmusics3=res.data.list.slice(2,3)
    })
     request({
      url:'/playlist/detail?id=19723756',
    }).then(res =>{
      console.log(res)
       this.topmusics5=res.data.playlist.tracks.slice(0,10)
    })
     request({
      url:'/playlist/detail?id=3779629',
    }).then(res =>{
      console.log(res)
       this.topmusics6=res.data.playlist.tracks.slice(0,10)
    })
    request({
      url:'/playlist/detail?id=2884035',
    }).then(res =>{
      console.log(res)
       this.topmusics7=res.data.playlist.tracks.slice(0,10)
    })
    request({
      url:'/top/album?area&limit=10',
    }).then(res =>{
      console.log(res)
      this.zhuanji1=res.data.monthData.slice(0,4)
      console.log(this.zhuanji1)
    })
    request({
      url:'/top/album?area&limit=10',
    }).then(res =>{
      console.log(res)
      this.zhuanji2=res.data.monthData.slice(4,8)
      console.log(this.zhuanji2)
    })
    request({
      url:'/playlist/detail?id=6732237656',
    }).then(res =>{
      console.log(res)
    })
 }

}

</script>
<style  lang="scss" scoped>
.wrap{
  width: 690px;
  height: 280px;
  margin-left: 180px;
  // border: solid;
  position: relative;  
}
.next1{
  width: 36px;
  height: 65px;
  background-image: url(../assets/banner.png);
  background-position: 78px 151px;
  position: absolute;
   right:-320px;
   top: 50%;
   transform: translateY(-50%);

   cursor: pointer;
}
.next1:hover{
   background-position: 78px 82px;
}
.next2{
    width: 36px;
  height: 65px;
  background-image: url(../assets/banner.png);
  background-position: 78px 299px;
  cursor: pointer;
  position: absolute;
  left:-60px;
  top: 50%;
  transform: translateY(-50%);
}
.next2:hover{
    background-position: 78px 229px;
}
/deep/.block {

margin: 0 280px 0 150px;
}
.imgs{
  // background-color: rgb(223,22,30);
  height: 100%;
  width: 100%;
  padding-left: 0px;
  margin: 0;
  list-style: none;
  position: relative;    

}
.imgs li{
  position: absolute;
  top: 0;
  left: 0;  

}
.imgs li img{
transition: 3s;
width: 100%;
height: 280px
}

.cams1{
  // background-image: url("http://p1.music.126.net/kvA1Mwoj3QIKrGAyA8wOew==/109951165914952418.jpg?imageView&blur=40x20");
  // width: 100%;
  // border: saddlebrown solid;
  height: 280px;
  // border: solid red;
}
.box1{
  width: 250px;
  height: 278px;
  position: absolute;
  // background-size: 200px 490px;
  z-index: 20;
  top: 118px;
  border-radius: 0;
  left: 880px;
  background-image: url(../assets/download.png);
  background-repeat: no-repeat;
}

.midbox{
  width: 820px;
  height:1800px;
  // border: red solid;
  margin-left:150px
}
.topbox{
  width: 820px;
  height: 50px;
  border-bottom:2px solid rgb(193,13,12);
}
.topbox2{
  width: 820px;
  height: 50px;
  border-bottom:2px solid rgb(193,13,12);
}
.box4{
  width: 30px;
  height: 30px;
  // border: saddlebrown solid;
  background-image: url(../assets/index.png);
  background-position: 182px -160px;
  margin-left: 20px;
  float: left;
}
.box5{
   float: left;
   font-size: 20px;
}
.tab{
  // border: saddlebrown  solid;
  width: 500px;
  margin-left: 150px;
  margin-top: -30px;
}
.tab a{
  text-decoration: none;
  color:black;
  margin:0 15px;
  font-size: 15px;

}
.tab a span{
  color:#ccc;
}
.box6{
  width:60px;
  height: 20px;
  // border:saddlebrown solid;
  float: left;
  margin-left: 750px;
  font-size: 10px;
  margin-top: -10px;
}
.box7{
  width: 20px;
  height: 20px;
  // border: saddlebrown solid;
  background-image: url(../assets/index.png);
  background-position: 3px -240px;
  float: left;
}
.tab1{
  float: left;
  cursor: pointer;
}
.tab1 a{
  text-decoration: none;
  color:black;
}
a:hover{
   text-decoration:underline;
}
.topbox1{
  // border: solid;
  height: 30px;
  width: 140px;
  margin-top: 20px;
}


.box8{
  height: 450px;
  width: 820px;
  // border: salmon solid;
  margin-top: 20px;
}
.bbox{
  width: 140px;
  height: 180px;
  float: left;
  margin:0 25px 30px 35px;
  cursor: pointer;
  position: relative;
  // margin-bottom: 30px;
}
.boximg{
  width: 140px;
  height: 120px;
}
.boxtext{
  height: 60px;
  width: 140px;
  font-size: 15px;
}
.boxtext:hover{
  text-decoration:underline;
}
.hoverbox{
  position: absolute;
  top:90px;
  width: 140px;
  height: 30px;
  background-color: black;
  color: white;
  font-size: 10px;
  opacity: 0.6;
}
.hoverbox1{
  width: 20px;
  height: 20px;

  background-image: url(../assets/iconall.png);
  background-position: 2px -19px;
  float: left;
  margin-top: 8px;
  margin-left: 10px;
}
.num1{
  width: 40px;
  height: 20px;
  float: left;
  margin-top: 10px;
}
.hoverbox2{
  width: 20px;
  height: 20px;
  background-image: url(../assets/iconall.png);
  background-position: -246px -60px;
  float: left;
  margin-top: 10px;
  margin-left: 40px;
}
.midbox2{
  height: 400px;
  // border: solid;
}
.midbox3{
  height: 650px;
  // border: solid;
}
.midsbox{
    width: 750px;
    height: 550px;
    // border: solid;
    margin:15px 30px 30px 35px;
}
.topsbox{
  height: 500px;
  width: 240px;
  // border: solid rgb(192, 226, 43);
  float: left;
}
.top1box{
  width: 280px;
  // border: saddlebrown solid;
  border:1px solid rgb(220,220,220);
  height: 120px;
  background-color: rgb(244,244,244);
  cursor: pointer;
 
}
.top1boximg{
  width: 80px;
  height: 80px;
  // border: saddlebrown solid;
  margin:10px 10px;
  float: left;
}
.top1rightbox{
  width: 100px;
  height: 100px;
  // border: solid;
  float: left;
  margin-top: 10px;
}
.top1rightbox a{
 text-decoration: none;
 font-weight: bold;
 color: black;
}
.top1textcont{
 width: 100px;
 height: 30px;
//  border: saddlebrown solid;
 margin-top: 10px;
}
.top1cont1{
  width: 30px;
  height: 30px;
  // border: saddlebrown solid;
  background-image: url(../assets/index.png);
  background-position: 148px -203px;
  float: left;
}
.top1cont2{
  width: 30px;
  height: 30px;
  // border: saddlebrown solid;
  background-image: url(../assets/index.png);
  background-position: 117px -203px;
  float: left;

}
.bottombox{
  width: 280px;
  height: 280px;
  border:1px solid rgb(220,220,220);
  font-size: 14px;
}
.bottombox ul{
  list-style: none;
  padding: 0px;
  cursor: pointer;
  li{
    height: 50px;
    padding-left: 20px;
    margin-top: -18px;
    padding-top: 10px;
  
  }
  li:hover{
      text-decoration: underline;
  }
}
.libox{
  width: 20px;
  // border: solid;
  margin-right: 10px;;
  float: left;
}
.active{
  color: rgb(193,13,12);
  
}
.active2{
background-color:rgb(232,232,232);

}
.active3{
  background-color:rgb(244,244,244);

}
.look{
  width:280px;
  height: 50px;
  // border: saddlebrown solid;
  margin-top: -18px;
  background-color:rgb(232,232,232)
}
.look span{
  font-size: 13px;
  margin-left: 150px;
  line-height: 50px;
}
.rightsbox{
  width: 240px;
  height: 1200px;
  // border: solid blueviolet;
  float: right;
}
.righttopbox{
  width: 240px;
  height: 150px;
  // border: solid red;
  background-image:url(../assets/index.png);
  background-position: -9px 179px;
}
.righttopboxtext{
  width: 200px;
  height: 50px;
  font-size: 12px;
  line-height: 20px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
}
.righttag{
  margin-left: 60px;
}
/deep/.el-button--danger{
  background-color: rgb(223,22,30);
  width:120px;
  height: 40px;
}
/deep/.el-button:hover{
background-color: rgb(230,37,44);
}
.rightmidbox{
  width: 240px;
  height: 520px;
  // border: solid rgb(126, 153, 51);
}
.rightmidtopbox{
  width: 200px;
  height: 30px;
  border-bottom: solid #ccc;
  margin:0px auto
}
.sp1{
  font-weight: bold;
  margin-top: 10px;
  font-size: 12px;
}
.sp2{
  margin-top: 10px;
  font-size: 12px;
  font-size: 12px;
  margin-left: 80px;
  color: #666;
}
.rightmidbox2{
  width: 200px;
  height: 470px;
  // border-top: solid #ccc;
  margin:0px auto
}
.singerbox{
  width: 200px;
  height: 60px;
  // border: solid;
  margin-top: 20px;
  background: #fafafa;
}
.singerimg{
  width:60px;
  height: 60px;
  // border: salmon solid;
  float: left;
}
.singertext{
  width: 120px;
  height: 60px;
  // border: saddlebrown solid;
  float: left;
  margin-left: 10px;
}
.p2{
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
}
.p3{
  font-size: 14px;
  margin-top: 5px;
  color: #666;
}
.p4{
  margin-top: 5px;
  font-size: 12px;
}
.p5{
  font-size: 12px;
  margin-top: 1px;
  color: #666;
}
.els-button{
 margin-top: 10px;
 width: 200px;
 height: 30px;
 line-height: 30px;
 font-weight: bold;
 font-size: 13px;
 text-align: center;
 border-radius: 1px;
 color: #333;
  background-image:url(../assets/button2.png);
  background-position: 212px 712px;

}
.rightbottom{
   width: 200px;
  height: 300px;
  // border: solid rgb(175, 98, 10);
  margin:0px auto
}
.rightmidbottom1{
  width: 200px;
  height: 40px;
  // border: solid saddlebrown;
  margin-top: 10px;
}
.rightbox1img{
  width:40px;
  height: 40px;
  float: left;
}
.rightbox1text{
  width: 145px;
  height: 40px;
  float: left;
  margin-left: 5px;
}
.box7midbox{
  width: 760px;
  height: 250px;
  border: solid red;
  margin:20px auto;
  background: #f5f5f5;
  border: 1px solid #fff;
  overflow: hidden;
  //  transition: 2s;
  position: relative;
}

.xindiebox{
  width: 120px;
  height: 170px;
  // border: solid;
  float: left;
  margin-right: 65px;
  // transition: 2s;
}
// .xindiebox1{
//   width: 120px;
//   height: 170px;
//   border: solid;
//   float: left;
//   margin-right: 65px;
//   transition: 2s;
// }
.xindiebox1,.xindiebox3{
  width:760px;
  height: 170px;
  // border: solid blue;
  // left: 0;
  position: absolute;
  // float: left;
  // margin-right: 65px;
  // transition: 2s;
}
.xindiebox2,.xindiebox4{
  width:760px;
  height: 170px;
  // border: solid blue;
  // left: 800px;
  position: absolute;
  // float: left;
  // margin-right: 65px;
  // transition: 2s;
}
.xindieboximg{
  width: 120px;
  height: 120px;
  // border: solid salmon;
}
.xindieboximg1{
  width: 140px;
  height:120px;
  // border: rgb(29, 139, 19) solid;
  background-image: url(../assets/coverall_8.png);
  background-position: 20px -567px;
  cursor: pointer;
}
.xindieboxtext{
  width: 120px;
  height: 50px;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
}
.icon1{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 100px;
  background-image: url(../assets/index.png);
  background-position: 134px -73px;
   z-index: 99;
   cursor: pointer;
}
.icon2{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 100px;
  left: 730px;
  background-image: url(../assets/index.png);
  background-position:  93px -73px;
  z-index: 99;
  cursor: pointer;
}
.box7picture{
  // width: 1950px;
  width: 700px;
  height: 200px;
  // border: solid red;
  margin:30px 30px;
  position:absolute;
  transition: 2s;
  // border: solid red;

}
.p6{
  // border: solid red;
  height: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}
.p7{
  // border: solid;
  height: 15px;
  font-size: 10px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  color: #666
}
.bottombox1{
  width: 100%;
  height: 200px;
  background: #f2f2f2;

}
.bottomboxleft{
  width: 550px;
  height: 200px;
  margin-left: 150px;
  float: left;
}
.bottomboxright{
  width: 530px;
  height: 200px;
  // border: solid;
  float: left;
}
.bottomboxleft1{
  width: 450px;
  height: 30px;
  margin-top: 10px;
  margin-left: -40px;
  font-size: 10px;
}
 .bottomboxleft1 ul{
    list-style: none;
        color: #999;
  // padding: 0px;
  cursor: pointer;
    span{
      margin:0 5px
    }

  li{
    // height: 10px;
    // width: 50px;
    // margin-right: 10px;
    // margin-top: -18px;
      float: left;
      margin-right: 10px;
   
      }
        :hover{
        text-decoration: underline;
 }
 }
 .bottomboxleft2{
  width: 530px;
  height: 150px;
 }
 .bomp1{
   font-size: 10px;
   span{
     margin-right: 10px;
   }
 }
 .span2{
   width: 20px;
   height: 20px;
   display:inline-block;
   background-image: url(../assets/police.png);
   background-repeat: no-repeat;
 }
 .bottomboxright1{
   width: 530px;
   height: 100px;
   margin: 50px auto;
 }
 .bottomrightbox{
   width: 100px;
   height: 100px;
   float: left;
 }
 .bottomrightboximg{
   width: 100px;
   height: 50px;
   background: url(../assets/foot_enter_new.png);
   background-position: -57px -454px;
    background-size: 129px 552px;
   background-repeat: no-repeat;
     cursor: pointer;
 }
 .bottomrightboximg1{
   width: 100px;
   height: 50px;
   background: url(../assets/foot_enter_new.png);
   background-position: -57px -98px;
    background-size: 129px 552px;
   background-repeat: no-repeat;
     cursor: pointer;
 }
 .bottomrightboximg2{
   width: 100px;
   height: 50px;
   background: url(../assets/foot_enter_new.png);
   background-position: 27px 3px;
    background-size: 125px 565px;
   background-repeat: no-repeat;
     cursor: pointer;
 }
  .bottomrightboximg3{
   width: 100px;
   height: 50px;
  cursor: pointer;
   background: url(../assets/foot_enter_new.png);
   background-position: -57px -48px;
    background-size: 125px 565px;
   background-repeat: no-repeat;
 }
  .bottomrightboximg4{
   width: 100px;
   height: 50px;
   background: url(../assets/foot_enter_new.png);
   background-position: 29px -99px;
   background-size:125px 565px;
   background-repeat: no-repeat;
     cursor: pointer;
 }
 .bottomrightboxtext{
  width: 100px;
  height: 30px;
  font-size: 12px;
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

 }
</style>
