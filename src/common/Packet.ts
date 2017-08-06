import { Serializable, Serialize, SerializeProperty } from "ts-serializer";
export interface IPacketContent {
  __constructorName__: string;
}

const __serializablePacketFactories__: { [className: string]: new () => Serializable } = {};
export function PacketContent<Constructor extends { new(...args: any[]): Serializable }>(ctor: Constructor) {
  const funcNameRegex = /function (.{1,})\(/;
  const result = (funcNameRegex).exec(ctor.toString());
  const ctorName = (result && result.length > 1) ? result[1] : "";
  const ct = class extends ctor implements IPacketContent {
    public __constructorName__ = ctorName;
  };
  if (!__serializablePacketFactories__[ctorName]) {
    __serializablePacketFactories__[ctorName] = ct;
  } else {
    throw new Error(`Dupelicated identifier for PacketContent class named ${ctorName}`);
  }
  return ct;
}

@Serialize({})
export class Packet<T extends Serializable> extends Serializable {
  @SerializeProperty({})
  public content: Serializable;
  @SerializeProperty({})
  public connectorId: string;
  @SerializeProperty({})
  public connectorType: string;
  @SerializeProperty({})
  public targetKey: string;

  public static fromContent<T extends Serializable>(connectorId: string,connectorType:string,targetKey:string, content: T): Packet<T> {
    const packet = new Packet<T>();
    packet.content = content;
    packet.connectorType = connectorType;
    packet.connectorId = connectorId;
    packet.targetKey = targetKey;
    return packet;
  }

  public static fromJSON<T extends Serializable>(json: string): Packet<T> {
    const p = new Packet<T>();
    p.deserialize(JSON.parse(json));
    if (p.content && typeof (p.content as any as IPacketContent).__constructorName__ === "string") {
      const pc = new __serializablePacketFactories__[(p.content as any as IPacketContent).__constructorName__]();
      pc.deserialize(p.content);
      p.content = pc;
      Packet.convertChildren(p.content);
    }
    return p;
  }

  /**
   * Convert internal objects into PacketContents
   * @param {any} obj [description]
   */
  private static convertChildren(obj: any): void {
    for (let key in obj) {
      const v = obj[key];
      if (typeof v === "object") {
        if (typeof (v as any as IPacketContent).__constructorName__ === "string") {
          const pc = new __serializablePacketFactories__[(v as any as IPacketContent).__constructorName__]();
          pc.deserialize(v);
          obj[key] = pc;
          this.convertChildren(pc);
        } else if (Array.isArray(v)) {
          for (let i = 0; i < v.length; i++) {
            this.convertChildren(v);
          }
        } else {
          this.convertChildren(v);
        }
      }
    }
  }
}
