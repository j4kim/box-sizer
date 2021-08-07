<template>
  <div class="model" :style="{ width: `${widthMax}px` }">
    <dim value="0"/>
    <side
      v-for="side in config.sides"
      :key="side.name"
      :side="side"
    />
  </div>
</template>

<script>
import config from './config'
import variables from './variables'
import Side from './Side'
import Dim from './Dim'
import { sumBy, max } from 'lodash'

export default {
  components: { Side, Dim },

  computed: {
    widthMax() {
      let sideWidths = config.sides.map(s =>
        sumBy(s.rectangles, r => r.w(variables))
      )
      return max(sideWidths)
    },
    config: () => config,
  }
}
</script>

<style lang="scss">
.model {
  background-color: #eee;
  margin: 0 auto;
  position: relative;
}
</style>