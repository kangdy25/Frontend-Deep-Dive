import { TV, Radio } from "./Devices";
import { BasicRemote, AdvancedRemote } from "./Remotes";

// TV에 기본 리모컨 연결
const tv = new TV();
const basicRemote = new BasicRemote(tv);
basicRemote.power();
basicRemote.volumeUp();

console.log("---");

// 라디오에 고급 리모컨 연결
const radio = new Radio();
const advancedRemote = new AdvancedRemote(radio);
advancedRemote.power();
advancedRemote.mute();
