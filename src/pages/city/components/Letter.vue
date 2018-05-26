<template>
    <ul class="letter">
        <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
        {{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityLetter',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStaus: false,
      startY: 0,
      // 定义一个timer，实现一个节流
      timer: null
    }
  },
  updata () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // 当点击字母，向外触发一个方法，这是父子组件之间传值的一个方法，把传数也带出去
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStaus = true
    },
    handleTouchMove (e) {
      if (this.touchStaus) {
        // 如果已经存在timer了，那么就清除掉timer
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 创建一个timer，让他在16毫秒后在执行
        this.timer = setTimeout(() => {
          // 获取到移动到字母的距离最顶部的高度，然后后再减去头部的高度
          const touchY = e.touches[0].clientY - 159
          // touchY的高度减去A到蓝色部分的高度再除以li标签的高度，向下取整，获得每一个字母的index值
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            // 满足以上条件，向外触发函数，并将传数传出去
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStaus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .letter
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            text-align: center
            line-height: .4rem
            color: $bgColor
</style>
