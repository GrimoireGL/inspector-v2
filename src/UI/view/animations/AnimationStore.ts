import { Store } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import UIConnectorProvider from "../../model/UIConnectorProvider";
import IGrimoireSymbol,{INodeDeclaration} from "../declarations/IGrimoireSymbol"
Vue.use(Vuex);
const declarationStore = new Store({
    state: {
        symbols:[] as IGrimoireSymbol[],
    },
    getters: {
        hasAnimationPlugin:state=>state.symbols.filter(s=>s.type === "plugin" && s.fqn.startsWith("grimoirejs-animation")).length > 0
    },
    mutations: {
        setSymbols(state,item):void{
            state.symbols = item;
        }
    }
});
export default declarationStore;
