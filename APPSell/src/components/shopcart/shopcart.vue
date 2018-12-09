<template>
  <div class="shopcart">
    <div class="content">
        <div class="content-left">
            <div class="logo-wrapper">
                <div class="logo" :class="{'highlight':totalCount > 0 }">
                    <span class="icon-shopping_cart" :class="{'highlight':totalCount > 0 }"></span>
                </div>
                <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
            </div>
            <div class="price" >¥{{ totalPrice }}</div>
            <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right">
            <div class="pay">
                {{ payDesc }}
            </div>
        </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props:{
      selectFoods:{
          type:Array,
          default(){ //默认值 为函数
              return [
                  {
                      price:10,
                      count:1
                  }
              ]
          }
      },
      deliveryPrice:{
          type:Number,
          default:0
      },
      minPrice:{
          type:Number,
          default:0
      }
  },
  data () {
    return {
    };
  },
  components: {},
    
  methods: {},
  computed:{
    totalPrice(){
          let total = 0;
          this.selectFoods.forEach((foods) => {
              total += foods.price * foods.count
          });
          return total;
      },
    totalCount(){
        let count = 0;
        this.selectFoods.forEach((foods)=>{
            count += foods.count
        })
        return count;
    },
    payDesc(){
        if(this.totalPrice === 0){
            return `¥${this.minPrice}元起送`;
        }else if (this.totalPrice < this.minPrice ){
            let diff = this.minPrice -this.totalPrice ;
            return `¥还差${diff}元起送`;
        }else{
            return '去结算';
        }
    }
  }
}

</script>
<style lang='stylus' rel = 'stylesheet/stylus'>
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
                    background :#2b333b




</style>