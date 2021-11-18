import { createApp } from "vue";

import App from "./App.vue";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
import ThirdComponent from "./components/ThirdComponent.vue";

const app = createApp(App);

app.component("first-component", FirstComponent);
app.component("second-component", SecondComponent);
app.component("third-component", ThirdComponent);

app.mount("#header");
