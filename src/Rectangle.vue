<template>
  <div
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      border: `1px solid black`,
      flexShrink: 0
    }"
  />
</template>

<script>
export default {
  props: {
    rect: Object
  },

  computed: {
    width() {
      return this.rect.w(this.$attrs)
    },
    height() {
      return this.rect.h(this.$attrs)
    }
  }
}
</script>
