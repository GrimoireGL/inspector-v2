import ElementHiglighter from "./ElementHighlighter";
import EmbedSocket from "../common/sockets/EmbedSocket";
import GomlRootObserver from "./GomlRootObserver";
import GrimoireWindow from "../common/GrimoireWindow";
import EmbedSingleNodeSocket from "../common/sockets/EmbedSingleNodeSocket";
import IGrimoireNodeMessage from "../common/messages/IGrimoireNodeMessage";
import NodeObserver from "./NodeObserver";
import GOMLStructureObserver from "./GOMLStructureObserver";
const gr = (window as GrimoireWindow).GrimoireJS;
const eh = new ElementHiglighter(0.2);
const es = new EmbedSocket();
const esns = new EmbedSingleNodeSocket(es,gr);
const goml = new GOMLStructureObserver(esns);
const node = new NodeObserver(esns,gr);
es.on("highlight-frame",()=>{
    eh.highlight("body");
});
es.on("remove-highlight-frame",()=>{
    eh.disable();
});

esns.on("fetch-nodes",(args:IGrimoireNodeMessage)=>{
    console.log(args.$targetRoot.callRecursively);
});
const gro = new  GomlRootObserver(es,gr);
gro.notifyGomlNodes();
gr(()=>{

});