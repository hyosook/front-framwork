<template>
  <div id="app">
    <div id="nav">
     <router-link :to="{ name: 'home-main'}">home-main</router-link>|
      <router-link :to="{ name: 'user-login'}">user-login</router-link>|
      <router-link :to="{ name: 'user-register'}">user-register</router-link>|
      <router-link :to="{ name: 'user-main'}">user-main</router-link>|
      <router-link :to="{ name: 'admin-main'}">admin-main</router-link>
      <!-- <span v-if="isLoggedIn">
        |
        <a @click="logout">Logout</a>
      </span> -->
    </div>
    <keep-alive include>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',

  data () {
    return {}
  },

  computed: {
    ...mapGetters({})
  },

  components: {},

  methods: {
    ...mapMutations({}),
    ...mapActions({
      logout: 'user/logout' }
    )
  },

  created () {
    console.log('CALL created()')
    /*     this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.logout()
          this.$store.dispatch(logout) // todo
        }
        throw err
      })
    }) */
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
