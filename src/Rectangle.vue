<template>
  <div
    class="rectangle"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      ...rect.style
    }"
  >
    <dim :value="width.toFixed(1)"/>
  </div>
</template>

<script>
import variables from './variables'
import Dim from './Dim'

export default {
  components: { Dim },

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

<style lang="scss" scoped>
div.rectangle{
  background-color: white;
  border: 1px solid #666;
  flex-shrink: 0;
  position: relative;
}
</style>