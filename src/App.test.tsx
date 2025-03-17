import { screen } from '@testing-library/react'

import { renderWrapper } from '@utils'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		renderWrapper()

		const component = await screen.findByText('Home')

		expect(component).toBeInTheDocument()
	})
})
