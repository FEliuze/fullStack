<template>
  <div class="">
    <wordcloud
    :data="defaultWords"
    nameKey="name"
    valueKey="value">
    </wordcloud>
    <div ref="aaa">
    </div>
    <div class="bbb">
      bbbbbbbbbbbbbb
    </div>
    <div class="hello">
      <h1>lalalalalala</h1>
      阿萨德法国红酒
    </div>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
// import $ from 'jquery'

export default {
  name: 'app',
  components: {
    wordcloud
  },
  data () {
    return {
      defaultWords: [{
        name: 'Cat',
        value: 26
      },
      {
        name: 'fish',
        value: 19
      },
      {
        name: 'things',
        value: 18
      },
      {
        name: 'look',
        value: 16
      },
      {
        name: 'two',
        value: 15
      },
      {
        name: 'fun',
        value: 9
      },
      {
        name: 'know',
        value: 9
      },
      {
        name: 'good',
        value: 9
      },
      {
        name: 'play',
        value: 6
      }]
    }
  },
  mounted () {
    // $('#aaa').text('6666666666')
    console.log(this.$refs)
    this.$refs.aaa.textContent = '6666666666'
  }
}
</script>
<style scoped>
  div {
    color: #f9494c;
  }
</style>
