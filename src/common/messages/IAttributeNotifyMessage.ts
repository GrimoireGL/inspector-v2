import IMessage from "./IMessage";
import InspectionAttributeData from "../../UI/view/inspector/InspectionAttributeData"
export interface IChangedAttribute{
    componentId:string;
    attributeFQN:string;
    attributeData:InspectionAttributeData;
}

interface IAttributeNotifyMessage extends IMessage{
    mutations:IChangedAttribute[];
}

export default IAttributeNotifyMessage;