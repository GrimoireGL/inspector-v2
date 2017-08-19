import InitEmbed from "./InitEmbed";
import BrowserEmbedSocket from "./socket/BrowserEmbedSocket";
const socket = new BrowserEmbedSocket("browser-mode");
socket.on("cs-fetch-windows", () => {
    // Mock
    socket.send("cs-notify-window", {
        windowId: "(root)",
        windowLocation: window.location.href
    });
});
InitEmbed.init(socket);