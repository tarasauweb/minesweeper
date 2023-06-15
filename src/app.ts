import { htmlElement } from "./types";
import { Field } from "./components/Field";
import rules from "./rules";
export function App () : htmlElement {
    const app = document.createElement('div');
    app.classList.add('app');
    const field = new Field(app,rules['easy']);
    return app;
}