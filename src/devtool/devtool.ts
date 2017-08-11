///<reference path="../../node_modules/@types/filewriter/index.d.ts"/>
///<reference path="../../node_modules/@types/filesystem/index.d.ts"/>
///<reference path="../../node_modules/@types/chrome/index.d.ts"/>
import DevtoolSocket from "../common/sockets/DevtoolSocket";

const ds = new DevtoolSocket();
ds.send("test",{$frameId:"https://grimoire.gl/"});
