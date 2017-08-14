import IMessage from "./IMessage";

interface GrimoireMessageEvent extends MessageEvent{
    data:IMessage;
}

export default GrimoireMessageEvent;