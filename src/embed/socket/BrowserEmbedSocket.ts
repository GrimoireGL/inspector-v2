import EmbedSocket from "./EmbedSocket";
export default class BrowserEmbedSocket extends EmbedSocket {
    protected __sendTransform(args: Object): Object {
        return Object.assign({
            $frameId: "(root)"
        }, super.__sendTransform(args));
    }
}