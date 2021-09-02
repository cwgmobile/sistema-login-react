import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./ctx/autenticacao";
import Login from "./views/Login";

export default function App() {
	return (
		<Router>
			<AuthProvider>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">{/* <Home /> */}</Route>
			</Switch>
			</AuthProvider>
		</Router>
	);
}