const setWaterCanvas = (str1, color) => {
  console.log(color);
  const id = "1.23452384164.123412415";
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }
  const can = document.createElement("canvas");
  can.width = 120;
  can.height = 80;
  const cans = can.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180); // 水印旋转角度
  cans.font = "15px Vedana";
  cans.fillStyle = color;
  cans.textAlign = "center";
  cans.textBaseline = "Middle";
  cans.fillText(str1, can.width / 2, can.height);
  const div = document.createElement("div");
  div.id = id;
  div.style.pointerEvents = "none";
  div.style.top = "40px";
  div.style.left = "0px";
  div.style.opacity = "0.15";
  div.style.position = "fixed";
  div.style.zIndex = "100000";
  div.style.width = document.documentElement.clientWidth + "px";
  div.style.height = document.documentElement.clientHeight + "px";
  div.style.background = "url(" + can.toDataURL("image/png") + ") left top repeat";
  document.body.appendChild(div);
  return id;
};

// 创建水印
export function setWatermark(str1, color) {
  let id = setWaterCanvas(str1, color);
  if (document.getElementById(id) === null) {
    id = setWaterCanvas(str1, color);
  }
}
// 清除水印
export function clear() {
  const id = "1.23452384164.123412415";
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }
}
