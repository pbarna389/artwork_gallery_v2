import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component tests', () => {
	test('Should render the App component', async () => {
		render(<App />)

		const component = await screen.findByText('The App will be here')

		expect(component).toBeInTheDocument()
	})
})
