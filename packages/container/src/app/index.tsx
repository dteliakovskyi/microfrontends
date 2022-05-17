import { Suspense, lazy } from "react";

const Header = lazy(() => import("header/Module"));
const Offers = lazy(() => import("offers/Module"));

const App = () => (
	<>
		<header color='#fff'>CONTAINER</header>
		<div>
			<Suspense fallback={<div>Loading</div>}>
				<div>
					<h1 color='#6F60EA'>APP-1</h1>
					<Header />
				</div>
			</Suspense>
			<Suspense fallback={<div>Loading</div>}>
				<div>
					<h1 color='#6F60EA'>APP-2</h1>
					<Offers />
				</div>
			</Suspense>
		</div>
	</>
);

export default App;
