import Vue from "vue";
import {Serializable} from "ts-serializer";
interface ValueTypeHandler<OriginalConvertedType,JSONConvertibleType,ReaderModel,EditorModel,EditorInput>{
  reader?: typeof Vue;
  editor?: typeof Vue;
  metaErrorText?:string;
  attributeValueToJSONConvertible?:(t:OriginalConvertedType)=>JSONConvertibleType;
  jsonConvertibleToAttribute?:(t:JSONConvertibleType)=>OriginalConvertedType;
  readerModelFromConvertible?:(t:JSONConvertibleType)=>ReaderModel;
  editorModelFromConvertible?:(t:JSONConvertibleType)=>EditorModel;
  isValidInputOnEditor?:(t:EditorInput)=>boolean;
  editorModelTOJSONConvertible?:(t1:EditorInput,t2:EditorModel)=>JSONConvertibleType;
}

export default ValueTypeHandler;
