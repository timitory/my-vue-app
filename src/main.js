import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount("#app")





// import { createApp } from 'vue'
// import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import store from './store'

// const app = createApp(App)
// // createApp(App).mount('#app')



// app.mount('#app')