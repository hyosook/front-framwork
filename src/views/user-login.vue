<template>
  <div id="user-login">
    <form class="login" @submit.prevent="login">
      <h1>user-login</h1>
      <label>Email</label>
      <input required v-model="email" type="text" placeholder="email">
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password">
      <hr>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'user-login',
  meta () {
    return {
      title: '로그인'
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({})
  },
  components: {},
  methods: {
    ...mapMutations({

    }),
    ...mapActions({ user_login: 'users/login' }),
    login () {
      let email = this.email
      let password = this.password
      this.user_login({ email, password })
        .then(() => this.$router.push({ name: 'user-main' })) // TODO : 권한에 따른 페이지 이동필요
        .catch(err => alert(err))
    }
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
