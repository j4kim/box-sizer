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
      <model/>
    </main>
  </div>
</template>

<script>
import variables from './variables'
import Model from './Model'

export default {
  components: { Model },

  data: () => ({
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

  main {
    margin-top: 20px;
    padding: 20px;
    background-color: #ddd;
    overflow: auto;
  }
}
</style>
