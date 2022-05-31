import { useRef, useEffect } from "react";
import { mount } from "header/Module";

console.log(mount);

export const Header = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
		// history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />;
};
