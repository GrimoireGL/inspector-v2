import ISocket from "../../common/socket/ISocket";
import GrimoireInterfaceImpl from "grimoirejs/ref/Core/GrimoireInterfaceImpl";
import AnimationFactory from "grimoirejs-animation/ref/Animation/AnimationFactory";
export default class AnimationObserver {
    constructor(public socket: ISocket, public gr: GrimoireInterfaceImpl) {
        this.socket.on("fetch-animations", () => {
            this.socket.send("notify-animations", { animations: Object.keys(AnimationFactory.animationGenerators) });
        });
    }

}