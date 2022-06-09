import { Link } from "react-router-dom";

export const Component = () => {
	console.log("render");
	return (
		<>
			<div>Component</div>
			<Link to='/'>Go back</Link>
		</>
	);
};
