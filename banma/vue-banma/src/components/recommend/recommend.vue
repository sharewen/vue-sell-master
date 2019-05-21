<template>
    <div class="recommend" ref="recommend">
        <div class="recommend-wrapper">
            <ul>
                <li class="recommend-item">
                    <div class="header">
                        <div class="avatar">
                            <img width="30" height="30" src="./testing-user.png" />
                        </div>
                        <div class="content">
                            <span class="name">斑马小编</span>
                            <i class="sprite"></i>
                        </div>
                    </div>
                    <div class="video">
                        <video src="./test.mp4"  poster="" controls width="100%" height="150"></video>
                    </div>
                    <div class="bottom">
                        <span class="recommend-time">刚刚</span>
                        <div class="right-wrapper">
                            <i class="likeIcon"></i>
                            <span class="num">2000</span>
                            <i class="commentIcon"></i>
                            <span class="num">2000</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import setMedia from 'common/js/videoPoster'
    
    export default {
      created() {
        this._getVideoPoster()
      },
      methods: {
        _getVideoPoster() {
          // 视频：
          let videos = document.querySelectorAll('video')
          videos.forEach((video) => {
            setMedia(video)
          })
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .recommend-wrapper
        padding:0 18px
        .recommend-item
            .header
                margin:10px 0;
                line-height :30px;
                height :30px;
                .avatar
                    display :inline-block;
                    width :30px;
                    height :30px;
                    vertical-align :top;
                    img
                        border-radius:50%;
                .content
                    display :inline-block;
                    margin-left :10px;
                    .sprite
                        display: inline-block;
                        vertical-align: top;
                        background-image: url(./sprite.svg);
                        background-size: 3em auto;
                        width: 1em;
                        height: 1em;
                        background-position: -1em -1em;
                        margin-top: 5px;
            .bottom
                margin:10px 0;
                position :relative;
                .right-wrapper
                    position :absolute;
                    right:10px;
                    top:0px;

</style>
