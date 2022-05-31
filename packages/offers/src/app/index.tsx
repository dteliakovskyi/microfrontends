import { FC } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Counter } from "../components/Counter";
import { Component } from "../components/Component";

export const App: FC = () => {
	return (
		<>
			<div>Offers</div>
			<Switch>
				<Route exact path='/' component={Counter} />
				<Route exact path='offers/component' component={Component} />
			</Switch>
			<div>
				<Link to='/'>Go back</Link>
				<Link to='/header'>Go to Header page</Link>
			</div>
			<p>
				<Link to='/component'>Go to component</Link>
			</p>
		</>
	);
};
