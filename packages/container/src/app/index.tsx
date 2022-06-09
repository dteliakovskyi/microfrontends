import { FC } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Offers } from "../components/Offers";

export const App: FC = () => {
	return (
		<BrowserRouter>
			<header color='#fff'>CONTAINER</header>
			<Link to={"/header"}>To Header</Link>
			<Link to={"/offers"}>To Offers</Link>
			<Switch>
				<Route path='/header' component={Header} />
				<Route path='/' component={Offers} />
			</Switch>
		</BrowserRouter>
	);
};
