import Component from 'vue-class-component'
import TreeElement from './TreeElement';
import Vue from "vue";
import ElementsTreeNodeElement from "./elements-tree-node.vue";
import SearchBox from "./search-box.vue";
import ElementTreeStore from "./ElementTreeStore";
import UIConnectorProvider from "../../model/UIConnectorProvider";
@Component({components:{ElementsTreeNodeElement,SearchBox},store:ElementTreeStore})
export default class ElementTree extends Vue {
  public root: TreeElement = {attributes:[],nodeFQN:"empty",children:[],id:"(empyty)"};

  public mounted():void{
    this.root = UIConnectorProvider.nodeObserver.rootElement;
  }
}
