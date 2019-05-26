<template>
  <div class="video">
    <div class="user-header-row">
        <div class="avatar">
            <img width="30" height="30" :src="videoData.avatar" />
        </div>
        <div class="content">
            <span class="name" v-html="videoData.name"></span>
            <i class="sprite"></i>
        </div>
    </div>
    <div class="video">
        <video 
        :src="videoData.video"  
        :poster="videoData.poster" 
        controls
        width="100%" 
        height="150px"
        style="object-fit: fill"
        ></video>
    </div>
    <div class="hour-like-comment">
        <span class="time">{{ videoData.publishTime }}</span>
        <div class="right-wrapper">
            <i class="likeIcon"></i>
            <span class="num">{{ videoData.likeSum }}</span>
            <i class="commentIcon"></i>
            <span class="num">{{ videoData.commentSum }}</span>
        </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
 export default {
   props: {
     videoData: {
       type: Object
     }
   },
   data() {
     return {
       poster: ''
 
     }
   },
   computed: {
     spriteBg() {
       return `background-image:url(${this.videoData.avatar})`
     }
   },
   mounted() {
     this._getVideoPoster()
   },
   methods: {
     _getVideoPoster() {
 
     }
   },
   components: {
   }
 }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  
  .sprite
    display: inline-block;
    vertical-align: top;
    background-image: url(./sprite.svg);
    background-size: 3em auto;
    width: 1em;
    height: 1em;
    background-position: -1em -1em;
    margin-top: 7px;
    
                    

    
</style>
