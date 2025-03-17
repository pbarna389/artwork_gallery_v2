import { render, screen } from '@testing-library/react'

import App from './App'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		render(<App />)

		const component = await screen.findByText('Home')

		expect(component).toBeInTheDocument()
	})
})
