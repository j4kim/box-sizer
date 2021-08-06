<template>
  <div id="app">
    <h1>Box sizer</h1>

    <div>
      <label for="x">x: </label>
      <input type="number" name="x" v-model="variables.x">
    </div>
    <div>
      <label for="y">y: </label>
      <input type="number" name="y" v-model="variables.y">
    </div>
    <div>
      <label for="z">z: </label>
      <input type="number" name="z" v-model="variables.z">
    </div>
    <div>
      <label for="e">e: </label>
      <input type="number" name="e" v-model="variables.e">
    </div>

    <main :style="{
      padding: '20px',
      backgroundColor: 'lightgray'
    }">
      <side
        v-for="side in config.sides"
        :key="side.name"
        :side="side"
      />
    </main>
  </div>
</template>

<script>
import config from './config'
import variables from './variables'
import Side from './Side'

export default {
  components: { Side },

  data: () => ({
    config,
    variables
  })
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
}
</style>
