<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-icon-context" :src="item.iconsUrl" alt="">
                    </div>
                    <p class="icon-decs">{{item.iconsDecs}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        {
          id: '0001',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          iconsDecs: '热门景点'
        },
        {
          id: '0002',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          iconsDecs: '必游榜单'
        },
        {
          id: '0003',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          iconsDecs: '动植物园'
        },
        {
          id: '0004',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
          iconsDecs: '公园'
        },
        {
          id: '0005',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          iconsDecs: '游船游艇'
        },
        {
          id: '0006',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          iconsDecs: '踏青赏花'
        },
        {
          id: '0007',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          iconsDecs: '名胜古迹'
        },
        {
          id: '0008',
          iconsUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          iconsDecs: '一日游'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
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
