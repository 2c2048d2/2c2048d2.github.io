import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'

import 'highlight.js/styles/a11y-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

createApp(App)
    .use(hljsVuePlugin)
    .use(router)
    .mount('#app')
