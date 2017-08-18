import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    query:""
  },
  getters:{
    hasQuery:(state)=>!!state.query
  },
  mutations:{
    setQuery:(state,query)=>state.query = query
  }
});
