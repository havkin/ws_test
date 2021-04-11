import { createApp } from 'vue';
import App from './App.vue';
import VueSimpleWebsocket from 'vue-simple-websocket';

createApp(App)
  .use(VueSimpleWebsocket, 'ws://localhost:1338/', {
    reconnectEnabled: true,
    reconnectInterval: 5000
  }).mount('#app');
