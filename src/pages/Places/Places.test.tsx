import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { places } = baseMocks

		renderWrapper({ initialEntry: places.initialRoute })

		const component = await screen.findByText(places.testWord)

		expect(component).toBeInTheDocument()
	})
})
