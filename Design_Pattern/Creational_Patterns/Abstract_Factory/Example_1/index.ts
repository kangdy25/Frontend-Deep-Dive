import { WindowsFactory, MacOSFactory } from "./GUIFactory";
import { Application } from "./Application";

// 1. Windows 스타일 UI 생성
const windowsFactory = new WindowsFactory();
const windowsApp = new Application(windowsFactory);
windowsApp.paint();

console.log("---");

// 2. MacOS 스타일 UI 생성
const macFactory = new MacOSFactory();
const macApp = new Application(macFactory);
macApp.paint();
