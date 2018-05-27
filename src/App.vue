<template>
  <div id="app">
    <!-- <router-view>显示当前路由地址下的内容 -->
    <!-- 使用keep-alive标签包含起来是为了在ajax请求是，将返回内容保存起来，在内容没有发生改变时，不在请求数据 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
