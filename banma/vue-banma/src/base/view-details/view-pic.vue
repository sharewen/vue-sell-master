<template>
    <div class="txtPic">
        <div class="user-header-row" v-if="Object.keys(picData.user).length > 0">
            <div class="avatar">
                <img width="30" height="30" :src="picData.user.avatar" />
            </div>
            <div class="content">
                <span class="name">{{picData.user.name}}</span>
            </div>
        </div>
        <div v-if="typeof picData.picTitle !== 'undefined' " class="picTitle">{{picData.picTitle}}</div>
        <div class="picture-wrapper">
            <div class="topic" v-if="Object.keys(picData.topic).length > 0">
                <a  class="A_link">{{picData.topic.title}}</a>
                <span class="wds">{{picData.topic.content}}</span>
            </div>
            <div class="swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="(picItem,index) in picData.picArr" :key="index">
                        <img :src="picItem"/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hour-like-comment">
            <span class="time">{{picData.publishTime}}</span>
            <div class="right-wrapper">
                <i class="likeIcon"></i>
                <span class="num">{{picData.likeSum}}</span>
                <i class="commentIcon"></i>
                <span class="num">{{picData.commentSum}}</span>
            </div>
        </div>
    </div>
    
</template>
<script type="text/ecmascript-6">
 export default {
   props: {
     picData: {
       type: Object
     }
   }
 }
 </script>
 <style scoped lang="stylus" rel="stylesheet/stylus">
 .txtPic
     .picTitle
        line-height: 20px;
        margin: 10px 0;

 
  </style>
