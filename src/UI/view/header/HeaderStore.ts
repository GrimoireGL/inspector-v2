import {Store} from "vuex";
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Store({
  state:{
    currentTab:"elements",
    currentSelection:""
  },
  mutations:{
    setCurrentTab:(state,tabName:string)=>state.currentTab = tabName
  }
});
