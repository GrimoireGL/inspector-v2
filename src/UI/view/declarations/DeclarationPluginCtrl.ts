import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import VerticalSeparator from "../common/vertical-separator.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationStore from "./DeclarationStore";
import DeclarationDescription from "./declaration-description.vue";
import { IPluginDeclaration } from "./IGrimoireSymbol";
import Markdown from "vue-markdown";
@Component({ components: {Markdown} })
export default class DeclarationPlugin extends Vue {
    @Prop()
    public target: IPluginDeclaration;

    public repositoryURL: string = "";

    public apiReference: string = "";

    public readme:string = "";

    public mounted(): void {
        this.$watch(() => this.target, this._onTargetChange, { immediate: true });
    }

    private async _onTargetChange(): Promise<void> {
        this.repositoryURL = "";
        this.apiReference = "";
        this.readme = "LOADING...";
        const r = JSON.parse(await this._loadFromURL(`https://unpkg.com/${this.target.fqn}/package.json`));
        let repoURL = "";
        if (typeof r.repository === "string") {
            repoURL = r.repository;
        } else if (r.repository && r.repository.url) {
            repoURL = r.repository.url;
        }
        this.repositoryURL = repoURL;
        this.apiReference = r["api-reference"] ? r["api-reference"] : null;
        this.readme = await this._loadFromURL(`https://unpkg.com/${this.target.fqn}/README.md`);
    }

    private _loadFromURL(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = (args) => {
                resolve(xhr.response);
            };
            xhr.send();
        });
    }
}
