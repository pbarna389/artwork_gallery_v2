import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { artworks } = baseMocks

		renderWrapper({ initialEntry: artworks.initialRoute })

		const component = await screen.findByText(artworks.testWord)

		expect(component).toBeInTheDocument()
	})
})
