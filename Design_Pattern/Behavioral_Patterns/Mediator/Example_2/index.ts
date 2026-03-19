import { AirportControlTower } from "./AirportMediator";
import { Flight } from "./Flight";
import { Runway } from "./Runway";

const controlTower = new AirportControlTower();

const flight1 = new Flight(controlTower, "KE123");
const flight2 = new Flight(controlTower, "OZ456");
const runway = new Runway(controlTower);

flight1.land(); // KE123 착륙 성공 -> 활주로 점유
flight2.land(); // 활주로가 차있어서 OZ456 대기
runway.clear(); // 활주로 청소 완료 -> 가용 상태로 변경
flight2.land(); // 이제 OZ456 착륙 성공
