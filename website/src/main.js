import {
  createApp
} from "vue";
import router from "./router/index";
import store from "../src/store/index";
import './styles/common.scss'
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 引入注册自定义指令
import directives from "./instruction/index.js";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./mock/index.js";
import * as ELIcons from "@element-plus/icons-vue";

import VMdEditor from "@kangc/v-md-editor";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

VMdEditor.use(vuepressTheme);

const app = createApp(App);

// 小图标引用
for (const iconName in ELIcons) {
  // 注册组件
  app.component(iconName, ELIcons[iconName]);
}

app.use(router).use(store).use(directives).use(VMdEditor).use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");