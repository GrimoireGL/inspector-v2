import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
@Component({ components: {} })
export default class Searchbox extends Vue {

    public get toggleSwitches(): { class: string[],selected:boolean,trigger:string }[] {
        return [
            {
                class:["fa fa-fw fa-archive"],
                selected:this.$store.state.showPlugin,
                trigger:"togglePluginVisibility"
            },
            {
                class: ["fa fa-fw fa-cubes"],
                selected:this.$store.state.showNode,
                trigger:"toggleNodeVisibility"
            },
            {
                class: ["fa fa-fw fa-cube"],
                selected:this.$store.state.showComponent,
                trigger:"toggleComponentVisibility"
            },
            {
                class: ["fa fa-fw fa-retweet"],
                selected:this.$store.state.showConverter,
                trigger:"toggleConverterVisibility"
            }
        ];
    }

    public toggle(trigger:string):void{
        this.$store.commit(trigger);
    }

    public onInput():void{
        const input = this.$refs.searchBox as HTMLInputElement;
        this.$store.commit("changeQuery",input.value);
    }
}
