import TreeElement from "../UI/view/element-tree/TreeElement";
import GomlNode from "grimoirejs/ref/Node/GomlNode";
import Component from "grimoirejs/ref/Node/Component";
import Attribute from "grimoirejs/ref/Node/Attribute";
import InspectionData from "../UI/view/inspector/InspectionData";
import InspectionComponentData from "../UI/view/inspector/InspectionComponentData";
import InspectionAttributeData from "../UI/view/inspector/InspectionAttributeData";
import ValueTypeRegistry from "./ValueTypeRegistry";
import Ensure from "grimoirejs/ref/Base/Ensure";
/**
 * Provides some methods to convert Grimoire classes into serializable ViewModel.
 */
export default class GrimoireToViewModelConverter{
    public static convertNode(node:GomlNode):TreeElement{
        const children:TreeElement[] = [];
        node.children.forEach(n=>children.push(GrimoireToViewModelConverter.convertNode(n)));
        return {
            nodeFQN:node.name.fqn,
            attributes:[],
            children:children,
            id:node.id
        };
    }

    public static convertInspectionData(node:GomlNode):InspectionData{
        const components = [] as InspectionComponentData[];
        const rawComponents = node.getComponents(Component);
        return {
            nodeFQN:node.name.fqn,
            components:rawComponents.map(c=>GrimoireToViewModelConverter.convertInspectionComponentData(c))
        };
    }

    private static convertInspectionComponentData(component:Component):InspectionComponentData{
        return {
            id:component.id,
            componentFQN:component.name.fqn,
            attributes:component.attributes.toArray().map(a=>GrimoireToViewModelConverter.convertInspectionAttributeData(a))
        };
    }

    public static convertInspectionAttributeData(attribute:Attribute):InspectionAttributeData{
        const converterName = Ensure.tobeFQN(attribute.converter.name)!;
        const converterType = ValueTypeRegistry.get(converterName);
        let defaultAttr = null;
        let attributeAttr = null;
        let errorText = undefined;
        try{
            defaultAttr = converterType.attributeValueToJSONConvertible!(attribute.converter.convert(attribute.declaration.default,attribute));
            attributeAttr = converterType.attributeValueToJSONConvertible!(attribute.Value);
        }catch(e){
            errorText = (e as Error).message;
        }
        return {
            attributeFQN:attribute.name.fqn,
            converterType:converterName,
            obtainedAttributeValue:attributeAttr,
            defaultValue:defaultAttr,
            errorText:errorText
        };
    }
}