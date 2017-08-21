import Vue from 'vue'
import Component from 'vue-class-component'
import IPluginContentData from "./IPluginContentData";
import UIConnectorProvider from "../../model/UIConnectorProvider";
@Component({})
export default class PluginContentList extends Vue {
    public contents: IPluginContentData[] = [];

    public mounted():void{
        this.contents = UIConnectorProvider.windowObserver.getDeclarationModel();
    }

    public isVisible(content: IPluginContentData): boolean {
        if ((content.type === "node" && this.$store.state.showNode)
            || (content.type === "component" && this.$store.state.showComponent)
            || (content.type === "converter" && this.$store.state.showConverter)
            || (content.type === "plugin" && this.$store.state.showPlugin)) {
            if (this.$store.getters.hasQuery) {
                return content.fqn.toLowerCase().indexOf(this.$store.state.query.toLowerCase()) > -1;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public getName(data: IPluginContentData): string {
        if(data.type === "plugin"){
            return data.fqn.split("@")[0];
        }
        const splitted = data.fqn.split(".");
        return splitted[splitted.length - 1];
    }

    public getIcon(type: string): string {
        switch (type) {
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
}