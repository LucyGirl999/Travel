export default {
  // 接收到两个参数，一个是上下文，一个是外部传进来的参数
  stateChange (ctx, city) {
  // 使用ctx去触发mutations中的内容
    ctx.commit('stateChange', city)
  }
}
