import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import 'styles/resets.css';
import 'styles/border.css';
import 'styles/common.scss';
import 'js/fastclick.js';
import 'js/common.js';
import 'styles/iconfont.css';

const app = createApp(App);

app.use(router);
app.use(store)

app.mount('#app');
