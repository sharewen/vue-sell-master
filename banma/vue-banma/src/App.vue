<template>
  <div id="app" @touchmove.prevent>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'

export default {
  components: {
    Tab
  }}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
