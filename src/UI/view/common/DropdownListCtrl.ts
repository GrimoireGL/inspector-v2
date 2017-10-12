import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
import { WindowEvent } from "../../../common/WindowEvent";
@Component({})
export default class DropdownListCtrl extends Vue {
    /**
     * Single list element
     */
    @Prop({})
    public elementComponent: typeof Vue;

    /**
     * component data to display
     */
    @Prop({})
    public data: any[];

    /**
     * Index of selected list element
     */
    @Prop({})
    public selectedIndex: number | null = null;

    public onElementSelected(index: number): void {
        this.$emit("select", {
            index: index,
            data: this.data[index],
            lastIndex: this.selectedIndex,
            lastData: this.selectedIndex !== null ? this.data[this.selectedIndex] : null
        });
    }
}
