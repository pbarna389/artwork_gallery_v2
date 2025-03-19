import { screen } from '@testing-library/react'

import { baseMocks, renderWrapper, testQuery } from '@testing'

const { agents } = baseMocks

vi.stubGlobal(
	'fetch',
	vi.fn(() =>
		Promise.resolve({
			json: async () => {
				return { data: agents.testQueryMessage }
			}
		})
	)
)

describe('places component tests', () => {
	it('should render the Places component', async () => {
		expect.hasAssertions()

		renderWrapper({ initialEntry: agents.initialRoute })

		const component = screen.getByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(agents.testWord)

		await new Promise((r) => setTimeout(r, 1000))

		const cachedData:
			| {
					pageParams: number[]
					pages: { data: string }[]
			  }
			| undefined = testQuery.getQueryData(['agents'])
		console.log('Cached Data:', cachedData)

		expect(cachedData?.pages[0].data).toBe(agents.testQueryMessage)
	})
})
