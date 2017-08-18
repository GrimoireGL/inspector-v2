import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    windowId:null,
    rootId:null
  },
  mutations:{
    select(state,args){
        state.windowId = args.windowId;
        state.rootId = args.rootId;
    }
  }
});
