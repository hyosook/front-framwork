<template>
  <div id="home-main">
    <h1>Home-main 화면</h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'home-main',
  meta () {
    return {
      title: 'Home'
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({})
  },
  components: {},
  methods: {
    ...mapMutations({}),
    ...mapActions({})
  },
  created () {
    console.log('CALL created()')
  },
  mounted () {
    console.log('CALL mounted()')
  },
  activated () {
    console.log('CALL activated()')
  },
  deactivated () {
    console.log('CALL deactivated()')
  },
  destroyed () {
    console.log('CALL destroyed()')
  }
}
</script>

<style>
</style>
<style scoped>
</style>
