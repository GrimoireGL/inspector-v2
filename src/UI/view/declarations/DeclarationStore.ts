import { Store } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import UIConnectorProvider from "../../model/UIConnectorProvider";
import IGrimoireSymbol,{INodeDeclaration} from "./IGrimoireSymbol"
import { DeclarationFilter } from "./DeclarationFilter";
Vue.use(Vuex);
const declarationStore = new Store({
    state: {
        query: "",
        showNode: true,
        showComponent: true,
        showConverter: true,
        showPlugin:true,
        symbols:[] as IGrimoireSymbol[],
        selectedItem:null as (null | IGrimoireSymbol)
    },
    getters: {
        hasQuery: state => !!state.query,
        selected: state=>state.selectedItem !== null,
        filter: state => new DeclarationFilter(state.symbols),
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
        },
        togglePluginVisibility(state):void{
            state.showPlugin = !state.showPlugin;
        },
        select(state,item):void{
            state.selectedItem = item;
        },
        selectByFQN(state,fqn):void{
            for(let i = 0; i < state.symbols.length; i++){
                const symbol = state.symbols[i];
                if(symbol.fqn === fqn){
                    state.selectedItem = symbol;
                }
            }
        },
        setSymbols(state,item):void{
            state.symbols = item;
        }
    }
});
export default declarationStore;
