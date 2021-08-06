<template>
  <div
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: 'white',
      border: `1px solid #666`,
      flexShrink: 0
    }"
  />
</template>

<script>
import variables from './variables'

export default {
  props: {
    rect: Object
  },

  computed: {
    width() {
      return this.rect.w(variables)
    },
    height() {
      return this.rect.h(variables)
    }
  }
}
</script>
