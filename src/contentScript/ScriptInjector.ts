export default class ScriptInjectionHelper{
  public static injectScript(srcPath:string,injectionTarget = "head"):void{
    const url = chrome.extension.getURL(srcPath);
    const targetDOM = document.getElementsByTagName(injectionTarget);
    if(targetDOM.length === 0){
      throw new Error(`Specified injection target ${injectionTarget} was not found.`);
    }
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("type","text/javascript");
    scriptTag.setAttribute("x-injectedBy","Grimoire.js inspector v2");
    scriptTag.setAttribute("src",url);
    targetDOM.item(0).appendChild(scriptTag);
  }
}
