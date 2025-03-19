import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { galleries } = baseMocks

		renderWrapper({ initialEntry: galleries.initialRoute })

		const component = await screen.findByText(galleries.testWord)

		expect(component).toBeInTheDocument()
	})
})
