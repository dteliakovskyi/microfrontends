import { createBrowserHistory, createMemoryHistory } from "history";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import { App } from "./app";

export const mount = (element: HTMLElement, onNavigate?: (pathname: string) => void) => {
	const history = createMemoryHistory();

	if (onNavigate) {
		history.listen(({ pathname }) => onNavigate(pathname));
	}

	const root = createRoot(element);

	root.render(
		<Router history={history}>
			<App />
		</Router>
	);

	return (nextPathname: string) => {
		const { pathname } = history.location;

		if (pathname !== nextPathname) {
			history.push(nextPathname);
		}
	};
};

if (process.env.NODE_ENV === "development") {
	const container = document.getElementById("offers");

	if (container) {
		mount(container);
	}
}
