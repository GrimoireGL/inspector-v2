import DevtoolAll from "../UI/view/devtool-all";
import "../common_main";
import "../embed/embed.browser";
import BrowserDevtoolSocket from "./BrowserDevtoolSocket";
import DevtoolWindowFrameObserver from "./DevtoolWindowFrameObserver";
import UIConnectorProvider from "../UI/model/UIConnectorProvider";
import "../common_main";
const ds = new BrowserDevtoolSocket();
// Set data providers for devtool UI
const fm = new DevtoolWindowFrameObserver(ds);
UIConnectorProvider.windowObserver = fm;

DevtoolAll("#devtool");