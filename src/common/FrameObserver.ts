import {EventEmitter} from "eventemitter3";
export default class FrameObserver extends EventEmitter {
  private _observers: Map<Window,MutationObserver> = new Map<Window,MutationObserver>();

  public observe(window: Window): void {
    if(!this._observers.has(window)){
      this._observers.set(window,new MutationObserver(this._onObservingEvent.bind(this)));
    }
    this._observers.get(window)!.observe(window.document.body,{
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  public disconnect(window: Window): void {
    if(this._observers.has(window)){
      this._observers.get(window)!.disconnect();
    }
  }

  private _onObservingEvent(e: MutationRecord[]): void {
    console.log(this._filterTag(e,"iframe",true).map((i:HTMLIFrameElement)=>i.contentWindow));
  }

  private _filterTag(records: MutationRecord[],tagName: string, added: boolean): Element[] {
    const result = [] as Element[];
    for(let record of records){
      let target = added ? record.addedNodes : record.removedNodes;
      target.forEach(tag=>{
        if(tag instanceof Element){
          if(tag.tagName === tagName.toUpperCase()){
            result.push(tag);
          }
          const queried = tag.getElementsByTagName(tagName);
          for(let i = 0; i < queried.length; i++){
            result.push(queried.item(i));
          }
        }
      });
    }
    return result;
  }
}
