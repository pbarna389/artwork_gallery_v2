import { render } from '@testing-library/react'

import { UTRouterWrapper } from './utils'

export function renderWrapper({ initialEntry }: { initialEntry: string }) {
	return render(<UTRouterWrapper initialEntry={initialEntry} />)
}
