import TreeAttribute from "./TreeAttribute";
interface TreeElement{
  nodeFQN:string;
  attributes:TreeAttribute[];
  children: TreeElement[];
}

export default TreeElement;
