<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list" v-for="innerItem of item" :key="innerItem.id">
                    <li class="item border-bottom">{{innerItem.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  // 在元素挂载时
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  // 使用监听器，监听字母的变化
  watch: {
    letter () {
      // 判断字母有无变化
      if (this.letter) {
        // 获取到要变化的dom元素，this.$ref[this.letter]获取到的是数组，要获取到对应的值，应该为this.$refs[this.letter][0]
        const element = this.$refs[this.letter][0]
        // 使用better-scroll插件的scrollToElement(dom元素)方法，实现对应的滚动
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

 <style lang="stylus" scoped>
    .border-topbottom
      &:before
        border-color: #cccccc
      &:after
        border-color: #cccccc
    .border-bottom
      &:before
        border-color: #cccccc
    .list
        position: absolute
        top: 1.59rem
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
        .title
            line-height: .76rem
            padding-left: .2rem
            background: #eee
            font-size: .26rem
            color: #666
        .button-list
            padding: .1rem .6rem .1rem .1rem
            overflow: hidden
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    text-align: center
                    border: .02rem solid #cccccc
                    padding: .1rem 0
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
 </style>
