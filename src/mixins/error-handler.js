export default {
  computed: {
    error () {
      alert('뭐지')
      return this.$store.state.error // TODO : 공통으로 alert을 띄우기
    }
  }
}
