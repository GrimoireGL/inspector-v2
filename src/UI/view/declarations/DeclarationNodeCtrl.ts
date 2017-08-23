import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import VerticalSeparator from "../common/vertical-separator.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationStore from "./DeclarationStore";
import DeclarationDescription from "./declaration-description.vue";
import { INodeDeclaration, IComponentInheritence } from "./IGrimoireSymbol";
import { DeclarationFilter } from "./DeclarationFilter";
@Component({ components: {} })
export default class DeclarationNode extends Vue {
    @Prop()
    public target:INodeDeclaration;

    public get superNode():string|null{
        return this.target.extendsFrom?this.target.extendsFrom:"(None)";
    }

    public get hasExtend():boolean{
        return this.target.extendsFrom !== null;
    }

    public get packageFQN():string{
        const plugin = (this.$store.getters.filter as DeclarationFilter).getPackageNameFromSymbol(this.target);
        return (plugin ? plugin.fqn : "(Unknown)");
    }

    public toShortName(fqn:string):string{
        const splitted = fqn.split(".");
        return splitted[splitted.length - 1];
    }

    public goToSuperNode():void{
        if(this.target.extendsFrom){
            this.$store.commit("selectByFQN",this.target.extendsFrom);
        }
    }

    public get defaultComponentByInheritence():IComponentInheritence[]{
        return (this.$store.getters.filter as DeclarationFilter).getComponentInheritenceByNode(this.target);
    }

    public openByFQN(fqn:string):void{
        this.$store.commit("selectByFQN",fqn);
    }
}
