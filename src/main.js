import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "vue-query";

const app = createApp(App)

app.use(VueQueryPlugin);
app.use(createPinia());
app.use(router);
app.use(Toast);


app.mount('#app')
