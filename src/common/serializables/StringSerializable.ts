import {Serializable,Serialize, SerializeProperty} from "ts-serializer";
@Serialize({})
export default class StringSerializable extends Serializable{

  public constructor(v:string){
    super();
    if(typeof v === "string"){
      this.value = v;
    }
  }

  @SerializeProperty({})
  public value:string;
}
