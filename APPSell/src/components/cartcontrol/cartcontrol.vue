<template>
    <div class="cartcontrol">
        <div class="cart-decrease">
            <span class="inner icon-remove_circle_outline" v-show="this.food.count > 0" @click="decreaseCart"></span>
        </div>
        <div class="cart-count" v-show="this.food.count > 0">{{ food.count }}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div> 
    </div>
</template>

<script type='text/ecmascript-6'>
import Vue from 'vue'
export default {
    props:{
        food:{
            type:Object
        }
    },
    data () {
        return {
            
        };
    },
    created(){
        console.log(this.food,'cartcontrol')
    },
    components: {},

    methods: {
        addCart(event){
            if(!event._constructed){
                return;
            }
            
            if(!this.food.count){
                //this.food.count = 1; 新增属性 不能触发视图更新
                this.$set(this.food,"count",1);
            }else{
                this.food.count++;
            }
            console.log(this.food.count,'add')
           
        },
        decreaseCart(event){
            if(!event._constructed){
                return;
            }
            if (this.food.count) {
                this.food.count--;
            }

        }
    }
}

</script>
<style lang='stylus' rel = 'stylesheet/stylus'>
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