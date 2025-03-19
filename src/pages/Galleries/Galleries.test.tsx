import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { galleries } = baseMocks

		renderWrapper({ initialEntry: galleries.initialRoute })

		const component = screen.getByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(galleries.testWord)
	})
})
