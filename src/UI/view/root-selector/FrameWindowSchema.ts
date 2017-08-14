import RootNodeSchema from "./RootNodeSchema";
interface FrameWindowSchema {
  id:string;
  windowLocation: string;
  roots: RootNodeSchema[];
};

export default FrameWindowSchema;
