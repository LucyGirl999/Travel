<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果不存在搜索内容，那么将list数组变空，然后返回
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // 循环父组件传入的cities的对象
        for (let i in this.cities) {
          // 在循环对象中的数组
          this.cities[i].forEach((value) => {
            // 搜索功能的主要原理
            // 判断输入keyword的值说是否与value的spell和name匹配，如果匹配在将value值添加到result中去
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  // 解决当搜索的内容很多时，不能滚动的问题
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
     &:before
       background: #eee
    .search
      background: $bgColor
      padding: 0 .1rem
      height: .72rem
      .search-input
        box-sizing: border-box
        width: 100%
        height: .62rem
        text-align: center
        line-height: .62rem
        color: #666
        border-radius: .06rem
        padding: 0 .1rem
    .search-content
      overflow: hidden
      z-index:1
      position: absolute
      top: 1.59rem
      left: 0
      right: 0
      bottom: 0
      background: #ccc
      .search-item
        line-height: .64rem
        color: #666
        padding-left: .2rem
        background: #fff
</style>
