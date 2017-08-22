import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import { IComponentDeclaration } from "./IGrimoireSymbol";
@Component({ components: {} })
export default class DeclarationComponentCtrl extends Vue{
    @Prop()
    public target:IComponentDeclaration;


    public get packageFQN():string{
        return this.$store.getters.currentItemPackage.fqn;
    }
}
