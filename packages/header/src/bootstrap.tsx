import { createRoot } from "react-dom/client";
import App from "./app";

export const mount = (element: HTMLElement) => {
	const root = createRoot(element);
	root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
	const container = document.getElementById("header");
	if (container) {
		mount(container);
	}
}
