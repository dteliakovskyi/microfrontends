import { FC } from "react";
import { Link, Route, Switch } from "react-router-dom";
("react-router-dom");
import { Counter } from "../components/Counter";
import { Component } from "../components/Component";

export const App: FC = () => {
	return (
		<>
			<div>Offers</div>
			<Switch>
				<Route exact path='/component' component={Component} />
				<Route path='/' component={Counter} />
			</Switch>
			<div>
				<Link to='/header'>Go to Header page</Link>
			</div>
		</>
	);
};
