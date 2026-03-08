import { Thermostat } from "./Thermostat";
import { Lights } from "./Lights";
import { CoffeeMaker } from "./CoffeeMaker";
import { SmartHomeFacade } from "./SmartHomeFacade";

// 서브시스템 인스턴스 생성
const thermostat = new Thermostat();
const lights = new Lights();
const coffeeMaker = new CoffeeMaker();

// 퍼사드 생성
const smartHome = new SmartHomeFacade(thermostat, lights, coffeeMaker);

// 복잡한 과정 없이 한 번에 실행!
smartHome.wakeUp();
console.log("---");
smartHome.leaveHome();
