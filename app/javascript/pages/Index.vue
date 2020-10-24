<template lang="pug">
.hoge
  .d-flex
    template(v-for="n in 3")
      panel.m-2vw
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Panel from '../components/Panel';

export default defineComponent({
  components: {
    Panel
  }
});
</script>
