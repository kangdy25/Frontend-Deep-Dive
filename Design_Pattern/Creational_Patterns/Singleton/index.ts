import { Button } from "./Button";
import { TextField } from "./TextField";
import { Label } from "./Label";
import { Theme } from "./Theme";

const button = new Button("Submit");
const textField = new TextField("Enter your name");
const label = new Label("Username");

button.display();
textField.display();
label.display();

console.log("\n--- Switching to Dark Mode ---");

// 어디서든 getInstance()로 접근하면 같은 인스턴스의 상태를 바꿈
Theme.getInstance().setThemeColor("dark");

button.display();
textField.display();
label.display();
