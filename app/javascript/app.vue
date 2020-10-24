<template lang="pug">
#app
  p {{ message }}
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const message = ref("Hello Vue!");

    return {
      message
    };
  }
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
