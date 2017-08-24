import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import {WindowEvent} from "../../../common/WindowEvent";
@Component({})
export default class VerticalSeparator extends Vue{
  @Prop()
  public rightMinSize: string;

  @Prop()
  public leftMinSize: string;

  @Prop({default:null})
  public lengthFromLeft:number|null;

  public resizing:boolean = false;

  private currentSizeBackingField:number = 100;

  public get currentSize():number{
    if(this.lengthFromLeft === null){
      return this.currentSizeBackingField;
    }else{
      return this.lengthFromLeft;
    }
  }

  public mounted(){
    this.currentSizeBackingField = (this.lengthFromLeft ? this.lengthFromLeft:parseFloat(this.rightMinSize));
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

  public separatorMouseMove(e:any){
    if(this.resizing){
      this.currentSizeBackingField -= e.movementX;
      this.currentSizeBackingField = Math.max(parseFloat(this.rightMinSize),this.currentSizeBackingField);
      const maxSize = this.$el.getBoundingClientRect().width - parseFloat(this.leftMinSize)
      this.currentSizeBackingField = Math.min(maxSize,this.currentSizeBackingField);
      this.$emit("resize",this.currentSizeBackingField);
    }
  }
}
