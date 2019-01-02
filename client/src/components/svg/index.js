export default{
  components: {
  },
  vuex: {},
  data () {
    return {
      userInfo: {},
      title: 'svg demo'
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getUserList () {
      this.$axios.get('/api/user', {headers: {authorization: sessionStorage.getItem('authorization')}})
        .then((res) => {
          console.log('res', res)
        })
    },
    login () {
      this.$axios.post('/api/user/login', {
        username: 'admin',
        password: 'yplsec.com'
      }).then((res) => {
        console.log(res)
        let data = res.data.data
        this.userInfo = data.result[0]
        sessionStorage.setItem('authorization', `Bearer ${data.token}`)
      }).then(() => {
        this.getUserList()
      }).catch((e) => {
        console.log(1234567890, e)
      })
    }
  },
  mounted () {
    console.log(this)
    this.login()
    this.$Progress.start()
  }
}
