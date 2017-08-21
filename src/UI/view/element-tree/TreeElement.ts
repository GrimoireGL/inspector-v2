import TreeAttribute from "./TreeAttribute";
interface TreeElement{
  nodeFQN:string;
  attributes:TreeAttribute[];
  componentFQNs:string[];
  children: TreeElement[];
  id:string;
}

export default TreeElement;
