import InspectionAttributeData from "./InspectionAttributeData";
interface InspectionComponentData{
  id:string;
  componentFQN:string;
  attributes:InspectionAttributeData[];
}

export default InspectionComponentData;
