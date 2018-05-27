export default {
  stateChange (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
