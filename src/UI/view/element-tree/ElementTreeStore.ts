import { Store} from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import UIConnectorProvider from "../../model/UIConnectorProvider";
Vue.use(Vuex);
const elementTreeStore = new Store({
  state:{
    query:"",
    selectedNodeId:"",
    queryMode:"nodename"
  },
  getters:{
    hasQuery:state=>!!state.query
  },
  mutations:{
    changeQuery(state,query:string):void{
      state.query = query;
    },
    selectNode(state,args:{structureId:string,nodeId:string}):void{
      state.selectedNodeId = args.structureId
      UIConnectorProvider.nodeObserver.setInspectionTarget(args.nodeId);
    },
    setQueryMode(state,queryMode:string):void{
      state.queryMode = queryMode;
    }
  }
});
export default elementTreeStore;
