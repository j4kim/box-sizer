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

    <div style="margin-top:20px">
      <div :style="{
        width: `${x}mm`,
        height: `${y}mm`,
        border: '1px solid black'
      }">
        {{ x }} x {{ y }} mm
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    x: 0,
    y: 0,
    z: 0,
    e: 0
  })
}
</script>

<style lang="scss">
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
