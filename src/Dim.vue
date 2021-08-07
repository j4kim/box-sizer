<template>
  <span class="dim">
    {{ value }}
  </span>
</template>

<script>
export default  {
  props: ['value']
}
</script>

<style lang="scss">
.dim {
  font-size: 9px;
  position: absolute;
}
</style>