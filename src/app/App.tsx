import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routeConfig } from './routing/routesConfig';
import { Header } from '../widgets/header';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
				<main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<Header />
					<Routes>
						{routeConfig.map((route) => {
							return <Route key={route.path} path={route.path} element={route.element} />;
						})}
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
