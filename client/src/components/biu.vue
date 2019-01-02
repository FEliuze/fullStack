<template>
  <div class="">
    <div class="container text-center">
      <button class="btn ripple btn-lg" :ref="dataId">
        Button
        <span class="btn-inner-span" :ref="spanId"></span>
      </button>
    </div>
  </div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
  name: 'Biu',
  components: {
  },
  data () {
    let uuid = () => {
      return uuidv1().split('-').join('')
    }
    return {
      dataId: uuid(),
      spanId: uuid()
    }
  },
  methods: {
    bindEvent (dom, eventName, listener) {
      if (dom.attachEvent) {
        dom.attachEvent('on' + eventName, listener)
      } else {
        dom.addEventListener(eventName, listener)
      }
    },
    bindBtnEvent () {
      let mydiv = this.$refs[this.dataId]
      this.bindEvent(mydiv, 'click', (e) => {
        let span = this.$refs[this.spanId]
        let offsetX = e.clientX - mydiv.offsetLeft - mydiv.offsetWidth / 2
        let offsetY = e.clientY - mydiv.offsetTop - mydiv.offsetHeight / 2
        span.style.left = `${offsetX}px`
        span.style.top = `${offsetY}px`
      })
    }
  },
  mounted () {
    this.bindBtnEvent()
  }
}
</script>
<style scoped>
  .btn {
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 3px;
    background: #409eff;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
  }
  .btn:hover {
    background: #7ab7f7;
  }
  .ripple {
    position: relative;
    overflow: hidden;
  }
  .btn-inner-span {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    transform: scale(20, 20);
    opacity: 0;
    transition: transform 0.4s, opacity 0.5s;
  }
  .ripple:active .btn-inner-span {
    transform: scale(0, 0);
    opacity: 0.5;
    transition: 0s;
  }
</style>
