<template>
     <div class="banma-main classroomm" ref="classroomm">
        <scroll class="main-content" ref="list"
            :data="classData"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            >
            <div class="main-wrapper">
                <div class="partItem">
                    <div class="classHeader">
                        <div class="header-left">
                            <span class="title">斑马课堂</span>
                        </div>
                        <div class="header-right">
                            <span>更多&gt;</span>
                        </div>
                    </div>
                    <div class="classVideo">
                        <video 
                        :src="videoData.video"  
                        :poster="videoData.poster" 
                        controls
                        width="100%" 
                        height="150px"
                        style="object-fit: fill"
                        ></video>
                    </div>
                    <div class="desc">今天小斑如何省钱省时间保养爱车</div>
                </div>
                <div class="partItem">
                    <div class="classHeader">
                        <div class="header-left">
                            <span class="title">使用小技巧</span>
                        </div>
                        <div class="header-right">
                            <span>更多&gt;</span>
                        </div>
                    </div>
                    <div class="antic">
                        <ul class="antic-content">
                            <li class="anticItem">
                                <div class="antic-left">
                                    <div class="anticIcon">
                                        <img width="30" height="30" src="/static/testing/testing-user.png" alt="">
                                    </div>
                                    <div class="anticDesc">
                                        <h3 class="title">空调快捷调温</h3>
                                        <p class="detail">酷夏车内不再蒸桑拿</p>
                                    </div>
                                </div>
                                <div class="antic-right">
                                    <button class="anticBtn">了解一下</button>
                                </div>
                            </li>
                            <li class="anticItem">
                                <div class="antic-left">
                                    <div class="anticIcon">
                                        <img width="30" height="30" src="/static/testing/testing-user.png" alt="">
                                    </div>
                                    <div class="anticDesc">
                                        <h3 class="title">空调快捷调温</h3>
                                        <p class="detail">酷夏车内不再蒸桑拿</p>
                                    </div>
                                </div>
                                <div class="antic-right">
                                    <button class="anticBtn">了解一下</button>
                                </div>
                            </li>
                            <li class="anticItem">
                                <div class="antic-left">
                                    <div class="anticIcon">
                                        <img width="30" height="30" src="/static/testing/testing-user.png" alt="">
                                    </div>
                                    <div class="anticDesc">
                                        <h3 class="title">空调快捷调温</h3>
                                        <p class="detail">酷夏车内不再蒸桑拿</p>
                                    </div>
                                </div>
                                <div class="antic-right">
                                    <button class="anticBtn">了解一下</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                 <div class="partItem">
                    <div class="classHeader">
                        <div class="header-left">
                            <span class="title">你问我答</span>
                        </div>
                        <div class="header-right">
                            <span>全部&gt;</span>
                        </div>
                    </div>
                    <div class="question-answer">

                    </div>
                 </div>

            </div>
        </scroll>
     </div>
</template>
<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'

    export default {
      created() {
        this.probeType = 3
        this.listenScroll = true
      },
      data() {
        return {
          classData: [],
          videoData: { // testing data
            avatar: '/static/testing/testing-user.png',
            name: '斑马小编',
            video: '/static/testing/test.mp4',
            poster: '/static/testing/testPic.png',
            publishTime: '刚刚',
            likeSum: 2000,
            commentSum: 200
          }
        }
      },
      components: {
        Scroll
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
.classroomm
    .classHeader
        margin:10px 0;
        display :flex;
        .header-left
            flex :1;
        .header-right
            flex:0 0 100px;
            text-align :right;
    .desc
        margin:5px 0;
        line-height :20px;

    .antic
        .antic-content
            margin:0 20px;
            .anticItem
                display :flex;
                height :40px;
                margin:10px 0;
                .antic-left
                    flex:1;
                    .anticIcon
                        display :inline-block;
                        width: 30px;
                        height: 30px;
                        vertical-align: top;
                        margin-top: 5px;
                        img
                            border-radius: 50%;
                    .anticDesc
                        display :inline-block;
                        margin-left:10px;
                        line-height :20px;
                        .detail
                            color :#ccc;
                            font-size:10px;
                .antic-right
                    flex: 0 0 80px;
                    .anticBtn
                        border:solid 1px #ccc;
                        color:$color-text-link;
                        border-radius:15px;
                        height :30px;
                        line-height :30px;
                        background :#fff;
                        padding:0 10px;
                        margin-top: 5px;
                        outline:none;
                        





</style>        