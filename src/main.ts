import DevtoolAll from "./views/devtool-all";
import ValueTypeRegistry from "./common/ValueTypeRegistry";
import TextView from "./views/inspector-subviews/editors/TextEditor.vue";
import BooleanReader from "./views/inspector-subviews/readers/BooleanReader.vue";
import BooleanEditor from "./views/inspector-subviews/editors/BooleanEditor.vue";
ValueTypeRegistry.registerHandler("core.String",{editor:TextView});
ValueTypeRegistry.registerHandler("core.Boolean",{reader:BooleanReader,editor:BooleanEditor});
DevtoolAll("#devtool");
