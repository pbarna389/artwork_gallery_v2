import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { exhibitions } = baseMocks

		renderWrapper({ initialEntry: exhibitions.initialRoute })

		const component = screen.getByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(exhibitions.testWord)
	})
})
