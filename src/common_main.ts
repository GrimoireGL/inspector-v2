// This is common main file that is executed on devtool and browser context.
import ValueTypeRegistry from "./common/ValueTypeRegistry";
import BooleanReader from "./UI/view/inspector-subviews/readers/BooleanReader.vue";
import BooleanEditor from "./UI/view/inspector-subviews/editors/BooleanEditor.vue";
import TextView from "./UI/view/inspector-subviews/editors/TextEditor.vue";
ValueTypeRegistry.registerHandler("core.String",{editor:TextView});
ValueTypeRegistry.registerHandler("core.Boolean",{reader:BooleanReader,editor:BooleanEditor});
