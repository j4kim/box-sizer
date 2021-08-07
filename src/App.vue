<template>
  <div id="app">
    <h1>Box sizer</h1>

    <div>
      <label for="x">x: </label>
      <input type="number" name="x" v-model="variables.x" min="0">
    </div>
    <div>
      <label for="y">y: </label>
      <input type="number" name="y" v-model="variables.y" min="0">
    </div>
    <div>
      <label for="z">z: </label>
      <input type="number" name="z" v-model="variables.z" min="0">
    </div>
    <div>
      <label for="e">e: </label>
      <input type="number" name="e" v-model="variables.e" min="0">
    </div>

    <main>
      <div class="limit" :style="{ width: `${widthMax}px` }">
        <span class="origin">0</span>
        <side
          v-for="side in config.sides"
          :key="side.name"
          :side="side"
        />
      </div>
    </main>
  </div>
</template>

<script>
import config from './config'
import variables from './variables'
import Side from './Side'
import { sumBy, max } from 'lodash'

export default {
  components: { Side },

  data: () => ({
    config,
    variables
  }),

  computed: {
    widthMax() {
      let sideWidths = config.sides.map(s =>
        sumBy(s.rectangles, r => r.w(variables))
      )
      return max(sideWidths)
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;

  label {
    font-family: monospace;
  }

  main {
    margin-top: 20px;
    padding: 20px;
    background-color: #ddd;
    overflow: auto;
    .limit {
      background-color: #eee;
      margin: 0 auto;
      position: relative;
      .origin {
        font-size: 9px;
        position: absolute;
        top: -9px;
        left: -5px;
      }
    }
  }
}
</style>
