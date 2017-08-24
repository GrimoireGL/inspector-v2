// This is common main file that is executed on devtool and browser context.
import ValueTypeRegistry from "./common/ValueTypeRegistry";
import BooleanReader from "./UI/view/inspector-subviews/readers/BooleanReader.vue";
import BooleanEditor from "./UI/view/inspector-subviews/editors/BooleanEditor.vue";
import TextView from "./UI/view/inspector-subviews/editors/TextEditor.vue";
import VectorEditor from "./UI/view/inspector-subviews/editors/VectorEditor.vue";
import ColorEditor from "./UI/view/inspector-subviews/editors/ColorEditor.vue"
import ColorReader from "./UI/view/inspector-subviews/readers/ColorReader.vue"
import {isFloat} from "validator";
ValueTypeRegistry.registerHandler("math.Angle2D", { editor: TextView,attributeValueToJSONConvertible:(v:number)=>v /( Math.PI) * 180,editorModelTOJSONConvertible:(v:number)=>v/180 * Math.PI });
ValueTypeRegistry.registerHandler("grimoirejs.String", { editor: TextView});
ValueTypeRegistry.registerHandler("grimoirejs.StringArray", { editor: TextView, editorModelFromConvertible: (v: string[]) => v === null ? null : v.reduce((a, b) => a + " " + b),attributeValueToJSONConvertible:v => v});
ValueTypeRegistry.registerHandler("grimoirejs.Number", { editor: TextView,isValidInputOnEditor:(v:string)=>isFloat(v) });
ValueTypeRegistry.registerHandler("grimoirejs.Boolean", { reader: BooleanReader, editor: BooleanEditor });
ValueTypeRegistry.registerHandler("math.Rotation3", { editor: VectorEditor, attributeValueToJSONConvertible: (v: any) => v.eularAngles.rawElements });
ValueTypeRegistry.registerHandler(["math.Vector2","math.Vector3","math.Vector4"], { editor: VectorEditor, attributeValueToJSONConvertible: (v:any)=>v.rawElements,isValidInputOnEditor:(v:string[])=>v.filter((e:string)=>!isFloat(e)).length === 0 });
ValueTypeRegistry.registerHandler(["math.Color3","math.Color4"], { editor: ColorEditor, reader: ColorReader, attributeValueToJSONConvertible: (v:any)=>v.rawElements });
ValueTypeRegistry.registerHandler("fundamental.Texture", { editor: TextView, usePreConvertValueInstead:true});
ValueTypeRegistry.registerHandler("fundamental.Geometry", { editor: TextView, usePreConvertValueInstead:true});
ValueTypeRegistry.registerHandler("fundamental.Material", { editor: TextView, usePreConvertValueInstead:true});
