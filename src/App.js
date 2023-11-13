import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';

import './style.scss';
import Layout from './_shared/_layout/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
