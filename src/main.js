import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Input, Col, Row, Card, Comment} from "ant-design-vue";

[Button, Input, Col, Row, Card, Comment].forEach(comp => Vue.use(comp));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
