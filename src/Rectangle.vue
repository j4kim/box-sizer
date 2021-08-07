<template>
  <div
    class="rectangle"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      ...rect.style
    }"
  >
    <div class="caption">
      {{ width.toFixed(1) }}
    </div>
  </div>
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

<style lang="scss" scoped>
div.rectangle{
  background-color: white;
  border: 1px solid #666;
  flex-shrink: 0;
  position: relative;
  div.caption{
    width: 100%;
    font-size: 9px;
    text-align: center;
    position: absolute;
    bottom: 0;
  }
}
</style>