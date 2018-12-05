<!--  -->
<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(good,index) in goods" :key="index" class="menu-item"  :class="{'current':currentIndex ===index }" @click="selectMenus(index,$event)" >
          <span class="text border-1px">
            <span v-show="good.type > -1" class="icon" :class="classMap[good.type]"></span>
            {{ good.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list food-list-hook" :key="index">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for="(food,foodIndex) in item.foods" :key="foodIndex" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" width="57" height="57"/>
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span class="rating">好评率{{ food.rating}}</span>
                </div>
                <div class="price">
                  <span class="now">¥{{ food.price }}</span>
                  <span v-show="food.oldPrice !='' " class="old">¥{{ food.oldPrice }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div class="cart-decrease">
                      <span class="inner icon-remove_circle_outline"></span>
                    </div>
                    <div class="cart-count"></div>
                    <div class="cart-add icon-add_circle"></div> 
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<script type='text/ecmascript-6'>
import axios from "axios"
import BScroll from 'better-scroll'
import shopcart from 'components/shopcart/shopcart'

const ERR_OK = 0; // 数据请求成功状态码
export default {
  props:{
    seller:{
      type:Object
    }
  },
  data () {
    return {
      goods:[],
      listHeight:[],
      scrollY:0
    };
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    axios.get('./api/goods').then((res)=>{
      res=res.data
      if(ERR_OK === res.errno ){
        this.goods =res.data
        console.log(res,'goods')
        this.$nextTick(()=>{ // 保证dom渲染完毕 操作dom 在这里最好
          this._initScroll()
          this._calculateHeight()
        })
        
      }
      
    })
  },
  
  computed:{
    currentIndex() {
      for(let i=0;i<this.listHeight.length;i++){
        let height1 =this.listHeight[i];
        let height2 = this.listHeight[i+1];
        // 如果不是最后一个 在h1 和 h2区间 curIndex = i  ！height2 为true也就是最后一个了
        if(!height2 || this.scrollY >= height1 && this.scrollY < height2){
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    // 菜单点击事件
    selectMenus(index,event) {
      // 区分浏览器还是手机端点击
       if (!event._constructed) {
          return;
        }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index]
      // 滚动到 food 位置
      this.foodsScroll.scrollToElement(el,300)
    },
    // 绑定 滚动事件
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true // 默认阻止点击
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
        probeType : 3, // 监听滚动Y位置
        click:true
      })
      this.foodsScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y))
        //console.log(this.scrollY,'scroll')
      })
    },
    // 计算右侧列表高度
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0 
      this.listHeight.push(height)
      for(let i=0; i<foodList.length;i++){
        let item =foodList[i];
        height+=item.clientHeight
        this.listHeight.push(height)
      }
      console.log(this.listHeight)
    }
    
    
  },
  components: {
    shopcart
  },
}

</script>
<style lang='stylus' rel = 'stylesheet/stylus'>
 @import "../../common/stylus/mixin";
  .goods
    display : flex
    position : absolute
    top: 174px
    bottom:64px
    width: 100%
    overflow :hidden
    .menu-wrapper
      flex:0 0  80px
      width:80px
      background :#f3f5f7
      .menu-item
        display : table
        height :54px
        width:56px
        padding:0 12px
        line-height :14px
        &.current
          position : relative
          margin-top:-1px 
          background :#fff 
          font-weight:700 
          .text
            border-none()

        
        .text
          display :table-cell
          width:56px
          vertical-align :middle
          font-size:12px
          border-1px(rgba(7,17,27,.1))

          font-weight:200
          
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 2px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('images/decrease_3')
            &.discount
              bg-image('images/discount_3')
            &.guarantee
              bg-image('images/guarantee_3')
            &.invoice
              bg-image('images/invoice_3')
            &.special
              bg-image('images/special_3')
    .foods-wrapper
      flex:1  // 1 1 0%
      .title
        padding-left:14px
        background :#f3f5f7
        border-left:solid 2px #d9dde1
        font-size:12px
        color:rgb(147,153,159)
        height :26px
        line-height : 26px
      .food-item
        display :flex
        margin:18px
        padding-bottom:18px
        position: relative
        border-1px(rgba(7,17,27,.1))
        &:last-child
          border-none()
          margin-bottom:0
        .icon
          flex:0 0 57px
          margin-right:10px
        .content
          flex:1
          .name
            font-size:14px
            color:rgb(7,17,27)
            line-height :14px
            margin:2px 0 8px 0
          .desc
            line-height: 12px
            margin-bottom: 8px
            font-size:10px
            color:rgb(147,153,159)
          .extra
            line-height: 10px
            font-size: 10px
            color: #93999f
            margin-bottom: 8px;
            .count
              margin-right:12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: #f01414
            .old
              text-decoration: line-through
              font-size: 10px
              color: #93999f
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
            .cartcontrol
              font-size:0
              .cart-decrease
                display: inline-block
                padding: 6px
                opacity :1
                transform :translate3d(0,0,0)
                .inner
                  display: inline-block
                  line-height: 24px
                  font-size: 24px
                  color: #00a0dc
                  transition: all 0.4s linear
                  transform: rotate(0)
              .cart-count
                display: inline-block;
                vertical-align: top;
                width: 12px;
                padding-top: 6px;
                line-height: 24px;
                text-align: center;
                font-size: 10px;
                color: #93999f;
              .cart-add
                display: inline-block;
                padding: 6px;
                line-height: 24px;
                font-size: 24px;
                color: #00a0dc;



       


</style>