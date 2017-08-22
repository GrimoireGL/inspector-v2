import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import VerticalSeparator from "../common/vertical-separator.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationStore from "./DeclarationStore";
import DeclarationDescription from "./declaration-description.vue";
import { INodeDeclaration } from "./IGrimoireSymbol";
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

    public toShortName(fqn:string):string{
        const splitted = fqn.split(".");
        return splitted[splitted.length - 1];
    }

    public goToSuperNode():void{
        if(this.target.extendsFrom){
            this.$store.commit("selectByFQN",this.target.extendsFrom);
        }
    }

    public get defaultComponentByInheritence():{fqn:string,by:string}[]{
        return this.$store.getters.currentItemInheritence;
    }

    public openByFQN(fqn:string):void{
        this.$store.commit("selectByFQN",fqn);
    }
}
