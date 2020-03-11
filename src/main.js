import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@/assets/styles/_custom.scss";

library.add(fas, fab);

// Register axios to use globally
Vue.prototype.$http = axios;

Vue.component("fa-icon", FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
