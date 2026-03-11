import { OldMessageSystem } from "./OldMessageSystem";
import { MessageAdapter } from "./MessageAdapter";
import { ModernMessageSender } from "./ModernMessageSender";

// 1. 레거시 시스템 준비
const oldSystem = new OldMessageSystem();

// 2. 어댑터에 끼우기 (구형을 신형으로 변환!)
const adapter: ModernMessageSender = new MessageAdapter(oldSystem);

// 3. 사용자는 신형 인터페이스만 사용하면 됨
adapter.sendMessage("Hello, World!", "john@example.com");
