import IDevtoolMessage from "../common/messages/IDevtoolMessage";
/**
 * Store connections between background script and devtool
 */
export default class DevtoolConnectionRegistry{

  private _ports:chrome.runtime.Port[] = [];

  private _establishedPorts:{[tabId:number]:chrome.runtime.Port} = {};

  constructor(){
    chrome.runtime.onConnect.addListener(this._onConnect.bind(this));
    chrome.tabs.onUpdated.addListener(this._onTabUpdated.bind(this));
  }

  /**
   * Pass message from content script
   */
  public passThroughMessage(message:any,sender:chrome.runtime.MessageSender):void{
    if(message.$source === "grimoirejs-inspector-v2" && sender.tab && this._establishedPorts[sender.tab!.id!]){
      this._establishedPorts[sender.tab!.id!].postMessage(message);
    }
  }

  private _onConnect(port:chrome.runtime.Port):void{
    this._ports.push(port);
    port.onMessage.addListener(this._onMessage.bind(this));
    port.onDisconnect.addListener(this._onDisconnect.bind(this));
  }

  private _onDisconnect(port:chrome.runtime.Port):void{
    const index = this._ports.indexOf(port);
    this._ports.splice(index,1);
    for(let key in this._establishedPorts){
      if(this._establishedPorts[key] === port){
        delete this._establishedPorts[key];
        return;
      }
    }
  }

  private _onMessage(message:IDevtoolMessage,port:chrome.runtime.Port):void{
    if(message.$tabId && message.$source === "grimoirejs-inspector-v2"){
      if(!this._establishedPorts[message.$tabId]){
        // Memorize specified tabId is current port
        this._establishedPorts[message.$tabId] = port;
      }
      chrome.tabs.sendMessage(message.$tabId,message);
    }
  }

  private _onTabUpdated(tabId:number,changedInfo:chrome.tabs.TabChangeInfo):void{
    if(this._establishedPorts[tabId] && changedInfo.status === "complete"){
      this._establishedPorts[tabId].postMessage({
        $source:"grimoirejs-inspector-v2",
        $messageType:"meta-tab-reload"
      });
    }
  }
}
