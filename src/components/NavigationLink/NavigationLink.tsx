import { NavLink } from 'react-router'
import { useLocation } from 'react-router'

import type { NavigationLinkProps } from './types'

export const NavigationLink = ({ id, text }: NavigationLinkProps) => {
	const { pathname } = useLocation()

	return <NavLink to={`${pathname}/${id}`}>{text}</NavLink>
}
