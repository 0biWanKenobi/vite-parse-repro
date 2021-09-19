import Parse from "parse";
import { createApp } from "vue";
import App from "./App.vue";

Parse.initialize("someappid");

createApp(App).mount("#app");
