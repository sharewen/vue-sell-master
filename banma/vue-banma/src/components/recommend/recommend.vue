<template>
    <div class="banma-main recommend" ref="recommend">
        <scroll class="main-content" ref="list"
            :data="recomData"
            :listen-scroll="listenScroll"
            :probe-type="probeType" 
            >
            <div class="main-wrapper">
                <ul>
                    <li class="partItem m-video">
                        <view-video 
                            :videoData="videoData"
                        ></view-video>
                    </li>
                    
                    <li class="partItem m-pics">
                        <view-pic
                        :picData="picData"></view-pic>
                    </li>
                    <li class="partItem m-pics">
                        <view-pic
                        :picData="picData2"></view-pic>
                    </li>
                    <li class="partItem m-hotSpot">
                        <view-hot
                        :hotData="picData"></view-hot>
                    </li>
                    <li class="partItem m-pics">
                        <view-pic
                        :picData="picData3"></view-pic>
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
        </scroll>
    </div>
</template>
<script type="text/ecmascript-6">
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import Scroll from 'base/scroll/scroll'
    import ViewVideo from 'base/view-details/view-video'
    import ViewPic from 'base/view-details/view-pic'
    import ViewHot from 'base/view-details/view-hot'
    export default {
      data() {
        return {
          recomData: [],
          videoData: { // testing data
            avatar: '/static/testing/testing-user.png',
            name: '斑马小编',
            video: '/static/testing/test.mp4',
            poster: '/static/testing/testPic.png',
            publishTime: '刚刚',
            likeSum: 2000,
            commentSum: 200
          },
          picData: { // testing data
            user: {
              avatar: '/static/testing/testing-user.png',
              name: '车友BBBB'
            },
            topic: {
              title: '#话题话题#',
              content: '今天提车感觉不错，如果让我评分，我会打100份，以下是内容，这是内容内容内容内容内容内容'
            },
            picArr: ['/static/testing/testPic.png', '/static/testing/testPic.png', '/static/testing/testPic.png', '/static/testing/testPic.png'],
            publishTime: '刚刚',
            likeSum: 2000,
            commentSum: 200
          },
          picData2: { // testing data
            user: {
              avatar: '/static/testing/testing-user.png',
              name: '车友CCC'
            },
            topic: {},
            picArr: ['/static/testing/testPic.png', '/static/testing/testPic.png', '/static/testing/testPic.png', '/static/testing/testPic.png'],
            publishTime: '刚刚',
            likeSum: 2000,
            commentSum: 200
          },
          picData3: { // testing data
            user: {},
            topic: {},
            picTitle: '用车技巧',
            picArr: ['/static/testing/testPic.png', '/static/testing/testPic.png', '/static/testing/testPic.png', '/static/testing/testPic.png'],
            publishTime: '刚刚',
            likeSum: 2000,
            commentSum: 200
          }
        }
      },
      created() {
        this.probeType = 3
        this.listenScroll = true
      },
      mounted() {
        this._picSwiper()
        this._bannerSwiper()
      },
      methods: {
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
      },
      components: {
        Scroll,
        ViewVideo,
        ViewPic,
        ViewHot
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .banner-wrapper
        width:100%;
        height:200px;
        overflow :hidden;
        .swiper-slide
            text-align :center;
            margin-top:50px;
            line-height :100px;
        
</style>
