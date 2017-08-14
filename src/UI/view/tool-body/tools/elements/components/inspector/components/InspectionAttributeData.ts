import {Serializable} from "ts-serializer";
interface InspectionAttributeData{
  attributeFQN:string;
  converterType:string;
  defaultValue:Serializable;
  obtainedAttributeValue:Serializable;
}

export default InspectionAttributeData;
