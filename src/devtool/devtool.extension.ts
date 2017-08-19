///<reference path="../../node_modules/@types/filewriter/index.d.ts"/>
///<reference path="../../node_modules/@types/filesystem/index.d.ts"/>
///<reference path="../../node_modules/@types/chrome/index.d.ts"/>
import ExtensionDevtoolSocket from "./ExtensionDevtoolSocket";
import DevtoolWindowFrameObserver from "./DevtoolWindowFrameObserver";
import UIConnectorProvider from "../UI/model/UIConnectorProvider";
import DevtoolAll from "../UI/view/devtool-all";
import "../common_main";
const ds = new ExtensionDevtoolSocket();
// Set data providers for devtool UI
const fm = new DevtoolWindowFrameObserver(ds);
UIConnectorProvider.windowObserver = fm;
DevtoolAll("#devtool");

