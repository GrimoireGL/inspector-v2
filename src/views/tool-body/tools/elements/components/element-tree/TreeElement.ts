import TreeAttribute from "./TreeAttribute";
interface TreeElement{
  nodeName:string;
  attributes:TreeAttribute[];
  children: TreeElement[];
}

export default TreeElement;
