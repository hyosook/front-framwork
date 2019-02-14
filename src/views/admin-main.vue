<template>
  <div id="admin-main">
    <h1>Admin 권한 페이지</h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'admin-main',
  meta () {
    return {
      title: '관리자'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
    })
  },
  components: {
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
    })
  },
  created () { console.log('CALL created()') },
  mounted () { console.log('CALL mounted()') },
  activated () { console.log('CALL activated()') },
  deactivated () { console.log('CALL deactivated()') },
  destroyed () { console.log('CALL destroyed()') }
}
</script>

<style>
</style>
<style scoped>
</style>
