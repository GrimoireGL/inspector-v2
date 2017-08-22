import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import IGrimoireSymbol from "./IGrimoireSymbol";
@Component({components:{}})
export default class DeclarationDescriptionHeader extends Vue{
    @Prop()
    public target:IGrimoireSymbol;

    public get typeIcon():string{
        switch(this.target.type){
            case "node":
                return "fa-cubes";
            case "component":
                return "fa-cube";
            case "converter":
                return "fa-retweet";
            case "plugin":
                return "fa-archive";
            default:
                return "";
        }
    }

    public get typeName():string{
        let name = this.target.type;
        name = name[0].toUpperCase() + name.substr(1);
        return name;
    }

    public get displayName():string{
        if(this.target.type === "plugin"){
            return this.target.fqn.split("@")[0];
        }
        const splitted = this.target.fqn.split(".");
        const name = splitted[splitted.length - 1];
        if(this.target.type === "converter"){
            return name;
        }else{
            return `<${name}>`;
        }
    }

    public get fqnName():string{
        if(this.target.type === "plugin"){
            return "@"+this.target.fqn.split("@")[1];
        }
        return this.target.fqn;
    }
}
