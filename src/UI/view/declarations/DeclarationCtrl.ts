import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import DeclarationHeader from "./declarationHeader.vue";
import VerticalSeparator from "../common/vertical-separator.vue";
import PluginContentList from "./plugin-content-list.vue";
import DeclarationStore from "./DeclarationStore";
import DeclarationDescription from "./declaration-description.vue";
@Component({ store: DeclarationStore, components: { DeclarationHeader, VerticalSeparator, PluginContentList,DeclarationDescription } })
export default class Declaration extends Vue {

}
