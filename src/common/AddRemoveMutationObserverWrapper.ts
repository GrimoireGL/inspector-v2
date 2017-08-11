import {EventEmitter} from "eventemitter3";
export default class AddRemoveMutationObserverWrapper<T extends Element> extends EventEmitter{

  constructor(public target:string){
    super();
  }
  /**
   * Current mutation observer
   */
  private _observer: MutationObserver | null;

  /**
   * Start observing mutation of nodes
   */
  public observe(): void {
    if (!this._observer) {
      this._observer = new MutationObserver(this._onObservingEvent.bind(this));
    }
    this._observer.observe(window.document.body, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  /**
   * Disconnect to observer
   */
  public disconnect(): void {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  }

  public onTargetAdded(t: T): void {
    this.emit("added",t);
  }

  public onTargetRemoved(t: T): void {
    this.emit("removed",t)
  }

  private _onObservingEvent(e: MutationRecord[]): void {
    this._filterTag(e, this.target, true).forEach(i => this.onTargetAdded(i as T));
    this._filterTag(e, this.target, false).forEach(i => this.onTargetRemoved(i as T));
  }

  private _filterTag(records: MutationRecord[], tagName: string, added: boolean): Element[] {
    const result = [] as Element[];
    for (let record of records) {
      let target = added ? record.addedNodes : record.removedNodes;
      target.forEach(tag => {
        if (tag instanceof Element) {
          if (tag.tagName === tagName.toUpperCase()) {
            result.push(tag);
          }
          const queried = tag.getElementsByTagName(tagName);
          for (let i = 0; i < queried.length; i++) {
            result.push(queried.item(i));
          }
        }
      });
    }
    return result;
  }
}
