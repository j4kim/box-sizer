<template>
  <div class="side" :style="style">
    <rectangle
      v-for="(rect, i) in side.rectangles"
      :key="i"
      v-bind="$props"
      :rect="rect"
    />
  </div>
</template>

<script>
import Rectangle from './Rectangle'

export default {
  components: { Rectangle },

  props: {
    x: [Number, String],
    y: [Number, String],
    z: [Number, String],
    e: [Number, String],
    b: [Number, String],
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
