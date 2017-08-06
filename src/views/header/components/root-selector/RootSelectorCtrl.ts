import Vue from 'vue'
import Component from 'vue-class-component'
import WindowElement from './components/window-element.vue';
import WindowSelectorInfo from "./components/WindowSelectorInfo";
import {WindowEvent} from "../../../../common/WindowEvent";
@Component({
  components:{WindowElement}
})
export default class RootSelector extends Vue{
  public windows:WindowSelectorInfo[] = [
    {
      windowName:"(root)",
      roots:[{
        srcURL:"./color/index.goml",
        displayName:".hello#abc123"
      },
      {
        srcURL:"./color/index2.goml",
        displayName:".hello#abc1234"
      }]
    },
    {
      windowName:"https://jsrun.it/sajfbj",
      roots:[{
        srcURL:"./hover/index.goml",
        displayName:".hello#abc12345"
      }]
    }
  ];
  public expand:boolean = false

  @WindowEvent("expand")
  public clicked():void{
    this.expand = !this.expand;
  }
}
