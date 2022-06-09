import { useRef, useEffect } from "react";
import { mount } from "offers/Module";
import { useHistory } from "react-router-dom";

export const Offers = () => {
	const ref = useRef(null);
	const history = useHistory();
	const offersRouteChannel = new BroadcastChannel("offersRouteChannel");

	offersRouteChannel.onmessage = (event: MessageEvent) => {
		const { pathname } = history.location;

		if (event.data !== pathname) {
			history.push(event.data);
		}
	};

	useEffect(() => {
		mount(ref.current, { initialPath: history.location });

		history.listen(({ pathname }) => offersRouteChannel.postMessage(pathname));
	}, []);

	return <div ref={ref} />;
};
