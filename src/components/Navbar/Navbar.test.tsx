import { render, screen } from '@testing-library/react'

import { Navbar } from './Navbar'

describe('app component tests', () => {
	it('should render the App component', async () => {
		expect.hasAssertions()

		render(<Navbar />)

		const component = await screen.findByText('Navbar')

		expect(component).toBeInTheDocument()
	})
})
