import { createApp } from 'vue'
// import pinia to use the store    - Stephen L 
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import 'bulma/css/bulma.css' // Import Bulma CSS 8:25pm Stephen L

// Create the Vue app instance - Stephen L
const app = createApp(App)

// Use Pinia for state management - Stephen L
app.use(createPinia())

// Mount the app to the DOM - Stephen L
app.mount('#app')
