export default{
  components: {
  },
  vuex: {},
  data () {
    return {
      title: 'svg demo'
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getUserList () {
      this.$axios.post('/api/user/login', {
        username: 'admin',
        password: 'yplsec.com'
      }).then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(1234567890, e)
      })
    }
  },
  mounted () {
    this.getUserList()
  }
}
