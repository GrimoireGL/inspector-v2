import {Serializable,Serialize, SerializeProperty} from "ts-serializer";
@Serialize({})
export default class StringSerializable extends Serializable{

  public constructor(v:string|null){
    super();
    this.value = v;
  }

  @SerializeProperty({})
  public value:string|null;
}
