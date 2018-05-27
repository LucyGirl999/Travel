<template>
    <div>
        <div class="banner-wrapper" @click="handleShowGallary">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_600x330_35e2f813.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">华清宫（华清池·骊山）(AAAAA景区)</div>
                <div class="banner-number"><span class="iconfont">&#xe626;</span>39</div>
            </div>
        </div>
        <gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></gallary>
    </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    Gallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_350x240_34a3d53e.jpg', 'http://img1.qunarzz.com/sight/p0/1602/4d/4d8529eb55360f5090.img.jpg_350x240_9c36e5b2.jpg'],
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
</style>
