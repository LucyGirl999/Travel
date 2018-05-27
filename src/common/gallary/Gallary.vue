<template>
    <div class="container" @click="handleShowBanner">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item"/>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleShowBanner () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container
      display: flex
      flex-direction: column
      justify-content: center
      z-index: 99
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: #000
      color: #fff
      .wrapper
        overflow: hidden
        height: 0
        padding-bottom: 68.5%
        width: 100%
        .gallary-img
          width: 100%
        .swiper-pagination
          color: #fff
</style>
