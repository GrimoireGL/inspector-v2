import {Serializable,Serialize, SerializeProperty} from "ts-serializer";
@Serialize({})
export default class BooleanSerializable extends Serializable{

  public constructor(v:boolean){
    super();
    if(typeof v === "boolean"){
      this.value = v;
    }
  }

  @SerializeProperty({})
  public value:boolean;
}
