/**
 * 节流指令 一段时间内控制请求的频率
 * 上一次时间触发的时间和这次触发的时间相减 传入节流的时间
 *
 *
 * 应用场景：scroll加载的时候  和input框输入的情况
 */

const throttle = {
  mounted(el, binding) {
    if (typeof binding.value != "function") {
      console.log("callback must be a function");
    }
    let lastTime = 0;

    let newtimer = +new Date(); //拿到当前的时间
    el.__handleClick__ = function () {
      if (newtimer - lastTime > 3000) {
        binding.value();
        lastTime = newtimer;
      }
    };
    el.addEventListener("click", el.__handleClick__);
  },
  beforeUnmount(el) {
    el.removeEventListener("click", el.__handleClick__);
  },
};

export default throttle;
