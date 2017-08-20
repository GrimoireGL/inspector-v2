import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Searchbox from "./search-box.vue";
@Component({components:{Searchbox}})
export default class DeclarationHeader extends Vue{

}
