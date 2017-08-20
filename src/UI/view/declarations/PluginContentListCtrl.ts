import Vue from 'vue'
import Component from 'vue-class-component'
import IPluginContentData from "./IPluginContentData";
@Component({})
export default class PluginContentList extends Vue {
    public contents: IPluginContentData[] = [{
        fqn: "fundamental.mesh",
        type: "node"
    },
    {
        fqn: "fundamental.Transform",
        type: "component"
    },
    {
        fqn: "fundamental.Position",
        type: "converter"
    },
    ];

    public isVisible(content: IPluginContentData): boolean {
        if ((content.type === "node" && this.$store.state.showNode)
            || (content.type === "component" && this.$store.state.showComponent)
            || (content.type === "converter" && this.$store.state.showConverter)) {
            if (this.$store.getters.hasQuery) {
                return content.fqn.toLowerCase().indexOf(this.$store.state.query.toLowerCase()) > -1;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public getName(str: string): string {
        const splitted = str.split(".");
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
            default:
                return "";
        }
    }
}