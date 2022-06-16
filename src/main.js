import { createApp } from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faYoutube, faFacebook, faTwitter);
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

