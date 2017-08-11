import FrameObserver from "./FrameObserver";
export default class ClientMessageManager{
  public frameObserver:FrameObserver;

  constructor(){
    this.frameObserver = new FrameObserver();
  }
}
