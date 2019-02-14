<template>
  <div id="user-register">
    <h4>user-register</h4>
    <form @submit.prevent="register">
      <label for="is_admin">is_admin</label>
      <div>
        <input id="is_admin" type="text" v-model="is_admin">
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required>
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>

      <div>
        <button type="submit">등록하기</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {

  name: 'user-register',
  meta () {
    return {
      title: '회원가입'
    }
  },
  data () {
    return {
      email: '',
      password: '',
      is_admin: null
    }
  },
  computed: {
    ...mapGetters({})
  },
  components: {},
  methods: {
    ...mapMutations({

    }),
    ...mapActions({ user_register: 'users/register' }),
    register () {
      let data = {
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      }
      this.user_register(data)
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
