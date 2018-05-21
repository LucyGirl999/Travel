<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg',
        title: '长隆野生动物园',
        desc: '你可以与许多大型野生动物进行亲密解除喔ba'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_200x200_3c429960.jpg',
        title: '深圳欢乐谷',
        desc: '这里你可以体验大牌回复拉风'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
        title: '清远漂流',
        desc: '你可以与鼎折覆餗发放野生除喔ba'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
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
