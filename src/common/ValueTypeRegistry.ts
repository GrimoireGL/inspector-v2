import ValueTypeHandler from "./ValueTypeHandler";
import Vue from "vue";
import StringReader from "../UI/view/inspector-subviews/readers/StringReader.vue";
import UnsupportedEditor from "../UI/view/inspector-subviews/editors/UnsupportedEditor.vue";
import StringSerializable from "./serializables/StringSerializable";
export default class ValueTypeRegistry {

  private static _handlers: { [fqn: string]: ValueTypeHandler<any, any, any, any> } = {};

  public static defaultReader: typeof Vue = StringReader;

  public static defaultEditor: typeof Vue = UnsupportedEditor;

  public static registerHandler<T, U , R, E>(converterFQN: string, handler: ValueTypeHandler<T, U, R, E>): void {
    handler = ValueTypeRegistry._ensureTobeFilledValueTypeHandler(converterFQN,handler);
    ValueTypeRegistry._handlers[converterFQN] = handler;
  }

  public static override<T, U , R, E>(converterFQN: string, overrideFrom: string, handler: ValueTypeHandler<T, U, R, E>): void {
    const base = ValueTypeRegistry._handlers[overrideFrom];
    if (base === void 0) {
      throw new Error(`${overrideFrom} is not registered yet.`);
    }
    ValueTypeRegistry._handlers[overrideFrom] = Object.assign(Object.assign({}, base), handler);
  }

  public static get<T, U , R, E>(converterFQN: string): ValueTypeHandler<T, U, R, E> {
    const fetched = ValueTypeRegistry._handlers[converterFQN];
    if(fetched){
      return fetched;
    }else{
      return ValueTypeRegistry._ensureTobeFilledValueTypeHandler<T,U,R,E>(converterFQN,{});
    }
  }

  private static _ensureTobeFilledValueTypeHandler<T, U, R, E>(type:string,handler: ValueTypeHandler<T, U, R, E>): ValueTypeHandler<T, U, R, E> {
    if (handler.reader === void 0) {
      handler.reader = ValueTypeRegistry.defaultReader;
    }
    if (handler.editor === void 0) {
      handler.editor = ValueTypeRegistry.defaultEditor;
    }
    if (handler.attributeValueToJSONConvertible === void 0) {
      handler.attributeValueToJSONConvertible = (v:any) => {
        if(typeof v === "function"){
          throw new Error(`"${type}" : Function can not be converted to JSON`);
        }
        if(Promise.resolve(v) === v){
          throw new Error(`"${type}" : Promise can not be converted to JSON`);
        }
        return v as any as U;
      };
    }
    if (handler.jsonConvertibleToAttribute === void 0) {
      handler.jsonConvertibleToAttribute = (v: any) => {
        return v;
      }
    }
    if (handler.getErrorFromEditor === void 0) {
      handler.getErrorFromEditor = () => "";
    }
    if (handler.readerModelFromConvertible === void 0) {
      handler.readerModelFromConvertible = (v) => v as any as R;
    }
    if (handler.editorModelFromConvertible === void 0) {
      handler.editorModelFromConvertible = (v) => v as any as E;
    }
    if (handler.editorModelTOJSONConvertible === void 0) {
      handler.editorModelTOJSONConvertible = (v) => v as any as U;
    }
    return handler;
  }
}
