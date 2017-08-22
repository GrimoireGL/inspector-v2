import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import DeclarationDescriptionHeader from "./declaration-description-header.vue";
import IPluginContent from "./IGrimoireSymbol";
import DeclarationNode from "./declaration-node.vue"
import DeclarationComponent from "./declaration-component.vue";
import DeclarationPlugin from "./declaration-plugin.vue";
@Component({ components: { DeclarationDescriptionHeader } })
export default class DeclarationDescription extends Vue{
    public get contentSelected():boolean{
        return this.$store.getters.selected;
    }

    public get currentContent():IPluginContent{
        return this.$store.state.selectedItem;
    }

    public get contentViewer():typeof Vue|null{
        switch(this.currentContent.type){
            case "node":
                return DeclarationNode;
            case "component":
                return DeclarationComponent;
            case "plugin":
                return DeclarationPlugin;
            default:
                return null;
        }
    }
}
