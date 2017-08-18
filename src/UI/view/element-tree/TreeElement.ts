import TreeAttribute from "./TreeAttribute";
interface TreeElement{
  nodeFQN:string;
  attributes:TreeAttribute[];
  children: TreeElement[];
  id:string;
}

export default TreeElement;
