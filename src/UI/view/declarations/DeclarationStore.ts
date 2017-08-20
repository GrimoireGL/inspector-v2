import { Store } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import UIConnectorProvider from "../../model/UIConnectorProvider";
Vue.use(Vuex);
const declarationStore = new Store({
    state: {
        query: "",
        showNode: true,
        showComponent: true,
        showConverter: true
    },
    getters: {
        hasQuery: state => !!state.query
    },
    mutations: {
        changeQuery(state, query: string): void {
            state.query = query;
        },
        toggleNodeVisibility(state): void {
            state.showNode = !state.showNode;
        },
        toggleComponentVisibility(state): void {
            state.showComponent = !state.showComponent;
        },
        toggleConverterVisibility(state): void {
            state.showConverter = !state.showConverter;
        }
    }
});
export default declarationStore;
