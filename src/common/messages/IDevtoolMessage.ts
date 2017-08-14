import IMessage from "./IMessage"
interface IDevtoolMessage extends IMessage{
    $tabId:number;
}

export default IDevtoolMessage;