<template>
    <div class="banma-main carFriends" ref="carFriends">
        <scroll class="main-content" ref="list"
            :data="carData"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            >
            <div class="main-wrapper">
            <ul>
                <li class="partItem">
                    <div class="user-header-row">
                        <div class="avatar">
                            <img width="30" height="30" :src="picData.user.avatar" />
                        </div>
                        <div class="content">
                            <p class="name">{{picData.user.name}}</p>
                            <p class="time">{{picData.publishTime}}</p>
                        </div>
                    </div>
                    <div class="picture-wrapper">
                        <div class="topic">
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
                    <div class="forward-like-comment">
                        <div class="forward">
                            <i class="forwardIcon"></i>
                            <span>2000</span>
                        </div>
                        <div class="like">
                            <i class="likeIcon"></i>
                            <span>2000</span>
                        </div>
                        <div class="comment">
                            <i class="commentIcon"></i>
                            <span>2000</span>
                        </div>
                    </div>
                </li>
                <li class="partItem">
                    <div class="user-header-row">
                        <div class="avatar">
                            <img width="30" height="30" :src="picData.user.avatar" />
                        </div>
                        <div class="content">
                            <p class="name">{{picData.user.name}}</p>
                            <p class="time">{{picData.publishTime}}</p>
                        </div>
                    </div>
                    <div class="picture-wrapper">
                        <div class="topic" v-show="false">
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
                </li>
                <li class="partItem">
                    <div class="user-header-row">
                        <div class="avatar">
                            <img width="30" height="30" :src="picData.user.avatar" />
                        </div>
                        <div class="content">
                            <p class="name">{{picData.user.name}}</p>
                            <p class="time">{{picData.publishTime}}</p>
                        </div>
                    </div>
                    <div class="picture-wrapper">
                        <div class="topic" v-show="false">
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
                </li>
                <li class="partItem">
                    <div class="user-header-row">
                        <div class="avatar">
                            <img width="30" height="30" :src="picData.user.avatar" />
                        </div>
                        <div class="content">
                            <p class="name">{{picData.user.name}}</p>
                            <p class="time">{{picData.publishTime}}</p>
                        </div>
                    </div>
                    <div class="picture-wrapper">
                        <div class="topic">
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
                </li>
            </ul>
        </div>
        </scroll>
    </div>
</template>
<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
      created() {
        this.probeType = 3
        this.listenScroll = true
      },
      mounted() {
        this._picSwiper()
      },
      data() {
        return {
          carData: [],
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
          }
        }
      },
      methods: {
        _picSwiper() {
          // eslint-disable-next-line no-new
          new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 10
          })
        }
      },
      components: {
        Scroll
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .carFriends
        .user-header-row
            .content
                line-height :20px;
</style>        