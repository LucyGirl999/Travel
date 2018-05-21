<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                     <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '长隆野生动物园',
        desc: '你可以与许多大型野生动物进行亲密解除喔ba'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '深圳欢乐谷',
        desc: '这里你可以体验大牌回复拉风'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '清远漂流',
        desc: '你可以与鼎折覆餗发放野生除喔ba'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '清远漂流',
        desc: '你可以与鼎折覆餗发放野生除喔ba'
      }]
    }
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.4%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      font-size: .32rem
      line-height: .54rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
