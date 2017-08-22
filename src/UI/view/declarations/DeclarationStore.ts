import { Store } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import UIConnectorProvider from "../../model/UIConnectorProvider";
import IGrimoireSymbol,{INodeDeclaration} from "./IGrimoireSymbol"
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
        currentItemInheritence:state=>{
            // Get all default component considering inheritence
            if(state.selectedItem){
                const items = [] as {fqn:string,by:string}[];
                let current = (state.selectedItem as INodeDeclaration).extendsFrom;
                const findByFQN:(f:string)=>INodeDeclaration|null = (fqn:string)=>{
                    for(let i = 0; i < state.symbols.length; i++){
                        const symbol = state.symbols[i];
                        if(symbol.fqn === fqn){
                            return symbol as INodeDeclaration;
                        }
                    }
                    return null;
                }
                while(current){
                    const currentInstance = findByFQN(current)!;
                    currentInstance.defaultComponents.forEach(f=>items.push({fqn:f,by:currentInstance.fqn}));
                    current = currentInstance.extendsFrom;
                }
                return items;
            }else{
                return null;
            }
        },
        currentItemPackage:state=>{
            if(state.selectedItem && state.selectedItem.type !== "plugin"){
                const packageNamespace = state.selectedItem.fqn.split(".")[0];
                const fqnBeginWith = packageNamespace === "grimoirejs" ? "grimoirejs" : `grimoirejs-${packageNamespace}`
                for(let i = 0; i < state.symbols.length; i++){
                    const symbol = state.symbols[i];
                    if(symbol.fqn.startsWith(fqnBeginWith)){
                        return symbol;
                    }
                }
                return null;
            }
            return null;
        }
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
