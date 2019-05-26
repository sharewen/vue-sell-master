<template>
    <div class="hot-tpl">
        <div class="header">当前热点</div>
        <ul class="hot-wrapper">
            <li class="hotItem"><div class="hot"><span class="wds">#爆胎后怎么玩</span><i class="sprite"></i></div></li>
            <li class="hotItem"><div class="hot"><span class="wds">#油耗怎么降低</span><i class="sprite"></i></div></li>
            <li class="hotItem"><div class="hot"><span class="wds">#车机小窍门</span><i class="sprite"></i></div></li>
            <li class="hotItem"><div class="hot"><span class="wds">#斑马月活动</span><i class="sprite"></i></div></li>
            <li class="hotItem"><div class="hot"><span class="wds">#4S电活动</span><i class="sprite"></i></div></li>
            <li class="hotItem"><a class="A_link">更多</a></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
 export default {
   props: {
     hotData: {
       type: Object
     }
   }
 }
 </script>
 <style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
    .hot-tpl
        .header
            margin: 10px 0;
            line-height: 30px;
            height: 30px;
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
 </style>

