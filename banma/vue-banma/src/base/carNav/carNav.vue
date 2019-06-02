<template>
    <div>
        <div class="carNav">
            <div class="nav-header">
                <div class="left">
                    <span class="carName" @click="toggleCarList">荣威RX5</span>
                    <i class="arrow" :class="isShowNav ? 'up' : 'down' " @click="toggleCarList"></i>
                </div>
                <div class="right">
                    <span class="latest" @click="getLatest" :class="{'active':carIndex===0}">最新</span>
                    <span class="sepatator">|</span>
                    <span class="hottest" @click="getHottest" :class="{'active':carIndex===1}">最热</span>
                </div>
            </div>
            <div class="car-list" v-show="isShowNav">
                243
            </div>
        </div>
        <transition name="fade">
            <div class="list-mask" @click="hideList" v-show="isShowNav"></div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'carNav',
  data() {
    return {
      carIndex: 0,
      isShowNav: false
    }
  },
  methods: {
    getLatest() {
      this.carIndex = 0
      this.$emit('carList', 0)
    },
    getHottest() {
      this.carIndex = 1
      this.$emit('carList', 1)
    },
    toggleCarList() {
      this.isShowNav = !this.isShowNav
    },
    hideList() {
      this.isShowNav = false
    }
  },
  watch: {
    '$route'(val) {
      this.isShowNav = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
    .carNav
        position :relative;
        z-index :50;
        .nav-header
            height :40px;
            line-height :40px;
            border-1px(#ccc);
            display:flex;
            .left
                font-size:$font-size-medium;
                flex:1;
                margin-left: 18px;
                .carName
                    color:#0ae2d8;
                    font-weight:600;
            .right
                font-size:0px;
                margin-right:12px;
                flex:0 0 90px;
                .latest,.hottest
                    font-size:$font-size-small-s;
                    padding:2px 4px;
                    color:#969aa2;
                .sepatator
                    font-size:$font-size-small;
                    margin:0 4px;
                .active
                    color:#000;
                    padding:4px;
        .car-list
            position :absolute;
            left:0;
            top:40px;
            background:#fff;
            width:100%;
            min-height :100px;


.list-mask
    position: fixed;
    top: 84px;
    left: 0;
    width: 100%;
    height: 100%
    z-index: 40;
    backdrop-filter: blur(10px);
    opacity: 1
    background: rgba(7, 17, 27, 0.5)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: rgba(7, 17, 27, 0)

</style>