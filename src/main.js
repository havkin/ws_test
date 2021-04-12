import { createApp } from 'vue';
import App from './App.vue';
import VueSimpleWebsocket from 'vue-simple-websocket';
import router from './router';

createApp(App)
  .use(router)
  .use(VueSimpleWebsocket, 'ws://localhost:1338/', {
    reconnectEnabled: true,
    reconnectInterval: 5000
  }).mount('#app');
