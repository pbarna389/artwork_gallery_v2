import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { collections } = baseMocks

		renderWrapper({ initialEntry: collections.initialRoute })

		const component = await screen.findByText(collections.testWord)

		expect(component).toBeInTheDocument()
	})
})
