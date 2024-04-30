import draggable from "./modules/draggable";
import copy from "./modules/copy";
import debounce from "./modules/debounce";
import longPress from "./modules/longPress";
import throttle from "./modules/throttle";

const directivesList = {
  draggable,
  copy,
  debounce,
  longPress,
  throttle
};

const directives = {
  install: function (app) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;