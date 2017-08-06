import Component from 'vue-class-component'
import TreeElement from './TreeElement';
import Vue from "vue";
import ElementsTreeNodeElement from "./components/elements-tree-node.vue";
import SearchBox from "./components/search-box.vue";
@Component({components:{ElementsTreeNodeElement,SearchBox}})
export default class ElementTree extends Vue {
  public root: TreeElement = {
    nodeName: "goml",
    attributes: [],
    children: [
      {
        nodeName: "renderer",
        attributes: [],
        children: [
          {
            nodeName: "render-scene",
            attributes: [],
            children: []
          }
        ]
      },
      {
        nodeName:"scene",
        attributes: [],
        children: [
          {
            nodeName:"camera",
            attributes:[],
            children: []
          },
          {
            nodeName:"mesh",
            attributes:[],
            children: []
          }
        ]
      }
    ]
  } as any as TreeElement;
}
