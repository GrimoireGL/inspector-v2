import ElementHiglighter from "./ElementHighlighter";
import EmbedSocket from "./socket/EmbedSocket";
import GomlRootObserver from "./observer/GomlRootObserver";
import GrimoireWindow from "../common/GrimoireWindow";
import EmbedSingleNodeSocket from "./socket/SingleNodeSocketFilter";
import IGrimoireNodeMessage from "../common/messages/IGrimoireNodeMessage";
import NodeObserver from "./observer/NodeObserver";
import TreeStructureObserver from "./observer/TreeStructureObserver";
const gr = (window as GrimoireWindow).GrimoireJS;
const es = new EmbedSocket();
const esns = new EmbedSingleNodeSocket(es,gr);
const goml = new TreeStructureObserver(esns);
const node = new NodeObserver(esns,gr);
const gro = new  GomlRootObserver(es,gr);
gro.notifyGomlNodes();
gr(()=>{

});