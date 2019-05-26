<template>
  <div class="tab">
    <div class="searchIcon">search</div>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/carFriends">
      <span class="tab-link">车友圈</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/banmaClassroom">
      <span class="tab-link">小斑课堂</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/active">
      <span class="tab-link">活动</span>
    </router-link>
    <div class="closeBtn">X</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    border-1px(#ccc)
    .searchIcon
      flex:0 0 50px
      text-align:center
    .closeBtn
      flex:0 0 50px
      text-align:center
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 2px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>