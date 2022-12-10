<template>

  <private-view title="React: Boilerplate">
    <div ref="react"></div>
  </private-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App'

export default defineComponent({
  mounted() {
    const privateViewShown = setInterval(() => {
      if (!this.$refs.react)
        return;

      ReactDOM.render(React.createElement(App, {}, null), this.$refs.react as HTMLElement)
      clearInterval(privateViewShown);
    }, 5);

  }
});
</script>
