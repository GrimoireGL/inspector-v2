import ISocket from "../common/socket/ISocket"
import GrimoireWindow from "../common/GrimoireWindow";
import SingleNodeSocketFilter from "./socket/SingleNodeSocketFilter";
import TreeStructureObserver from "./observer/TreeStructureObserver";
import NodeObserver from "./observer/NodeObserver";
import GomlRootObserver from "./observer/GomlRootObserver";
export default class InitEmbed {
    public static init(socket: ISocket): void {
        const gr = (window as GrimoireWindow).GrimoireJS;
        const esns = new SingleNodeSocketFilter(socket, gr);
        const goml = new TreeStructureObserver(esns);
        const node = new NodeObserver(esns, gr);
        const gro = new GomlRootObserver(socket, gr);
        gro.notifyGomlNodes();
    }
}