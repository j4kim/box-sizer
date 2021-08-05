<template>
  <div id="app">
    <h1>Box sizer</h1>

    <div>
      <label for="x">x: </label>
      <input type="number" name="x" v-model="x">
    </div>
    <div>
      <label for="y">y: </label>
      <input type="number" name="y" v-model="y">
    </div>
    <div>
      <label for="z">z: </label>
      <input type="number" name="z" v-model="z">
    </div>
    <div>
      <label for="e">e: </label>
      <input type="number" name="e" v-model="e">
    </div>
    <div>
      <label for="b">b: </label>
      <input type="number" name="b" v-model="b">
    </div>

    <main :style="{
      padding: '20px',
      backgroundColor: 'lightgray'
    }">
      <side
        v-for="side in config.sides"
        :key="side.name"
        v-bind="$data"
        :side="side"
      />
    </main>
  </div>
</template>

<script>
import config from './config'
import Side from './Side'

export default {
  components: { Side },

  data: () => ({
    x: 200,
    y: 100,
    z: 50,
    e: 1,
    b: 1,
    config
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
