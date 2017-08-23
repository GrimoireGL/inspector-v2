import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import { IComponentDeclaration } from "./IGrimoireSymbol";
import { DeclarationFilter } from "./DeclarationFilter";
@Component({ components: {} })
export default class DeclarationComponentCtrl extends Vue{
    @Prop()
    public target:IComponentDeclaration;

    public get packageFQN():string{
        const plugin = (this.$store.getters.filter as DeclarationFilter).getPackageNameFromSymbol(this.target);
        return (plugin ? plugin.fqn : "(Unknown)");
    }
}
