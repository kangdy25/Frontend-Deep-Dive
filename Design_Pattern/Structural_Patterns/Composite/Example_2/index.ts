import { Button, TextBox } from "./Leaves";
import { Panel, Window } from "./Composites";

const submitButton = new Button("Submit");
const cancelButton = new Button("Cancel");
const usernameField = new TextBox("Username");

const formPanel = new Panel("Form");
formPanel.add(submitButton);
formPanel.add(cancelButton);
formPanel.add(usernameField);

const mainWindow = new Window("Main");
mainWindow.add(formPanel);

console.log("--- First Render ---");
mainWindow.render();

console.log("\n--- Second Render (After removal) ---");
formPanel.remove(cancelButton);
mainWindow.render();
