import { useRef, useEffect } from "react";
import { mount } from "header/Module";

export const Header = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
};
