<template>
    <div class="recommend" ref="recommend">
        <div class="recommend-wrapper">
            <ul>
                <li class="recommend-item m-video">
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
                <li class="recommend-item m-pics">
                    <div class="header">
                        <div class="avatar">
                            <img width="30" height="30" src="./testing-user.png" />
                        </div>
                        <div class="content">
                            <span class="name">车友BBB</span>
                        </div>
                    </div>
                    <div class="picture">
                        <div class="topic">
                            <a class="A_link">#话题话题#</a>
                            <span class="wds">今天提车感觉不错，如果让我评分，我会打100份，以下是内容，这是内容内容内容内容内容内容</span>
                        </div>
                        <div class="swiper-container">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom">
                        <span class="recommend-time">3小时前</span>
                        <div class="right-wrapper">
                            <i class="likeIcon"></i>
                            <span class="num">2000</span>
                            <i class="commentIcon"></i>
                            <span class="num">2000</span>
                        </div>
                    </div>
                </li>
                <li class="recommend-item m-hotSpot">
                    <div class="header">当前热点</div>
                    <ul class="hot-wrapper">
                        <li class="hotItem"><div class="hot"><span class="wds">#爆胎后怎么玩</span><i class="sprite"></i></div></li>
                        <li class="hotItem"><div class="hot"><span class="wds">#油耗怎么降低</span><i class="sprite"></i></div></li>
                        <li class="hotItem"><div class="hot"><span class="wds">#车机小窍门</span><i class="sprite"></i></div></li>
                        <li class="hotItem"><div class="hot"><span class="wds">#斑马月活动</span><i class="sprite"></i></div></li>
                        <li class="hotItem"><div class="hot"><span class="wds">#4S电活动</span><i class="sprite"></i></div></li>
                        <li class="hotItem"><a class="A_link">更多</a></li>
                    </ul>
                </li>
                <li class="recommend-item m-pics">
                    <div class="header">
                        <div class="avatar">
                            <img width="30" height="30" src="./testing-user.png" />
                        </div>
                        <div class="content">
                            <span class="name">车友CCC</span>
                        </div>
                    </div>
                    <div class="picture">
                        <div class="swiper-container">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom">
                        <span class="recommend-time">3小时前</span>
                        <div class="right-wrapper">
                            <i class="likeIcon"></i>
                            <span class="num">2000</span>
                            <i class="commentIcon"></i>
                            <span class="num">2000</span>
                        </div>
                    </div>
                </li>
                <li class="recommend-item m-pics">
                    <div class="picture">
                        <div class="topic">
                            <span class="wds">用车技巧</span>
                        </div>
                        <div class="swiper-container">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                                <li class="swiper-slide"><img src="./testPic.png"/></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="banner-wrapper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="background:red;">Slide 1</div>
                        <div class="swiper-slide" style="background:green;">Slide 2</div>
                        <div class="swiper-slide" style="background:orange;">Slide 3</div>
                        <div class="swiper-slide" style="background:purple;">Slide 4</div>
                        <div class="swiper-slide" style="background:blue;">Slide 5</div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import setMedia from 'common/js/videoPoster'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
      mounted() {
        // this._getVideoPoster()
        this._picSwiper()
        this._bannerSwiper()
      },
      methods: {
        _getVideoPoster() {
          // 视频：
          let videos = document.querySelectorAll('video')
          videos.forEach((video) => {
            setMedia(video)
          })
        },
        _picSwiper() {
          // eslint-disable-next-line no-new
          new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 10
          })
        },
        _bannerSwiper() {
        // eslint-disable-next-line no-new
          new Swiper('.banner-wrapper', {
            loop: true
          })
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    .recommend-wrapper
        padding:0 18px
        .recommend-item
            .A_link
                color :$color-text-link;
            .sprite
                display: inline-block;
                vertical-align: top;
                background-image: url(./sprite.svg);
                background-size: 3em auto;
                width: 1em;
                height: 1em;
                background-position: -1em -1em;
                margin-top: 5px;
            padding-bottom:5px;
            border-1px(#ccc)
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
                    
            .bottom
                margin:10px 0;
                position :relative;
                .right-wrapper
                    position :absolute;
                    right:10px;
                    top:0px;
            
            .picture
                .topic
                    line-height :20px;
                    margin :10px 0;
                    
                .swiper-container
                    width:100%;
                    height:80px;
                    .swiper-slide
                        img
                            width:100%;
                            height 100%;
            .hot-wrapper
                display :flex;
                width:100%;
                flex-wrap:wrap;
                align-content: flex-start;
                .hotItem
                    flex:0 0 33.333333%;
                    height :30px;
                    line-height :30px;
                    overflow :hidden;
                    .hot
                        display :flex;
                        .wds
                            flex:0 0 1;
                            no-wrap();
                        .sprite
                            flex:0 0 16px;
    .banner-wrapper
        width:100%;
        height:200px;
        overflow :hidden;
        .swiper-slide
            text-align :center;
            margin-top:50px;
            line-height :100px;
</style>        