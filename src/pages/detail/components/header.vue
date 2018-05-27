<template>
    <div>
        <router-link to="/" class="header-abs" v-show="showAbs">
             <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityShow">
            <router-link to="/">
                <div class="iconfont header-fiexd-icon">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityShow: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityShow = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
      position: absolute
      top: .2rem
      left: .2rem
      width: .8rem
      height: .8rem
      line-height: .8rem
      text-align: center
      border-radius: .4rem
      background: rgba(0, 0, 0, .8)
      .header-abs-icon
        color: #ffffff
        font-size: .4rem
    .header-fixed
      position: fixed
      top: 0
      left: 0
      right: 0
      height: $headerHeight
      line-height: $headerHeight
      text-align: center
      background: $bgColor
      color: #fff
      font-size: .32rem
      .header-fiexd-icon
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>
