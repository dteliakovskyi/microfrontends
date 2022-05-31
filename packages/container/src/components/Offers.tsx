import { useRef, useEffect } from "react";
import { mount } from "offers/Module";
import { useLocation, useHistory } from "react-router-dom";

export const Offers = () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const onNavigate = mount(ref.current, (nextPathname: string) => {
			if (nextPathname !== history.location.pathname) {
				history.push(nextPathname);
			}
		});

		history.listen(onNavigate);
	}, []);

	return <div ref={ref} />;
};
