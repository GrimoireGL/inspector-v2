import Vue from "vue";
import {Serializable} from "ts-serializer";
interface ValueTypeHandler<OriginalConvertedType,JSONConvertibleType,ReaderModel,EditorModel>{
  reader?: typeof Vue;
  editor?: typeof Vue;
  metaErrorText?:string;
  attributeValueToJSONConvertible?:(t:OriginalConvertedType)=>JSONConvertibleType;
  jsonConvertibleToAttribute?:(t:JSONConvertibleType)=>OriginalConvertedType;
  readerModelFromConvertible?:(t:JSONConvertibleType)=>ReaderModel;
  editorModelFromConvertible?:(t:JSONConvertibleType)=>EditorModel;
  getErrorFromEditor?:(t:EditorModel)=>string|null;
  editorModelTOJSONConvertible?:(t:EditorModel)=>JSONConvertibleType;
}

export default ValueTypeHandler;
