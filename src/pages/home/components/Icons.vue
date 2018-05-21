<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-icon-context" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-decs">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoPlay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/minix.styl';
    .icons >>> .swiper-container
        height:0
        padding-bottom: 50%
    .icon
        overflow: hidden
        position: relative
        width: 25%
        height: 0
        padding-bottom: 25%
        float: left
        .icon-img
            position: absolute
            left: 0
            right: 0
            top: 0
            bottom: 0.44rem
            border-sizing: border-box
            padding: 0.1rem
            .img-icon-context
                height: 100%
                display: block
                margin: 0 auto

        .icon-decs
            position: absolute;
            left: 0
            right: 0
            bottom: 0
            height: 0.44rem
            line-height: 0.44rem
            text-align: center
            color: $contextColor
            ellipsis()
</style>
