// This is common main file that is executed on devtool and browser context.
import ValueTypeRegistry from "./common/ValueTypeRegistry";
import BooleanReader from "./UI/view/inspector-subviews/readers/BooleanReader.vue";
import BooleanEditor from "./UI/view/inspector-subviews/editors/BooleanEditor.vue";
import TextView from "./UI/view/inspector-subviews/editors/TextEditor.vue";
import VectorEditor from "./UI/view/inspector-subviews/editors/VectorEditor.vue";
import ColorEditor from "./UI/view/inspector-subviews/editors/ColorEditor.vue"
import ColorReader from "./UI/view/inspector-subviews/readers/ColorReader.vue"
ValueTypeRegistry.registerHandler("math.Angle2D",{editor:TextView});
ValueTypeRegistry.registerHandler("grimoirejs.String",{editor:TextView});
ValueTypeRegistry.registerHandler("grimoirejs.StringArray",{editor:TextView,editorModelFromConvertible:(v:string[])=>{
    if(v===null){
        return null;
    }
    let result = "";
    for(let i = 0; i < v.length; i++){
        if(i !== 0){
            result += " ";
        }
        result += v[i];
    }
    return result;
},
attributeValueToJSONConvertible:v=>v});
ValueTypeRegistry.registerHandler("grimoirejs.Number",{editor:TextView});
ValueTypeRegistry.registerHandler("grimoirejs.Boolean",{reader:BooleanReader,editor:BooleanEditor});
function vectorToJSONConvertible(v:any){
    return v.rawElements;
}
ValueTypeRegistry.registerHandler("math.Rotation3",{editor:VectorEditor,attributeValueToJSONConvertible:(v:any)=>v.eularAngles.rawElements});
ValueTypeRegistry.registerHandler("math.Vector2",{editor:VectorEditor,attributeValueToJSONConvertible:vectorToJSONConvertible});
ValueTypeRegistry.registerHandler("math.Vector3",{editor:VectorEditor,attributeValueToJSONConvertible:vectorToJSONConvertible});
ValueTypeRegistry.registerHandler("math.Vector4",{editor:VectorEditor,attributeValueToJSONConvertible:vectorToJSONConvertible});
ValueTypeRegistry.registerHandler("math.Color3",{editor:ColorEditor,reader:ColorReader,attributeValueToJSONConvertible:vectorToJSONConvertible});
ValueTypeRegistry.registerHandler("math.Color4",{editor:ColorEditor,reader:ColorReader,attributeValueToJSONConvertible:vectorToJSONConvertible});