const longPress = {
  mounted(el, binding) {
    if (typeof binding.value != "function") {
      console.log("callback must be a function");
    }
    let pressTimer = null;
    let start = (e) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler();
        }, 2000);
      }
    };
    // 取消计时器
    let cancel = () => {
      // 检查计时器是否有值
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e) => {
      // 执行传递给指令的方法
      binding.value(e);
      console.log(e);
    };
    // 添加事件监听器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    el.addEventListener("click", start);
    // 取消计时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  },
};

export default longPress;
