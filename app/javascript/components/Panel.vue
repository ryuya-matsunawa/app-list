<template lang="pug">
.panel
  .title
    | {{ title }}
  .panel-body
    // TODO : 写真とか説明とか入る想定
  .panel-footer
    button.btn-radius-solid(@click="goApp(name)")
      | PLAY!
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      requierd: false,
      default: 'aaa'
    },
    name: {
      type: String,
      requierd: false,
      default: 'random-number'
    }
  },
  setup(_, { root: { $router } }) {
    function goApp(name) {
      $router.push({name: name})
    }
    return {
      goApp
    }
  }
});
</script>
