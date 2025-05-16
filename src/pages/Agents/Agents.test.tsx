import { act, screen } from '@testing-library/react'

import { baseMocks, renderWrapper, testQuery } from '@testing'

const { agents } = baseMocks

vi.stubGlobal(
	'fetch',
	vi.fn(() =>
		Promise.resolve({
			ok: true,
			json: async () => {
				return {
					data: agents.testQueryMessage,
					pagination: {
						current_page: 1,
						total_pages: 1
					}
				}
			}
		})
	)
)

describe('agents component tests', () => {
	it('should render the Agents component', async () => {
		expect.hasAssertions()

		renderWrapper({ initialEntry: agents.initialRoute })

		await act(async () => {
			await new Promise((r) => setTimeout(r, 500))
		})

		const component = await screen.findByRole('heading', { level: 1 })

		expect(component).toBeInTheDocument()

		expect(component).toHaveTextContent(agents.testWord)

		const cachedData:
			| {
					pageParams: number[]
					pages: { data: string }[]
			  }
			| undefined = await testQuery.getQueryData(agents.queryKeys)

		console.log('Cached Data:', cachedData)

		expect(cachedData?.pages[0].data).toBe(agents.testQueryMessage)
	})
})
