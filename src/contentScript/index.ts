import FrameObserver from "../common/FrameObserver";
import ContentScriptSocket from "../common/sockets/ContentScriptSocket";
const fo = new FrameObserver();
const css = new ContentScriptSocket(window.location.href);
window.addEventListener("message",(e)=>{
  if(e.data.$messageType === void 0 || e.data.$source !== "grimoirejs-inspector-v2"){
    return;
  }
  css.send(e.data.$messageType,e.data);
})
