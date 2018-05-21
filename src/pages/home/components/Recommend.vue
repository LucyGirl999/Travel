<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/minix.styl'
  .title
    line-height: .8rem
    background: #eeeeee
    margin-top: .2rem
    text-indent: .2rem
  .item
    height: 1.9rem
    display: flex
    overflow: hidden
    .item-img
      width: 1.7rem
      height : 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        font-size: .32rem
        line-height: .54rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        margin-top: .16rem
        padding: 0 .2rem
        background: #ff9300
        border-radius: 0.06rem
        color: #fff
</style>
