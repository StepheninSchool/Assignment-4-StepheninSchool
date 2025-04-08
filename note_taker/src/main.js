import { createApp } from 'vue';
import { createPinia } from 'pinia'; // import pinia to use the store    - Stephen L 
import App from './App.vue';
import router from './router';

import 'bulma/css/bulma.min.css'; // Import Bulma CSS 8:25pm Stephen L

// Create the Vue app instance - Stephen L
const app = createApp(App);

// Use Pinia for state management - Stephen L
app.use(createPinia());

// Use router for navigation
app.use(router);

// Mount the app to the DOM - Stephen L
app.mount('#app');

