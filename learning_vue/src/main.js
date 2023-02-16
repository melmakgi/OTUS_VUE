import {createApp} from 'vue'
import App from './App.vue'
import Header from "@/components/global/UHeader.vue";
import Footer from "@/components/global/UFooter.vue";
import globalComponents from './components/global';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const app = createApp(App);
app.use(globalComponents);
app.component('Header', Header);
app.component('Footer', Footer)
app.mount('#app')
