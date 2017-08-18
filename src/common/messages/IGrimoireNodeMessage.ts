import IMessage from "./IMessage";
import GomlNode from "grimoirejs/ref/Node/GomlNode";
interface IGrimoireNodeMessage extends IMessage{
    $targetRoot:GomlNode;
}

export default IGrimoireNodeMessage;