import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import {WindowEvent} from "../../common/WindowEvent";
@Component({})
export default class VerticalSeparator extends Vue{
  @Prop()
  public rightMinSize: string;

  @Prop()
  public leftMinSize: string;

  public currentSize: number = 100;

  public resizing:boolean = false;

  public mounted(){
    this.currentSize = parseFloat(this.rightMinSize);
    this.resizing = false;
  }

  public get rightStyle(){
    return {
      width: `${this.currentSize}px`
    };
  }

  public get detectorStyle(){
    return {
      visibility: this.resizing ? "visible":"collapse"
    }
  }

  public separatorMouseDown(){
    this.resizing = true;
  }
  @WindowEvent("resizing",false,"mouseleave")
  public separatorMouseUp(){
    this.resizing = false;
  }

  //@WindowEvent("resizing",false,"mousemove")
  public separatorMouseMove(e:any){
    if(this.resizing){
      this.currentSize -= e.movementX;
      this.currentSize = Math.max(parseFloat(this.rightMinSize),this.currentSize);
      const maxSize = this.$el.getBoundingClientRect().width - parseFloat(this.leftMinSize)
      this.currentSize = Math.min(maxSize,this.currentSize);
    }
  }
}
