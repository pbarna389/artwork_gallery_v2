import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper } from '@testing'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		const { app } = baseMocks

		renderWrapper({ initialEntry: app.initialRoute })

		const component = await screen.findByText(app.testWord)

		expect(component).toBeInTheDocument()
	})
})
