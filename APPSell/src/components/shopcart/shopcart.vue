<template>
<div>
  <div class="shopcart">
    <div class="content" @click="toggleList">
        <div class="content-left">
            <div class="logo-wrapper">
                <div class="logo" :class="{'highlight':totalCount > 0 }" >
                    <span class="icon-shopping_cart" :class="{'highlight':totalCount > 0 }"></span>
                </div>
                <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
            </div>
            <div class="price" >¥{{ totalPrice }}</div>
            <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right">
            <div class="pay" :class="payClass">
                {{ payDesc }}
            </div>
        </div>
    </div>
    <div class="ball-container">
            <div v-for="(ball,index) in balls" :key="index">
                <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div v-show="ball.show" class="ball" >
                        <div class="inner inner-hook"></div>
                    </div>
                </transition>
            </div>
    </div>
    <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
            <div class="list-header">
                <h1 class="title">购物车</h1>
                <span class="empty" @click="empty">清空</span>
            </div>
            <div class="list-content" ref="listContent">
                <ul>
                    <li class="food" v-for="(food,index) in selectFoods" :key="index">
                        <span class="name">{{ food.name }}</span>
                        <div class="price">
                            <span>¥{{ food.price * food.count }}</span>
                        </div>
                        <div class="cartcontrol-wrapper">
                            <cartcontrol :food="food"></cartcontrol>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
    </div>
    
    <transition name="fade">
        <div class="list-mask" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
import BScroll from 'better-scroll'
import cartcontrol from 'components/cartcontrol/cartcontrol'
export default {
  props: {
      selectFoods: {
          type: Array,
          default() { // 默认值 为函数
              return []
          }
      },
      deliveryPrice: {
          type: Number,
          default: 0
      },
      minPrice: {
          type: Number,
          default: 0
      }
  },
  data () {
    return {
       balls: [
           {
               show: false
            },
            {
               show: false
            },
            {
               show: false
            },
            {
               show: false
            },
            {
               show: false
            }
       ],
       dropBalls: [],
       fold: true
    }
  },
  components: {
      cartcontrol
  },
    
  methods: {
      drop(el) {
        console.log(el, 'shopcart')
        for (let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i]
            if (!ball.show) {
                ball.show = true// 触发动画
                ball.el = el
                console.log(ball, i, ball.show)
                this.dropBalls.push(ball)
                return
            }
        }
        console.log(this.balls)
    },
    // transition 钩子方法
    beforeDrop(el) {
        console.log('before')
        let count = this.balls.length
        while (count--) {
            let ball = this.balls[count]
            console.log(ball, count, ball.show)
            if (ball.show) {
                let rect = ball.el.getBoundingClientRect()// 当前小球 所在视口的位置
                let x = rect.left - 32
                let y = -(window.innerHeight - rect.top - 22)
                el.style.display = ''
                el.style.webkitTransform = `translate3d(0,${y}px,0)`
                el.style.transform = `translate3d(0,${y}px,0)`
                let inner = el.getElementsByClassName('inner-hook')[0]
                inner.style.webkitTransform = `translate3d(${x}px,0,0)`
                inner.style.transform = `translate3d(${x}px,0,0)`
            }
        }
    },
    dropping(el, done) {
        /* 触发浏览器重绘 */
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight// 因为浏览器对于重绘是有要求并且是有队列完成的,这是主要为了性能,虽然动画隐藏了小球display none,但没有触发html重绘,或者说没有立即触发html重绘,所以需要手动
        this.$nextTick(() => {
           this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)'
          el.style.transform = 'translate3d(0,0,0)'
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = 'translate3d(0,0,0)'
          inner.style.transform = 'translate3d(0,0,0)'
          el.addEventListener('transitionend', done)
        })
        })
        console.log('dropping')
    },
    afterDrop(el) {
        let ball = this.dropBalls.shift()
        if (ball) {
            ball.show = false
            el.style.display = 'none'
        }
        console.log('after drop')
    },
    toggleList() {
         if (!this.totalCount) {
            return
        }
        this.fold = !this.fold
    },
    empty() {
        this.selectFoods.forEach((food) => {
            food.count = 0
        })
    }

  },
  computed: {
    totalPrice() {
          let total = 0
          this.selectFoods.forEach((foods) => {
              total += foods.price * foods.count
          })
          return total
      },
    totalCount() {
        let count = 0
        this.selectFoods.forEach((foods) => {
            count += foods.count
        })
        return count
    },
    payDesc() {
        if (this.totalPrice === 0) {
            return `¥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
            let diff = this.minPrice - this.totalPrice 
            return `还差¥${diff}元起送`
        } else {
            return '去结算'
        }
    },
    payClass() {
        if (this.totalPrice < this.minPrice) {
            return 'not-enough'
        } else {
            return 'enough'
        }
    },
    // listShow 属性是计算属性 根据商品个数 显示
    listShow() {
        if (!this.totalCount) {
            this.fold = true
            return false
        }
        let show = !this.fold 
        if (show) {
            if (!this.scroll) {
                this.$nextTick(() => {
                    this.scroll = new BScroll(this.$refs.listContent, {
                        click: true
                    })
                })
            } else {
                 this.scroll.refresh()
            }
        }

        return show
    }
    
  }
}

</script>
<style lang='stylus' rel = 'stylesheet/stylus'>
    @import "../../common/stylus/mixin.styl"
    .shopcart
        position : fixed
        left : 0 
        bottom: 0
        z-index : 50
        width : 100%
        height : 48px
        .content
            display : flex
            background : #141d27
            font-size:0
            color:rgba(255,255,255,.4)
            .content-left
                flex:1
                .logo-wrapper
                    display:inline-block
                    vertical-align : top
                    position :relative
                    top:-10px 
                    margin:0 12px
                    padding:6px 
                    width:56px 
                    height :56px 
                    border-radius:50%
                    background :#141d27
                    box-sizing:border-box
                    .logo
                        width:100%
                        height :100%
                        border-radius:50%
                        text-align :center
                        background :#2b343c
                        &.highlight
                            background:rgb(0,160,220)
                        .icon-shopping_cart
                            line-height: 44px
                            font-size: 24px
                            color: #80858a
                            &.highlight
                                color:#fff
                    .num
                        position :absolute;
                        top:0;
                        right:0;
                        width:24px;
                        height:16px;
                        line-height:16px;
                        text-align:center;
                        border-radius:16px;
                        font-size:9px;
                        background:red;
                        color:#fff;
                        font-weight:700;
                        box-shadow:0px 4px 8px 0px rgba(0,0,0,.4)
                .price
                    display :inline-block
                    vertical-align :top
                    margin-top:12px 
                    line-height :24px
                    padding-right:12px 
                    box-sizing:border-box
                    border-right:1px solid rgba(255,255,255,.1)
                    font-size:16px;
                    font-weight:700;
                    color:rgba(255,255,255,.4);
                .desc
                    display: inline-block;
                    vertical-align: top;
                    margin: 12px 0 0 12px;
                    line-height: 24px;
                    font-size: 10px;
                    color:rgba(255,255,255,.4);

            .content-right
                flex : 0 0 105px
                width: 105px
                .pay
                    height 48px
                    text-align center
                    line-height 48px
                    font-size 12px
                    color:rgba(255,255,255,.4)
                    &.not-enough
                        background :#2b333b
                    &.enough
                        background :#00b43c;
                        color:#fff;
        .ball-container
            .ball
                position: fixed
                left: 32px
                bottom: 22px
                z-index: 200
                transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41) /*Y轴贝塞尔曲线*/
                .inner
                    width: 16px
                    height: 16px
                    border-radius: 50%
                    background: rgb(0, 160, 220)
                    transition: all 0.4s linear /* x轴线性*/
        
        .shopcart-list
            position :absolute;
            top:0
            left 0;
            z-index :-1;
            width :100%;
            transform :translate3d(0,-100%,0);
            &.fold-enter-active,&.fold-leave-active
                transition :all 0.5s;
            &.fold-enter,&.fold-leave-active
                transform : translate3d(0,0,0);
            .list-header
                height :40px;
                line-height:40px;
                padding:0 18px;
                background:#f3f5f7;
                border-bottom:1px solid rgba(7,17,27,0.1)
                .title
                    float: left;
                    font-size:14px;
                    color:rgb(7,17,27)
                .empty
                    float:right;
                    font-size 12px;
                    color:rgb(0,160,220)
            .list-content
                padding:0 18px;
                max-height :217px;
                overflow :hidden;
                background:#fff;
                .food
                    position :relative;
                    padding:12px 0;
                    box-sizing:border-box;
                    border-1px(rgba(7,17,27,.1))
                    .name
                        line-height :24px;
                        font-size:12px;
                        color:rbg(7,17,27)
                    .price
                        position :absolute;
                        right:90px;
                        bottom:12px;
                        line-height:24px;
                        font-weight:bold;
                        color:rgb(240,20,20);
                        font-size:14px;
                    .cartcontrol-wrapper
                        position :absolute;
                        right :0;
                        bottom:6px;

    .list-mask
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 40
        backdrop-filter: blur(10px)
        opacity: 1
        background: rgba(7, 17, 27, 0.6)
        &.fade-enter-active, &.fade-leave-active
            transition: all 0.5s
        &.fade-enter, &.fade-leave-active
            opacity: 0
            background: rgba(7, 17, 27, 0)

</style>
