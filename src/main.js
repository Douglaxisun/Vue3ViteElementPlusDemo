import {createApp} from "vue"
import App from "./App.vue"
import router from "./moudles/router"
import pinia from "./moudles/pinia"

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount("#app")