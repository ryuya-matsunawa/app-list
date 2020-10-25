<template lang="pug">
.random-number.mx-auto
  input.border-1vw(
    type="number"
  )
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  
});
</script>

<style lang="scss" scoped>
.random-number {
  height: 50vh;
  width: 50vw;
}
</style>
