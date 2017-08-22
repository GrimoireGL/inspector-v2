import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import VerticalSeparator from "../common/vertical-separator.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationStore from "./DeclarationStore";
import DeclarationDescription from "./declaration-description.vue";
import IGrimoireSymbol from "./IGrimoireSymbol"
import UIConnectorProvider from "../../model/UIConnectorProvider";
@Component({ store: DeclarationStore, components: { DeclarationHeader, VerticalSeparator, PluginContentList, DeclarationDescription } })
export default class Declaration extends Vue {
    public get symbols():IGrimoireSymbol[]{
        return this.$store.state.symbols;
    }

    public mounted():void{
        this.$store.commit("setSymbols",UIConnectorProvider.windowObserver.getDeclarationModel());
    }
}
