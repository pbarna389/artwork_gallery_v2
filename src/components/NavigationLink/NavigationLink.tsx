import { NavLink } from 'react-router'
import { useLocation } from 'react-router'

import type { NavigationLinkProps } from './types'

export const NavigationLink = ({ id, text, imgLink }: NavigationLinkProps) => {
	const { pathname } = useLocation()

	return (
		<div className="flex items-center gap-1">
			{imgLink && <img src={imgLink} className="w-12 h-8" />}
			<NavLink to={`${pathname}/${id}`}>{text}</NavLink>
		</div>
	)
}
