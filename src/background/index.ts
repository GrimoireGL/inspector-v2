///<reference path="../../node_modules/@types/filewriter/index.d.ts"/>
///<reference path="../../node_modules/@types/filesystem/index.d.ts"/>
///<reference path="../../node_modules/@types/chrome/index.d.ts"/>
import DevtoolConnectionRegistry from "./DevtoolConnectionRegistry";
const dcr = new DevtoolConnectionRegistry();
chrome.runtime.onMessage.addListener((request,sender)=>{
  dcr.passThroughMessage(request,sender);
});
