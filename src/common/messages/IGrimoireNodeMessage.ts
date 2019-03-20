import IMessage from "./IMessage";
import GomlNode from "grimoirejs/ref/Core/GomlNode";
interface IGrimoireNodeMessage extends IMessage {
    $targetRoot: GomlNode;
}

export default IGrimoireNodeMessage;