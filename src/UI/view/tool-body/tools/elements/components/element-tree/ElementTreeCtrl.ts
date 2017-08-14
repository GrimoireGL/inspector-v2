import Component from 'vue-class-component'
import TreeElement from './TreeElement';
import Vue from "vue";
import ElementsTreeNodeElement from "./components/elements-tree-node.vue";
import SearchBox from "./components/search-box.vue";
import ElementTreeStore from "./ElementTreeStore";
@Component({components:{ElementsTreeNodeElement,SearchBox},store:ElementTreeStore})
export default class ElementTree extends Vue {
  public root: TreeElement = {
    nodeFQN: "fundamental.goml",
    attributes: [],
    children: [
      {
        nodeFQN: "fundamental.renderer",
        attributes: [],
        children: [
          {
            nodeFQN: "fundamental.render-scene",
            attributes: [],
            children: []
          }
        ]
      },
      {
        nodeFQN: "fundamental.scene",
        attributes: [],
        children: [
          {
            nodeFQN: "fundamental.camera",
            attributes:[],
            children: []
          },
          {
            nodeFQN: "fundamental.mesh",
            attributes:[],
            children: []
          }
        ]
      }
    ]
  } as any as TreeElement;
}
