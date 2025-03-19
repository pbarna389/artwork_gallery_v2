import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper, testQuery } from '@testing'

const { places } = baseMocks

vi.stubGlobal(
	'fetch',
	vi.fn(() =>
		Promise.resolve({
			json: async () => {
				return { data: places.testQueryMessage }
			}
		})
	)
)

describe('places component tests', () => {
	it('should render the Places component', async () => {
		expect.hasAssertions()

		renderWrapper({ initialEntry: places.initialRoute })

		const component = screen.getByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		await new Promise((r) => setTimeout(r, 1000))

		expect(component).toHaveTextContent(places.testWord)

		const cachedData:
			| {
					pageParams: number[]
					pages: { data: string }[]
			  }
			| undefined = testQuery.getQueryData(['places'])
		console.log('Cached Data:', cachedData)

		expect(cachedData?.pages[0].data).toBe(places.testQueryMessage)
	})
})
