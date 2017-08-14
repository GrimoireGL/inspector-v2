import FrameObserver from "./FrameObserver";
import ContentScriptSocket from "../common/sockets/ContentScriptSocket";
import ScriptInjector from "./ScriptInjector";
import GrimoireMessageEvent from "../common/messages/GrimoireMessageEvent";
const css = new ContentScriptSocket(window.location.href);
const fo = new FrameObserver(css);
// Pass messages to background from embed script
window.addEventListener("message", (e: GrimoireMessageEvent) => {
  if (e.data.$messageType === void 0 || e.data.$fromBackend) {
    return;
  }
  if (e.data.$source === "grimoirejs-inspector-v2") {
    // Message from embedded script should be passed to backgroundscript
    css.send(e.data.$messageType, e.data);
  } else if (e.data.$source === "grimoirejs") {
    // Message from library
    if (e.data.$messageType === "library-loading") {
      ScriptInjector.injectScript("../../dist/embed.js"); // TODO
    }
  }
});
