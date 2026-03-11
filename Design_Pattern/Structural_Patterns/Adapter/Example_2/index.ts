import { USB, HDMI, VGA } from "./Adaptees";
import { USBAdapter, HDMIAdapter, VGAAdapter } from "./Adapters";
import { DisplayAdapter } from "./DisplayAdapter";

const usb = new USB();
const hdmi = new HDMI();
const vga = new VGA();

// 타입스크립트의 배열을 사용하여 어댑터들을 관리합니다.
const adapters: DisplayAdapter[] = [];
adapters.push(new USBAdapter(usb, "Video Data"));
adapters.push(new HDMIAdapter(hdmi, 1080));
adapters.push(new VGAAdapter(vga, true));

// 일관된 방식으로 모든 기기를 실행!
adapters.forEach((adapter) => {
  adapter.display();
});
