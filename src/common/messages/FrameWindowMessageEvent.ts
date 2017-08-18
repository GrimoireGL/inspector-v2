import IMessage from "./IMessage";

interface FrameWindowMessageEvent extends MessageEvent{
    data:IMessage;
}

export default FrameWindowMessageEvent;