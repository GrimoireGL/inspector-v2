import ValueTypeHandler from "./ValueTypeHandler";
import {Serializable} from "ts-serializer";
import Vue from "vue";
import StringReader from "../views/inspector-subviews/readers/StringReader.vue";
import UnsupportedEditor from "../views/inspector-subviews/editors/UnsupportedEditor.vue";
import StringSerializable from "./serializables/StringSerializable";
export default class ValueTypeRegistry{

  private static _handlers:{[fqn:string]:ValueTypeHandler<any,any,any,any>} = {};

  public static defaultReader:typeof Vue = StringReader;

  public static defaultEditor:typeof Vue = UnsupportedEditor;

  public static registerHandler<T,U extends Serializable,R,E>(converterFQN:string,handler:ValueTypeHandler<T,U,R,E>):void{
    if(handler.reader === void 0){
      handler.reader = ValueTypeRegistry.defaultReader;
    }
    if(handler.editor === void 0){
      handler.editor = ValueTypeRegistry.defaultEditor;
    }
    if(handler.attributeValueToJSONConvertible === void 0){
      handler.attributeValueToJSONConvertible = (v)=>{
        if(typeof v === "string"){
          return new StringSerializable(v) as any as U;
        }else if(typeof v === "object"&& v && typeof v.toString === "function"){
          return new StringSerializable(v.toString()) as any as U;
        }else{
          throw new Error("Supplied value is not convertible to string");
        }
      };
    }
    if(handler.jsonConvertibleToAttribute === void 0){
      handler.jsonConvertibleToAttribute = (v:any)=>{
        if(v.value){
          return v.value;
        }else{
          throw new Error("Implicit json to attribute must only fetch v.value attribute");
        }
      }
    }
    if(handler.getErrorFromEditor === void 0){
      handler.getErrorFromEditor = ()=>"";
    }
    if(handler.readerModelFromConvertible === void 0){
      handler.readerModelFromConvertible = (v)=>v as any as R;
    }
    if(handler.editorModelFromConvertible === void 0){
      handler.editorModelFromConvertible = (v)=>v as any as E;
    }
    if(handler.editorModelTOJSONConvertible === void 0){
      handler.editorModelTOJSONConvertible = (v)=>v as any as U;
    }
    ValueTypeRegistry._handlers[converterFQN] = handler;
  }

  public static override<T,U extends Serializable,R,E>(converterFQN:string,overrideFrom:string,handler:ValueTypeHandler<T,U,R,E>):void{
    const base = ValueTypeRegistry._handlers[overrideFrom];
    if(base === void 0){
      throw new Error(`${overrideFrom} is not registered yet.`);
    }
    ValueTypeRegistry._handlers[overrideFrom] = Object.assign(Object.assign({},base),handler);
  }

  public static get<T,U extends Serializable,R,E>(converterFQN:string):ValueTypeHandler<T,U,R,E>{
    return ValueTypeRegistry._handlers[converterFQN];
  }
}
