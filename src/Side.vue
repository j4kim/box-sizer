<template>
  <div class="side" :style="style">
    <rectangle
      v-for="(rect, i) in side.rectangles"
      :key="i"
      :rect="rect"
    />
  </div>
</template>

<script>
import Rectangle from './Rectangle'

export default {
  components: { Rectangle },

  props: {
    side: Object
  },

  computed: {
    style() {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...this.side.style
      }
    }
  }
}
</script>
