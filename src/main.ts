import DevtoolAll from "./views/devtool-all";
import ValueTypeRegistry from "./common/ValueTypeRegistry";
import TextView from "./views/inspector-subviews/editors/TextEditor.vue";
import BooleanReader from "./views/inspector-subviews/readers/BooleanReader.vue";
import BooleanEditor from "./views/inspector-subviews/editors/BooleanEditor.vue";
import Frameobserver from "./common/FrameObserver";
ValueTypeRegistry.registerHandler("core.String",{editor:TextView});
ValueTypeRegistry.registerHandler("core.Boolean",{reader:BooleanReader,editor:BooleanEditor});
DevtoolAll("#devtool");
// const fo = new Frameobserver();
// (window as any).fo = fo;
// fo.observe();
