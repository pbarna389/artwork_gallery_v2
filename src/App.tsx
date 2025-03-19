import { Outlet } from 'react-router'

import { Navbar } from '@components'

function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Outlet />
		</div>
	)
}

export default App
