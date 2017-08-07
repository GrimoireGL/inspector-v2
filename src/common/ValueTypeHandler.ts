import Vue from "vue";
import {Serializable} from "ts-serializer";
interface ValueTypeHandler<OriginalConvertedType,JSONConvertibleType extends Serializable,ReaderModel,EditorModel>{
  reader?: typeof Vue;
  editor?: typeof Vue;
  attributeValueToJSONConvertible?:(t:OriginalConvertedType)=>JSONConvertibleType;
  jsonConvertibleToAttribute?:(t:JSONConvertibleType)=>OriginalConvertedType;
  readerModelFromConvertible?:(t:JSONConvertibleType)=>ReaderModel;
  editorModelFromConvertible?:(t:JSONConvertibleType)=>EditorModel;
  getErrorFromEditor?:(t:EditorModel)=>string|null;
  editorModelTOJSONConvertible?:(t:EditorModel)=>JSONConvertibleType;
}

export default ValueTypeHandler;
