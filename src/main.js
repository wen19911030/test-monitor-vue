// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
    .config('https://a0dcf727f93e40c4a7b1c47f414ab8ab@sentry.io/1243650', {
        release: process.env.RELEASE_VERSION,
        debug: true
    })
    .addPlugin(RavenVue, Vue)
    .install();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})