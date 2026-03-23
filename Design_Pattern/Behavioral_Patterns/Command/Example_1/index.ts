import { Light } from "./Receiver";
import { LightOnCommand, LightOffCommand } from "./Command";
import { RemoteControl } from "./Invoker";

// 1. 수신자 생성
const livingRoomLight = new Light();

// 2. 명령 객체 생성 (수신자와 연결)
const lightOn = new LightOnCommand(livingRoomLight);
const lightOff = new LightOffCommand(livingRoomLight);

// 3. 호출자(리모컨) 생성
const remote = new RemoteControl();

// 4. 실행
remote.setCommand(lightOn);
remote.pressButton(); // "Light is ON"

remote.setCommand(lightOff);
remote.pressButton(); // "Light is OFF"
