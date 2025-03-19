import { NavLink } from 'react-router'

import { routes } from '@constants'

export const Navbar = () => {
	return (
		<nav className="flex flex-wrap items-center justify-center gap-3 w-screen">
			{routes.map((route) => (
				<NavLink key={route} to={`/${route === 'Home' ? '' : route.toLocaleLowerCase()}`}>
					{route}
				</NavLink>
			))}
		</nav>
	)
}
