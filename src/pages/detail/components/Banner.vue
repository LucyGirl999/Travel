<template>
    <div>
        <div class="banner-wrapper" @click="handleShowGallary">
            <img class="banner-img" :src="this.bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number"><span class="iconfont">&#xe626;</span>{{this.gallaryImgs.length}}</div>
            </div>
        </div>
        <fade-animation>
          <gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleClose"></gallary>
        </fade-animation>
    </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    Gallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner-wrapper
      position: relative
      overflow: hidden
      height: 0
      padding-bottom: 55%
      .banner-img
        width: 100%
      .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
        .banner-title
          flex: 1
          padding: 0 .2rem
          color: #fff
        .banner-number
          height: .32rem
          line-height: .32rem
          padding: 0 .3rem
          margin-top: .14rem
          margin-right: .2rem
          background:rgba(0, 0, 0, .5)
          border-radius: .2rem
          color: #fff
          font-size: .24rem
          .iconfont
            font-size: .24rem
            padding-right: .1rem
</style>
