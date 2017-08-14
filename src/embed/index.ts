import ElementHiglighter from "./ElementHighlighter";
import EmbedSocket from "../common/sockets/EmbedSocket";
import GomlRootObserver from "./GomlRootObserver";
import GrimoireWindow from "../common/GrimoireWindow";
const gr = (window as GrimoireWindow).GrimoireJS;
const eh = new ElementHiglighter();
const es = new EmbedSocket();
es.on("highlight-frame",()=>{
    eh.highlight("body");
});
es.on("remove-highlight-frame",()=>{
    eh.disable();
});
const gro = new  GomlRootObserver(es,gr);
gro.notifyGomlNodes();
gr(()=>{

});