import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationDescription from "./declaration-description.vue";
import IGrimoireSymbol from "../declarations/IGrimoireSymbol"
import UIConnectorProvider from "../../model/UIConnectorProvider";
import AnimationStore from "./AnimationStore"
@Component({store:AnimationStore,components:{}})
export default class AnimationCtrl extends Vue {
    public mounted():void{
        this.$store.commit("setSymbols",UIConnectorProvider.windowObserver.getDeclarationModel());
    }

    public get hasAnimationPlugin():boolean{
        return this.$store.getters.hasAnimationPlugin;
    }
}
