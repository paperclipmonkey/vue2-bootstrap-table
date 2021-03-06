/*
Vue app configuration
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './index' // Compositor

// Optionally Register custom components as globally available
// Vue.component('grid', Grid)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <app></app>
    </div>
    `,
  components: {App}
})
