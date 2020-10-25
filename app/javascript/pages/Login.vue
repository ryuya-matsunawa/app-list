<template lang="pug">
.wrapper
  .container
    h1 Welcome
    form.form
      input(type='text' placeholder='Username')
      input(type='password' placeholder='Password')
      button(type='submit' @click="login")
        | Login
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(_, { root: { $router } }) {
    function login() {
      $router.push({name: 'apps'});
    }

    return {
      login
    };
  }
});
</script>
