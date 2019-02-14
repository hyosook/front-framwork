<template>
  <div id="user-main">
    <h1>User 권한 페이지</h1>
    READ권한 <span v-show="$article.isAllowed('update', article)">Edit Article</span>
    EDIT권한

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'user-main',
  meta () {
    return {
      title: '유저홈'
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
